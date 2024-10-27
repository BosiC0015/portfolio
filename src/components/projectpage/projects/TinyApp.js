import { ExternalLink } from "../ExternalLink";
import tinyApp from "../preview/Tiny.png";
import "../Projectpage.css";


export default function TinyApp() {
  return (
    <section id="tinyapp" className="project-card">
      <div className="project-title">
        <h5>
          <a className="project-title" href="https://github.com/BosiC0015/tinyapp" target="_blank" rel="noreferrer">
            TinyApp
            <ExternalLink />
          </a>
        </h5>
      </div>
      <div className="about">
        <div className="text">
          <div className="stacks">
            <p id="stacks">EJS, Express.js</p>
          </div>
          <div className="desc">
            <p id="description">TinyApp can store URLs as shortened links, create new shortened URLs, updating URLs for an existing shortened URL. And everyone can simply register with an email.</p>
          </div>
        </div>
        <div className="project-img">
          <img className="project-img" src={tinyApp} alt="tiny-app" />
        </div>
      </div>
    </section>
  );
};