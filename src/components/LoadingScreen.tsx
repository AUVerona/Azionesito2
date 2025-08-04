import React from 'react'
import { IMAGES } from '../utils/paths'

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <img 
        className="loading-gif" 
        src={IMAGES.LOADING_GIF}
        alt="Loading..." 
      />
    </div>
  )
}

export default LoadingScreen
