import React, { useState } from "react";
import "../assets/styles/nav.scss";
import NavMenuItem from "./NavMenuItem";


export default function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuClass = () => {
    if (isOpen) {
      return "show";
    } else {
      return;
    };
  };

  const toggleList = () => {
    if (isOpen) {
      return "is-active"
    } else {
      return ""
    }
  }

  const handleClick = () => {
    setIsOpen(false)
  }


  return (
    <nav>
      <div className="navBtn" onClick={toggleMenu}>
        <div className={`expand ${toggleList()}`}>
          <span></span><span></span>
        </div>
      </div>
      <div id="navList" className={menuClass()}>
        <ul>
          <NavMenuItem label="Short Intro" destination="#short-intro" onclick={() => handleClick()} />
          <NavMenuItem label="Skills" destination="#skills" onclick={() => handleClick()} />
          <NavMenuItem label="Projects" destination="#projects" onclick={() => handleClick()} />
          <NavMenuItem label="More About Me" destination="#more-about-me" onclick={() => handleClick()} />
        </ul>
      </div>
      <div id="nav-bar" className="nav-bar">
        <div className="links-list">
          <a href="#short-intro">
            <p className="nav-button">Short Intro</p>
          </a>
          <a href="#skills">
            <p className="nav-button">Skills</p>
          </a>
          <a href="#projects">
            <p className="nav-button">Projects</p>
          </a>
          <a href="#more-about-me">
            <p className="nav-button">More About Me</p>
          </a>
        </div>
      </div>
    </nav>
  )
};