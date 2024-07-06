import React from 'react'

const DisplaySec = () => {
  return (
    <div className='grid grid-cols-2 items-center space-x-3 sm:grid-cols-1'>
      <div className="dis-img h-[450px]">
      <dotlottie-player src="https://lottie.host/40ff05ea-0e36-4521-848a-04e3d7d437dc/GlSRxNKG0L.json" background="transparent" speed="1" loop autoplay></dotlottie-player>

      </div>
      <div className="dis-info space-y-2">
        <h1 className='text-3xl font-bold '>Hi! I am Chandra </h1>
        <p className='text-pink-500 '>Freelancer, React Developer,Web Developer</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dicta voluptas, magni laborum hic nemo aliquam adipisci necessitatibus repudiandae recusandae veritatis. Autem, voluptatum et nemo iusto.</p>
        
      </div>
      
    </div>
  )
}

export default DisplaySec
