import React from "react";


export default function LivePageButton(props) {  
  const toggleClass = (isLive) => {
    if (isLive) {
      return "project-live"
    }
    return "project-live not-live"
  }

  return (
    <div className={toggleClass(props.isLive)}>
      <a href={props.livePage} target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="External-Link-Fill--Streamline-Outlined-Fill-Expansion" height="36" width="36">
          <path id="Union" fillRule="evenodd" d="M4 12c0 -4.41828 3.58172 -8 8 -8V2C6.47715 2 2 6.47715 2 12c0 5.5228 4.47715 10 10 10 5.5228 0 10 -4.4772 10 -10h-2c0 4.4183 -3.5817 8 -8 8 -4.41828 0 -8 -3.5817 -8 -8Zm6.8 -0.2 1.4 1.4L20 5.4V9h2V2h-7v2h3.6l-7.8 7.8Z" clipRule="evenodd" strokeWidth="1"></path>
        </svg>
      </a>
    </div>
  )
}