import profilePic from '../assets/saikrishna.png'
import { Link } from 'react-router-dom'

const highlights = [
  { label: 'Experience', value: '3+ Years' },
  { label: 'Projects Delivered', value: '25+' },
  { label: 'Mentored Devs', value: '200+' },
]

const skills = ['React', 'Node.js', 'MongoDB', 'TypeScript', 'UI/UX Design', 'Performance']

function Home() {
  return (
    <section className="home-container card-surface">
      <div className="hero">
        <img src={profilePic} className="user" alt="Sai Krishna profile" />
        <div>
          <p className="section-kicker">Hello, I am</p>
          <h2>Sai Krishna 👋</h2>
          <p>
            I build end-to-end web products with clean architecture and polished UI. This update
            brings a stronger visual system, quicker navigation, and better mobile UX.
          </p>
          <div className="chip-row">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="highlights-grid">
        {highlights.map((item) => (
          <article key={item.label} className="mini-card">
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </article>
        ))}
      </div>

      <div className="connect-flex">
        <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="connect">
          Download Resume
        </a>
        <Link to="/projects" className="connect">
          Explore Latest Projects
        </Link>
        <Link to="/connect" className="connect cta-outline">
          Book a Quick Chat
        </Link>
      </div>
    </section>
  )
}

export default Home
