import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (

    <nav id="header" className="fixed w-full z-30 top-0 bg-slate-800 text-gray-200">
      <div className="w-full container mx-auto flex items-center justify-between mt-0 py-5">
        <div>
            <h1 className='text-2xl font-extrabold text-pink-600'>TecnoITIL</h1>
        </div>
        <div>
            <a className='me-10 text-lg font-bold' href='#services'>Servicios</a>
            <Button name="Contáctanos" link="#contact" />
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  )
}

export default Navbar