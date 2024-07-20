import React, { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0);
  const handleCount = ()=>{
    setCount((p)=> p + 1);
  }


  return (
    <div className='p-8'>
      <div>
      <h1>{count % 2=== 0 ? `Even number ${count}` : `Odd Number ${count}`}</h1>
      <button  onClick={handleCount}>Add Me</button>
      

      </div>

    </div>
  )
}

export default Home
