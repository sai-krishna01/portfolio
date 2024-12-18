import Todo from "../assets/todo.png";
import Weather from "../assets/weather.png";
import Portfolio from "../assets/portfolio.png";


function Projects() {
  return (
    <>
      <div className="home-container">
        <h2>My recent Projects</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          commodi aliquid vero odit consequatur?
        </p>

        <div className="project-flex">
          <div className="card">
            <img src={Todo} alt="" />
            <div className="p-flex">
              <h4>Todo Web-App</h4>
              <div className="share-icon">
                <a href="https://todo-app-pi-nine-44.vercel.app/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-up-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                  />
                </svg>
                </a>
                
              </div>
            </div>
            <p className="desc">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="card">
            <img src={Weather} alt="" />
            <div className="p-flex">
              <h4>Weather report</h4>
              <div className="share-icon">
                <a href="https://weather-report-bay.vercel.app/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-up-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                  />
                </svg>
                </a>

              </div>
            </div>
            <p className="desc">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="card">
            <img src={Portfolio} alt="" />
            <div className="p-flex">
              <h4>Todo Web-App</h4>
              <div className="share-icon">
                <a href="https://portfolio-mu-one-72.vercel.app/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-up-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                  />
                </svg>
                </a>
                
              </div>
            </div>
            <p className="desc">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
