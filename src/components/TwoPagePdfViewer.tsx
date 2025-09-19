import React, { useEffect, useRef, useState, useCallback } from 'react'
import * as pdfjsLib from 'pdfjs-dist'

// Use the correct worker file for pdfjs-dist v5.x (.mjs format)
pdfjsLib.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.mjs`

type Props = {
  src: string
}

const TwoPagePdfViewer: React.FC<Props> = ({ src }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftCanvasRef = useRef<HTMLCanvasElement>(null)
  const rightCanvasRef = useRef<HTMLCanvasElement>(null)
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null)
  // spreadIndex = 0 => [blank, 1]; 1 => [2,3]; 2 => [4,5] ...
  const [spreadIndex, setSpreadIndex] = useState(0)
  const [scale, setScale] = useState(1.2)
  const [error, setError] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [currentPage, setCurrentPage] = useState(1) // Per modalità mobile

  // Rileva se siamo su mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
    if (isMobile) {
      // Modalità mobile: mostra solo una pagina
      const leftCanvas = leftCanvasRef.current
      const rightCanvas = rightCanvasRef.current
      
      if (leftCanvas) {
        const ctx = leftCanvas.getContext('2d')
        if (ctx) ctx.clearRect(0, 0, leftCanvas.width, leftCanvas.height)
        leftCanvas.style.display = 'none'
      }
      
      await renderPageToCanvas(currentPage, rightCanvas)
      if (rightCanvas) {
        rightCanvas.style.display = 'block'
      }
    } else {
      // Modalità desktop: mostra due pagine (layout libro)
      const leftCanvas = leftCanvasRef.current
      const rightCanvas = rightCanvasRef.current
      
      if (leftCanvas) leftCanvas.style.display = 'block'
      if (rightCanvas) rightCanvas.style.display = 'block'
      
      // Determine pages for current spread
      let leftPageNum: number | null
      let rightPageNum: number | null
      if (spreadIndex === 0) {
        leftPageNum = null
        rightPageNum = 1
      } else {
        leftPageNum = spreadIndex * 2
        rightPageNum = leftPageNum + 1
      }

      // Render left (blank if null or out of range)
      if (leftPageNum == null) {
        if (leftCanvas) {
          const ctx = leftCanvas.getContext('2d')
          if (ctx) ctx.clearRect(0, 0, leftCanvas.width, leftCanvas.height)
          // Try to mirror right canvas CSS size for layout symmetry
          if (rightCanvas) {
            leftCanvas.style.width = rightCanvas.style.width
            leftCanvas.style.height = rightCanvas.style.height
            leftCanvas.width = rightCanvas.width
            leftCanvas.height = rightCanvas.height
          }
        }
      } else {
        await renderPageToCanvas(leftPageNum, leftCanvas)
      }

      // Render right
      await renderPageToCanvas(rightPageNum ?? 0, rightCanvas)
    }
  }, [spreadIndex, renderPageToCanvas, isMobile, currentPage])

  useEffect(() => {
    let canceled = false
    const load = async () => {
      try {
        setError(null)
        // Simplified PDF.js configuration for v5.x
        const loadingTask = pdfjsLib.getDocument({
          url: src,
          verbosity: 0 // Reduce console noise
        })
        const doc = await loadingTask.promise
        if (canceled) return
        setPdfDoc(doc)
        // Start with first spread [blank, 1]
        setSpreadIndex(0)
      } catch (e: any) {
        if (canceled) return
        console.error('Errore caricamento PDF:', e)
        setError('Impossibile caricare il PDF. Prova ad aprirlo direttamente dal link qui sotto.')
      }
    }
    load()
    return () => { canceled = true }
  }, [src])

  useEffect(() => {
    if (!pdfDoc) return
    renderSpread()
  }, [pdfDoc, renderSpread, scale])

  // Sincronizza la pagina corrente quando cambiamo modalità
  useEffect(() => {
    if (!pdfDoc) return
    
    if (isMobile) {
      // Quando passiamo a mobile, sincronizza la pagina corrente con lo spread
      if (spreadIndex === 0) {
        setCurrentPage(1)
      } else {
        setCurrentPage(spreadIndex * 2) // Mostra la prima pagina dello spread corrente
      }
    }
  }, [isMobile, spreadIndex, pdfDoc])

  const next = () => {
    if (!pdfDoc) return
    
    if (isMobile) {
      // Modalità mobile: naviga per singola pagina
      setCurrentPage((page) => Math.min(page + 1, pdfDoc.numPages))
    } else {
      // Modalità desktop: naviga per spread
      const n = pdfDoc.numPages
      const maxSpread = Math.ceil((Math.max(n - 1, 0)) / 2)
      setSpreadIndex((s) => Math.min(s + 1, maxSpread))
    }
  }
  
  const prev = () => {
    if (isMobile) {
      // Modalità mobile: naviga per singola pagina
      setCurrentPage((page) => Math.max(1, page - 1))
    } else {
      // Modalità desktop: naviga per spread
      setSpreadIndex((s) => Math.max(0, s - 1))
    }
  }

  const zoomIn = () => setScale((s) => Math.min(2.5, s + 0.1))
  const zoomOut = () => setScale((s) => Math.max(0.6, s - 0.1))

  return (
    <div className="two-page-viewer" ref={containerRef}>
      <div className="tpv-toolbar">
        <button onClick={prev} aria-label="Pagina precedente">⟵</button>
        {(() => {
          const n = pdfDoc?.numPages ?? 0
          
          if (isMobile) {
            // Modalità mobile: mostra pagina corrente / totale
            return (
              <span className="tpv-info">Pagina {currentPage}/{n} • scala {scale.toFixed(1)}x</span>
            )
          } else {
            // Modalità desktop: mostra pagine spread come prima
            let leftLabel = '-'
            let rightLabel = '-'
            if (spreadIndex === 0) {
              rightLabel = n >= 1 ? '1' : '-'
            } else {
              const left = spreadIndex * 2
              const right = left + 1
              leftLabel = left <= n ? String(left) : '-'
              rightLabel = right <= n ? String(right) : '-'
            }
            return (
              <span className="tpv-info">{leftLabel}/{rightLabel} • scala {scale.toFixed(1)}x</span>
            )
          }
        })()}
        <button onClick={next} aria-label="Pagina successiva">⟶</button>
        <div className="tpv-zoom">
          <button onClick={zoomOut} aria-label="Zoom -">−</button>
          <button onClick={zoomIn} aria-label="Zoom +">＋</button>
        </div>
      </div>
      {error ? (
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <p>{error}</p>
          <p>
            <a href={src} target="_blank" rel="noopener noreferrer">Apri il PDF in una nuova scheda</a>
          </p>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <iframe
              className="pdf-frame"
              title="Manuale PDF"
              src={src}
              style={{ height: '80vh' }}
            />
          </div>
        </div>
      ) : (
        <div className="tpv-spread">
          <canvas ref={leftCanvasRef} className="tpv-page"></canvas>
          <canvas ref={rightCanvasRef} className="tpv-page"></canvas>
        </div>
      )}
    </div>
  )
}

export default TwoPagePdfViewer
