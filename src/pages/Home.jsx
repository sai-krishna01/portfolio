import profilePic from "../assets/saikrishna.png";
import Social from "../pages/Social";
import Connect from "../pages/Connect";
function Home() {
  return (
    <>
      <div className="home-container">
        <img src={profilePic} className="user" alt="" />
        <h2>Hey I am Sai Krishna!</h2>
        <p>
          I'm a frontend developer, optimist, and community builder. I work at
          Vercel, where I teach the Next.js community, an open-source web
          framework built with React.
        </p>
        <div className="connect-flex">
          <a href="" className="connect">
            My Resume
          </a>
          <a href="Social" className="connect">
            Follow Me on social media{" "}
          </a>
          <a href="Connect" className="connect">
            let's talk!{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
