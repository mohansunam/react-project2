import React, { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0);
  const handleCount = ()=>{
    setCount((p)=> p + 1);
  }


  return (
    <div className='p-8'>
      <h1>{count}</h1>
      <button onClick={handleCount}>Add Me</button>
      
    </div>
  )
}

export default Home
