import React from "react";
import { IconContext } from "react-icons";
import { FaGripLines } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "../assets/styles/nav.scss";


export default function Nav(props) {
  const expandMenu = () => {
    const nav = document.getElementById('nav')
    const expand = document.getElementById('nav-expand')
    const close = document.getElementById('nav-close')
    const links = document.getElementById('links')
    
    nav.className = 'nav-expanded';
    expand.classList.add('hide');
    close.classList.remove('hide');
    links.classList.remove('hide');
  };

  const closeMenu = () => {
    const nav = document.getElementById('nav')
    const expand = document.getElementById('nav-expand')
    const close = document.getElementById('nav-close')
    const links = document.getElementById('links')
    
    nav.className = 'nav-collapsed';
    expand.classList.remove('hide');
    close.classList.add('hide');
    links.classList.add('hide');
  }


  return (
    <nav>
      <div id="nav" className="nav-collapsed">
        <div id="nav-expand" className="nav-menu" onClick={expandMenu}>
          <IconContext.Provider value={{ size: '2em', className: 'icon-menu' }}>
            <FaGripLines />
          </IconContext.Provider>
          {/* <p className="menu">MENU</p> */}
        </div>
        <div id="nav-close" className="nav-menu hide" onClick={closeMenu}>
          <IconContext.Provider value={{ size: '2em', className: 'icon-hidden' }}>
            <MdOutlineClose />
          </IconContext.Provider>
          {/* <p className="menu">MENU</p> */}
        </div>
        <div id="links" className="links hide">
          <a href="#short-intro">
            <p className="nav-link" onClick={() => closeMenu()}>Short Intro</p>
          </a>
          <a href="#skills">
            <p className="nav-link" onClick={() => closeMenu()}>Skills</p>
          </a>
          <a href="#projects">
            <p className="nav-link" onClick={() => closeMenu()}>Projects</p>
          </a>
          <a href="#more-about-me">
            <p className="nav-link" onClick={() => closeMenu()}>More About Me</p>
          </a>
          {/* <a href="#resume">
            <p className="nav-link" onClick={() => closeMenu()}>Resume</p>
          </a> */}
        </div>
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
          {/* <a href="#resume">
            <p className="nav-button">Resume</p>
          </a> */}
        </div>
      </div>
    </nav>
  )
};