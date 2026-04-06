import { useMemo, useState } from 'react'
import Todo from '../assets/todo.png'
import Weather from '../assets/weather.png'
import Portfolio from '../assets/portfolio.png'

const projects = [
  {
    name: 'Todo Web App',
    image: Todo,
    type: 'Productivity',
    description: 'Task management app with smooth interactions and live updates.',
    link: 'https://todo-app-pi-nine-44.vercel.app/',
  },
  {
    name: 'Weather Report',
    image: Weather,
    type: 'API Integration',
    description: 'Real-time weather forecasts with a minimal, mobile-first interface.',
    link: 'https://weather-report-bay.vercel.app/',
  },
  {
    name: 'Portfolio Classic',
    image: Portfolio,
    type: 'Personal Brand',
    description: 'The previous version of my portfolio website for comparison.',
    link: 'https://portfolio-mu-one-72.vercel.app/',
  },
]

const filters = ['All', 'Productivity', 'API Integration', 'Personal Brand']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.type === activeFilter)
  }, [activeFilter])

  return (
    <section className="home-container card-surface">
      <h2>Featured Projects</h2>
      <p>
        Filter by category to quickly discover product-focused builds, API-driven features, and
        branding work.
      </p>

      <div className="filter-row" role="tablist" aria-label="Project categories">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-flex">
        {visibleProjects.map((project) => (
          <article className="card" key={project.name}>
            <img src={project.image} alt={project.name} />
            <div className="p-flex">
              <div>
                <h4>{project.name}</h4>
                <small>{project.type}</small>
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="share-link">
                ↗
              </a>
            </div>
            <p className="desc">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
