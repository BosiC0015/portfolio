import React from "react";
import { IconContext } from "react-icons";
import { GrMenu, GrClose } from "react-icons/gr";
import "./nav.scss";


export default function Nav(props) {
  const expandMenu = () => {
    const menu = document.getElementById('nav-menu')
    const close = document.getElementById('nav-close')
    const links = document.getElementById('links')
    
    menu.classList.add('hide')
    close.classList.remove('hide')

    links.classList.remove('links')
    links.classList.add('links-show')
  };

  const closeMenu = () => {
    const menu = document.getElementById('nav-menu')
    const close = document.getElementById('nav-close')
    const links = document.getElementById('links')

    links.classList.remove('links-show')
    links.classList.add('links')
    
    close.classList.add('hide')
    menu.classList.remove('hide')
  }


  return (
    <nav className="nav">
      <div id="nav-menu" className="nav-icon" onClick={expandMenu}>
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
      </div>
    </nav>
  )
};