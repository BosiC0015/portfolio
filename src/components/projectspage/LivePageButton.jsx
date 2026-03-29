import icons from "../../data/icons"

export default function LivePageButton({ isLive, livePage }) {
  const paramObj = {}

  if (isLive) {
    paramObj.className = "project-live"
    paramObj.ariaLabel = "View the live demo of this project in a new tab"
    paramObj.extLink = livePage
    paramObj.targetAttr = "_blank"
  } else {
    paramObj.className = "project-live not-live"
    paramObj.ariaLabel = "Live demo is currently unavailable"
    paramObj.extLink = "#"
    paramObj.targetAttr = "_self"
  }


  return (
    <div className={paramObj.className}>
      <a 
        href={paramObj.extLink} 
        target={paramObj.targetAttr} 
        rel="noreferrer" 
        aria-label={paramObj.ariaLabel}
      >
        {icons.externalLink}
      </a>
    </div>
  )
}