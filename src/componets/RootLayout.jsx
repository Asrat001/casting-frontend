import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Hero from './Hero'

const RootLayout = () => {
  return (
    <>
        <header className=' '>
       <Navbar/>
       
        </header>
        <main className=' '>
<       Outlet/>
        </main>
        <footer className=''>
<p>hey footer</p>
        </footer>
    </>
  )
}

export default RootLayout