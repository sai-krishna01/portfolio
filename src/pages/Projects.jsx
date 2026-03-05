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

function Projects() {
  return (
    <div className="home-container card-surface">
      <h2>Featured Projects</h2>
      <p>
        Curated work samples that show my front-end polish, API integration skills, and ability to
        ship responsive interfaces quickly.
      </p>

      <div className="project-flex">
        {projects.map((project) => (
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
    </div>
  )
}

export default Projects
