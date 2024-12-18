import profilePic from "../assets/saikrishna.png";
import Social from "../pages/Social";
import Connect from "../pages/Connect";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home-container">
        <img src={profilePic} className="user" alt="" />
        <h2>Hey I am Sai Krishna!</h2>
        <p>
        A MERN stack developer, problem solver, and community enthusiast, I specialize in crafting dynamic web solutions and empowering students with technology to achieve their goals.
        </p>
        <div className="connect-flex">
<Link to="/" className="connect">My Resume</Link> 
<Link to="/social" className="connect">Follow Me on Social Media</Link>
<Link to="/connect" className="connect">Let's talk!</Link>

        </div>
      </div>
    </>
  );
}

export default Home;
