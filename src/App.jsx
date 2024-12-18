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
      <Link to='/Connect' className='nav-link'>Let&apos;s Talk</Link>

 </nav>


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
