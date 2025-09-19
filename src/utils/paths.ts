// Utility per gestire i percorsi pubblici (immagini/PDF)
// Usa sempre la base di Vite, corretta sia in dev che in build
export const getImagePath = (fileName: string): string => {
  return `${import.meta.env.BASE_URL}${fileName}`
}

// Percorsi delle immagini
export const IMAGES = {
  LOADING_GIF: getImagePath('GIFSITO.gif'),
  LOGO: getImagePath('logo-auvr.png'),
} as const
