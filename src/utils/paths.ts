// Utility per gestire i percorsi delle immagini
// Funziona sia in sviluppo che in produzione

export const getImagePath = (imageName: string): string => {
  // Controlla se siamo in sviluppo guardando la porta
  const isDev = window.location.hostname === 'localhost'
  
  if (isDev) {
    return `/${imageName}`
  }
  
  // In produzione (GitHub Pages), usa il base path
  return `/Azionesito2/${imageName}`
}

// Percorsi delle immagini
export const IMAGES = {
  LOADING_GIF: getImagePath('GIFSITO.gif'),
  LOGO: getImagePath('logo-auvr.png'),
} as const
