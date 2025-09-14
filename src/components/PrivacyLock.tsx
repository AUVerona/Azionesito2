import React from 'react'
import { Link } from 'react-router-dom'
import './PrivacyLock.css'

const PrivacyLock: React.FC = () => {
  return (
    <Link to="/privacy" className="privacy-lock" title="Informativa Privacy">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <circle cx="12" cy="16" r="1"></circle>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    </Link>
  )
}

export default PrivacyLock