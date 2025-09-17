import React, { useEffect, useRef, useState, useCallback } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import 'pdfjs-dist/build/pdf.worker.mjs'

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.mjs', import.meta.url).toString()

type Props = {
  src: string
}

const TwoPagePdfViewer: React.FC<Props> = ({ src }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftCanvasRef = useRef<HTMLCanvasElement>(null)
  const rightCanvasRef = useRef<HTMLCanvasElement>(null)
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null)
  const [pageIndex, setPageIndex] = useState(1) // 1-based
  const [scale, setScale] = useState(1.2)

  const renderPageToCanvas = useCallback(async (pageNum: number, canvas: HTMLCanvasElement | null) => {
    if (!pdfDoc || !canvas) return
    if (pageNum < 1 || pageNum > pdfDoc.numPages) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
      return
    }
    const page = await pdfDoc.getPage(pageNum)
    const viewport = page.getViewport({ scale })
    const outputScale = window.devicePixelRatio || 1
    const context = canvas.getContext('2d')!
    canvas.width = Math.floor(viewport.width * outputScale)
    canvas.height = Math.floor(viewport.height * outputScale)
    canvas.style.width = `${viewport.width}px`
    canvas.style.height = `${viewport.height}px`
    const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined
    const renderContext = { canvasContext: context, viewport, transform }
    await page.render(renderContext as any).promise
  }, [pdfDoc, scale])

  const renderSpread = useCallback(async () => {
    await renderPageToCanvas(pageIndex, leftCanvasRef.current)
    await renderPageToCanvas(pageIndex + 1, rightCanvasRef.current)
  }, [pageIndex, renderPageToCanvas])

  useEffect(() => {
    let canceled = false
    const load = async () => {
      const loadingTask = pdfjsLib.getDocument(src)
      const doc = await loadingTask.promise
      if (canceled) return
      setPdfDoc(doc)
      // Ensure start on odd page for left side
      setPageIndex(1)
    }
    load()
    return () => { canceled = true }
  }, [src])

  useEffect(() => {
    if (!pdfDoc) return
    renderSpread()
  }, [pdfDoc, renderSpread, scale])

  const next = () => {
    if (!pdfDoc) return
    setPageIndex((p) => Math.min(p + 2, (pdfDoc.numPages % 2 === 0) ? pdfDoc.numPages - 1 : pdfDoc.numPages))
  }
  const prev = () => {
    setPageIndex((p) => Math.max(1, p - 2))
  }

  const zoomIn = () => setScale((s) => Math.min(2.5, s + 0.1))
  const zoomOut = () => setScale((s) => Math.max(0.6, s - 0.1))

  return (
    <div className="two-page-viewer" ref={containerRef}>
      <div className="tpv-toolbar">
        <button onClick={prev} aria-label="Pagina precedente">⟵</button>
        <span className="tpv-info">{pageIndex}/{pdfDoc?.numPages ?? '?'} • scala {scale.toFixed(1)}x</span>
        <button onClick={next} aria-label="Pagina successiva">⟶</button>
        <div className="tpv-zoom">
          <button onClick={zoomOut} aria-label="Zoom -">−</button>
          <button onClick={zoomIn} aria-label="Zoom +">＋</button>
        </div>
      </div>
      <div className="tpv-spread">
        <canvas ref={leftCanvasRef} className="tpv-page"></canvas>
        <canvas ref={rightCanvasRef} className="tpv-page"></canvas>
      </div>
    </div>
  )
}

export default TwoPagePdfViewer
