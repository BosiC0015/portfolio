import { ExternalLink } from "../ExternalLink";
import tweeter from "../preview/Tweeter.png";
import "../Projectpage.css";


export default function Tweeter() {
  return (
    <section id="tweeter" className="project-card">
      <div className="project-title">
        <h5>
          <a className="project-title" href="https://github.com/BosiC0015/tweeter" target="_blank" rel="noreferrer">
            Tweeter
            <ExternalLink />
          </a>
        </h5>
      </div>
      <div className="about">
        <div className="text">
          <div className="stacks">
            <p id="stacks">HTML, CSS, jQuery</p>
          </div>
          <div className="desc">
            <p id="description">The tweeter is a simple, single-page Twitter clone, having the function of sending a tweet and fetching and displaying tweets from the server data.</p>
          </div>
        </div>
        <div className="project-img">
          <img className="project-img" src={tweeter} alt="tweeter" />
        </div>
      </div>
    </section>
  );
};