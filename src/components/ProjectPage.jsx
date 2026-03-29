import "../assets/styles/projectpage.scss";
import Project from "./projectspage/Project";
import projectsData from "../data/projectsData"


export default function ProjectPage() {
  const projects = projectsData;

  return (
    <div id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map(p => <Project key={p.id} projectData={p} isLive={p.isLive} />)}
      </div>
    </div>
  );
};