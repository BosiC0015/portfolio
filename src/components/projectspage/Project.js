import GitHubButton from "./GitHubButton";
import LivePageButton from "./LivePageButton";
import "../../assets/styles/projectpage.scss";


export default function Project(props) {
  const data = props.projectData;

  return (
    <section className="project-card">
      <div className="project-title">
        <h2>{data.title}</h2>
      </div>
      <GitHubButton github={data.github} />
      <LivePageButton isLive={data.isLive} livePage={data.live} />
      <div className="about">
        <div className="text">
          <div className="stacks">
            <p className="stacks">{data.stacks}</p>
          </div>
          <div className="desc">
            <p className="description">{data.description}</p>
          </div>
        </div>
        <div className="project-img">
          <img className="project-img" src={data.projectImg} alt={data.title + " preview"} />
        </div>
      </div>
    </section>
  );
};