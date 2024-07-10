import React from 'react'

const Header = () => {
  return (
    <div>
      <header className='bg-black text-white flex items-baseline justify-between px-2 py-4'>
        <h1 className='text-2xl'>Chandra Mohan sunam</h1>
        <nav className='space-x-5'>
          <a className='same' href="">About</a>
          <a className='same' href="">Contact</a>
        </nav>
      </header>
    </div>
  )
}

export default Header

