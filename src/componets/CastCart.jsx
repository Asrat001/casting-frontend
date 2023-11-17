import React from 'react'

const CastCart = ({isOpen}) => {
    console.log(isOpen)
  return (
    <div className={`${isOpen?' block':' hidden'} absolute top-0 right-0 h-screen w-1/4 z-30  bg-black/40`}>
       
    </div>
  )
}

export default CastCart