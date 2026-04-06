import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Social from './pages/Social'
import Connect from './pages/Connect'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    setMenuOpen(false)
  }, [theme])

  const nextThemeLabel = useMemo(() => (theme === 'light' ? 'Dark' : 'Light'), [theme])

  return (
    <div className="app-shell">
      <header className="header card-surface">
        <div className="brand">
          <p className="badge">Portfolio v3.0</p>
          <h1>Sai Krishna</h1>
          <p className="tagline">Full-stack engineer focused on modern, conversion-friendly experiences.</p>
        </div>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'} {nextThemeLabel} mode
          </button>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>
      </header>

      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
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
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/social" element={<Social />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </div>
  )
}

export default App
