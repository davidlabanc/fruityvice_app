import React from 'react'

function Header({text, header} : {text: string | undefined, header: string | undefined}) {
  return (
    <div className='text-center mt-24'>
      <h3 className='uppercase tracking-widest font-bold text-base'>{text}</h3>
      <h1 className="uppercase pb-0 mt-3 tracking-widest text-4xl font-bold mb-12">{header}</h1>
    </div>
  )
}

export default Header