import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Social from './pages/Social'
import Connect from './pages/Connect'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <div className="app-shell">
        <header className="header">
          <div className="brand">
            <p className="badge">Portfolio v2.1</p>
            <h1>Sai Krishna</h1>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </header>

        <nav className="navbar">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Projects
          </NavLink>
          <NavLink to="/social" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Social
          </NavLink>
          <NavLink to="/connect" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Let&apos;s Talk
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/social" element={<Social />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </div>
    </>
  )
}

export default App
