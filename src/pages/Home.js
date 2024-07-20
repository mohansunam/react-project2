import React from 'react'

const Home = () => {
  const handle = () => {
    const m = document.getElementById('name')
    m.innerText = 'Chandra';

  }

  return (
    <div className='p-10'>
      <h1 id='name'>Hello Mohan</h1>
      <button onClick={handle}>click</button>
      
    </div>
  )
}

export default Home
