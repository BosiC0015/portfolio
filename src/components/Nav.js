import React from "react";
import { IconContext } from "react-icons";
import { FaGripLines } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "./nav.scss";


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
    <nav id="nav" className="nav-collapsed">
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
        {/* <p className="nav-link" onClick={() => {
          props.select('INTRO')
          closeMenu()
          }}>Short Intro</p>
        <p className="nav-link" onClick={() => {
          props.select('SKILLS')
          closeMenu()
          }}>Skills</p>
        <p className="nav-link" onClick={() => {
          props.select('PROJECTS')
          closeMenu()
          }}>Projects</p>
        <p className="nav-link" onClick={() => {
          props.select('MORE')
          closeMenu()
          }}>More About Me</p> */}
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
          {/* <a href="https://github.com/BosiC0015" target="_blank" rel="noreferrer">
            <p className="nav-link">GitHub</p>
          </a> */}
          <a href="https://www.linkedin.com/in/bosi-chen-79657421b/" target="_blank" rel="noreferrer">
            <p className="nav-link">LinkedIn</p>
          </a>
      </div>

      {/* <div id="nav-menu" className="nav-icon" onClick={expandMenu}>
        <IconContext.Provider value={{ size: '2em', className: 'icon-menu' }}>
          <GrMenu />
        </IconContext.Provider>
      </div>
      <div id="nav-close" className="nav-icon hide" onClick={closeMenu}>
        <IconContext.Provider value={{ size: '2em', className: 'icon-hidden' }}>
          <GrClose />
        </IconContext.Provider>
      </div>
      <div id="links" className="links">
        <p className="nav-link" onClick={() => props.select('INTRO')}>Short Intro</p>
        <p className="nav-link" onClick={() => props.select('SKILLS')}>Skills</p>
        <p className="nav-link" onClick={() => props.select('PROJECTS')}>Projects</p>
        <p className="nav-link" onClick={() => props.select('MORE')}>More About Me</p>
      </div> */}

    </nav>
  )
};