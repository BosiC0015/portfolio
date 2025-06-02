import React from "react";
import "./resume.scss";
import resumePDF from "../documents/Resume_Bosi_Chen.pdf";


export default function Resume() {
  return (
    <div id="resume" className="resume">
      <h1>Resume</h1>
      <div className="resume-container">
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
          <p>Get my resume here</p>
        </a>
      </div>
    </div>
  )
}