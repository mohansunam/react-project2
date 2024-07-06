port React from 'react'
import { DiAndroid, DiAngularSimple, DiApple, DiBootstrap, DiCss3, DiHtml5, DiJavascript, DiNodejs, DiPhp, DiPython } from 'react-icons/di'

const Tech = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Technologies I use</h1>
      <div className='dev-icons grid justify-center sm:grid-cols-1 md:grid-cols-2 lg: grid-cols-4'>
        <DiHtml5 color='blue' size={200} className='animate-bounce' />
        <DiAndroid color='blue' size={200}className='animate-spin'/>
        <DiPython color='blue' size={200}/>
        <DiNodejs color='blue' size={200}className='animate-bounce'/>
        <DiBootstrap color='blue' size={200} className='animate-pulse'/>
        <DiJavascript color='blue' size={200}/>
        <DiPhp color='blue' size={200}className='animate-spin'/>
        <DiAngularSimple color='blue' size={150}/>
       

      </div>
    </div>
  )
}

export default Tech
