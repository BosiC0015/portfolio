import React from "react";
import SkillBox from "./skillspage/Skill";
import "../assets/styles/skills.scss";
import skillsList from "../data/skillsList";


export default function Skills() {
  const skills = skillsList;

  return (
    <div id="skills" className="skills">
      <h1>Main Development Skills</h1>
      <div className="skills-container">
        {skills.map(s => <SkillBox key={skills.indexOf(s)} name={s.name} image={s.image} />)}
        {/* <h3>Testing</h3>
        <div id="testing" className="sorts">
          <p>Mocha & Chai, jest, Storybook, Cypress, RSpec</p>
        </div>
        <h3>Operating Environment</h3>
        <div id="operating-env" className="sorts">
          <p>Linux, Mac OS, Windows 11, Raspberry Pi OS, Git & GitHub, Docker</p>
        </div>
        <h3>Other Skills</h3>
        <div className="sorts">
          <p>Microsoft Office Suite, Google Workspace, Communication Skills, Technical Writing Skills</p>
        </div>
        <h3>Soft Skills</h3>
        <div className="sorts">
          <p>Teamwork, Time Management Skills, Agile Development</p>
        </div>
        <h3>Spoken Languages</h3>
        <div className="sorts">
          <p>English, Chinese(Mandarin), Dutch, French(Basic), Japanese(Intermediate)</p>
        </div> */}
      </div>
    </div>
  )
};