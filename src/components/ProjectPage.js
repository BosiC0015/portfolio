import "../assets/styles/projectpage.scss";
import Project from "./projectspage/Project";
import projectsData from "../data/projectsData"


export default function ProjectPage() {
  const projects = projectsData;

  return (
    <div id="projects" className="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map(p => <Project key={p.id} projectData={p} isLive={p.isLive} />)}
      </div>
    </div>
  );
};