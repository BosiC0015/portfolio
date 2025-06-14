import React from "react";
import { IconContext } from "react-icons";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "../assets/styles/footer.scss";


export default function Footer() {
  return (
    <footer className="footer">
      <p id="contact-me">Find & Contact Me:</p>
      <div className="contact-icons">
        <IconContext.Provider value={{ size: '2em', className: 'icon' }}>
          <a href="mailto:chenbosi.bosi@gmail.com"><MdEmail /></a>
          <a href="https://www.linkedin.com/in/bosi-chen-79657421b/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
          <a href="https://github.com/BosiC0015" target="_blank" rel="noreferrer"><BsGithub /></a>
        </IconContext.Provider>
      </div>
    </footer>
  )
}