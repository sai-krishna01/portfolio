import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import {Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Social from './pages/Social'
import Connect from './pages/Connect'

function App() {

  return (
    <>
 <nav className='navbar'>
      <Link to='/' className='nav-link'>home</Link>
      <Link to='/projects' className='nav-link'>Projects</Link>
      <Link to='/Social' className='nav-link'>Social Links</Link>
      <Link to='/Connect' className='nav-link'>Let's Talk</Link>

 </nav>

 {/* I'm a frontend developer, optimist, and community builder. I work at Vercel,
  where I teach the Next.js community, an open-source web framework built with React. */}

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/Projects' element={<Projects/>} />
  <Route path='/Social' element={<Social/>} />
  <Route path='/Connect' element={<Connect/>} />
</Routes>

    </>
  )
}

export default App
