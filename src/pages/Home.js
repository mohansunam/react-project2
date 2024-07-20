import { faker } from '@faker-js/faker';
import React, { useState } from 'react'

const Home = () => {
  const [users, setUser]= useState([]);
  const handleKey = () =>{
    const newObj = {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      image: faker.image.avatarLegacy()
    }
    setUser((pre) => [...pre, newObj]);
  }


  return (
    <div className='p-10'>
      <div className='flex justify-end'>
      <button className='bg-red-500 p-3' onClick={handleKey}>Add new</button> 
      </div>
       {users.map((u, i) => {
        return <div key ={i}>
          <img src={u.image} alt="" />
          <h1>{u.name}</h1>
          <h1>{u.email}</h1>

        </div>
       })}
     
    </div>
   
  )
}

export default Home
