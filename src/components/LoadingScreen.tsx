import React from 'react'

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <img 
        className="loading-gif" 
        src="/GIFSITO.gif" 
        alt="Loading..." 
      />
    </div>
  )
}

export default LoadingScreen
