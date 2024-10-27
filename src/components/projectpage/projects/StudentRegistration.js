import { ExternalLink } from "../ExternalLink";
import studentRegistration from "../preview/StudentRegistration.png";
import "../Projectpage.css";


export default function StudentRegistrationApp() {
  return (
    <section id="tinyapp" className="project-card">
      <div className="project-title">
        <h5>
          <a className="project-title" href="https://github.com/BosiC0015/StudentRegistrationApp" target="_blank" rel="noreferrer">
            StudentRegistrationApp
            <ExternalLink />
          </a>
        </h5>
      </div>
      <div className="about">
        <div className="text">
          <div className="stacks">
            <p id="stacks">C#, ASP.NET, Bootstrap</p>
          </div>
          <div className="desc">
            <p id="description">A webform application created using C# and ASP.NET Webform Framework. This application can allow users to add students to the list and register courses for each student.</p>
          </div>
        </div>
        <div className="project-img">
          <img className="project-img" src={studentRegistration} alt="tiny-app" />
        </div>
      </div>
    </section>
  );
};