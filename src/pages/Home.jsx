import profilePic from '../assets/saikrishna.png'
import { Link } from 'react-router-dom'

const highlights = [
  '3+ years building full-stack web apps',
  'MERN specialist with strong UI engineering focus',
  'Mentored 200+ students in practical development workflows',
]

function Home() {
  return (
    <div className="home-container card-surface">
      <div className="hero">
        <img src={profilePic} className="user" alt="Sai Krishna profile" />
        <div>
          <p className="section-kicker">Hello, I am</p>
          <h2> Sai Krishna 👋</h2>
          <p>
            I design and build fast, user-friendly web experiences with the MERN stack. This v2.1
            portfolio focuses on cleaner UX, responsive layouts, and quick ways to connect.
          </p>
        </div>
      </div>

      <div className="highlights-grid">
        {highlights.map((item) => (
          <article key={item} className="mini-card">
            {item}
          </article>
        ))}
      </div>

      <div className="connect-flex">
        <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="connect">
          Download Resume
        </a>
        <Link to="/projects" className="connect">
          Explore Projects
        </Link>
        <Link to="/connect" className="connect">
          Book a Quick Chat
        </Link>
      </div>
    </div>
  )
}

export default Home
