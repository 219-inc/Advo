import React from 'react'
import { Navigate } from 'react-router-dom'

function NotFoundPage({unProtected}) {

  if(unProtected){
    return <Navigate to='/' />
  }

  return (
    <div className='h-full w-full flex items-center justify-center bg-white'>
      <img src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.png" />
    </div>
  )
}

export default NotFoundPage