import { faker } from '@faker-js/faker';
import React, { useState } from 'react'
import ProfileCard from '../components/ProfileCard';

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
       {users.map((u, i)=>{
        return <ProfileCard user={u} key={i}/>
      })}
      
    
     
    </div>
   
  )
}

export default Home
