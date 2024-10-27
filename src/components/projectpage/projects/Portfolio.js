import { ExternalLink } from "../ExternalLink";
import portfolio from "../preview/Porfolio.png";
import "../Projectpage.css";


export default function TinyApp() {
  return (
    <section id="portfolio" className="project-card">
      <div className="project-title">
        <h5>
          <a className="project-title" href="https://github.com/BosiC0015/personal-website" target="_blank" rel="noreferrer">
            Portfolio Website
            <ExternalLink />
          </a>
        </h5>
      </div>
      <div className="about">
        <div className="text">
          <div className="stacks">
            <p id="stacks">React.js, CSS, SCSS, Bootstrap</p>
          </div>
          <div className="desc">
            <p id="description">My portfolio website, built with React.js CSS and SCSS. There is a homepage for introduction and connection and a project page outlining all my projects.</p>
          </div>
        </div>
        <div className="project-img">
          <img className="project-img" src={portfolio} alt="portfolio" />
        </div>
      </div>
    </section>
  );
};