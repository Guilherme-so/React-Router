import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'


function Home() {
  return (
    <div>
      <Head title='Home' description='Home description' />
      <h1>Home</h1>
      <div className='produto'>
        <Link to='/produto/notebook'>Notebook</Link>  
        <Link to='/produto/celular'>Celular</Link>  
      </div>      
    </div>
  )
}

export default Home