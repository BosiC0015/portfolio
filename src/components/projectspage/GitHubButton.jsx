import icons from "../../data/icons"


export default function GitHubButton(props) {
  return (
    <div className="project-git">
      <a href={props.github} target="_blank" rel="noreferrer" aria-label="View source code on GitHub repository in a new tab">
        {icons.github}
      </a>
    </div>
  )
}