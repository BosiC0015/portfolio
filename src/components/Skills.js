import React from "react";
import { Tooltip } from "react-tooltip";
import js from "./skills/js.png";
import python from "./skills/python.png";
import csharp from "./skills/csharp.png";
import php from "./skills/php.png";
import ruby from "./skills/ruby.png";
import html from "./skills/html.png";
import css from "./skills/css.png";
import scss from "./skills/scss.png";
import bootstrap from "./skills/Bootstrap.png";
import react from "./skills/react.png";
import node from "./skills/node.png";
import express from "./skills/express.png";
import jquery from "./skills/jquery.png";
import rubyOnRails from "./skills/Ruby_on_Rails.png";
import ejs from "./skills/ejs.png";
import mysql from "./skills/mysql.png";
import mariadb from "./skills/mariadb.png";
import postgres from "./skills/postgresql.png";
import mochaChai from "./skills/mocha-chai.png";
import jest from "./skills/jest.png";
import storybook from "./skills/storybook.png";
import cypress from "./skills/cypress.webp";
import rspec from "./skills/rspec.png";
import "./skills.scss";


export default function Skills() {
  return (
    <div id="skills" className="skills">
      <h1>My Skills</h1>
      <div className="skills-container">
        <h3>Operating Environment</h3>
        <div id="operating-env" className="sorts">
          <p>Linux, Mac OS, Windows 11, Raspberry Pi OS, Git & GitHub, Docker</p>
        </div>
        <h3>Languages and Frameworks</h3>
        <div id="languages" className="sorts">
          <Tooltip anchorSelect="#js" place="top">JavaScript</Tooltip>
          <img className="stack-img" id="js" alt="js" src={js} />
          <Tooltip anchorSelect="#python" place="top">Python</Tooltip>
          <img className="stack-img" id="python" alt="python" src={python} />
          <Tooltip anchorSelect="#csharp" place="top">C#</Tooltip>
          <img className="stack-img" id="csharp" alt="c#" src={csharp} />
          <Tooltip anchorSelect="#php" place="top">PHP</Tooltip>
          <img className="stack-img" id="php" alt="php" src={php} />         
          <Tooltip anchorSelect="#ruby" place="top">Ruby</Tooltip>
          <img className="stack-img" id="ruby" alt="ruby" src={ruby} />
          <Tooltip anchorSelect="#html" place="top">HTML</Tooltip>
          <img className="stack-img" id="html" alt="html" src={html} />
          <Tooltip anchorSelect="#css" place="top">CSS</Tooltip>
          <img className="stack-img" id="css" alt="css" src={css} />
          <Tooltip anchorSelect="#scss" place="top">SCSS</Tooltip>
          <img className="stack-img" id="scss" alt="scss" src={scss} />
          <Tooltip anchorSelect="#bootstrap" place="top">Bootstrap</Tooltip>
          <img className="stack-img" id="bootstrap" alt="bootstrap" src={bootstrap} />
          <Tooltip anchorSelect="#react" place="top">React.js</Tooltip>
          <img className="stack-img" id="react" alt="react" src={react} />
          <Tooltip anchorSelect="#node" place="top">Node.js</Tooltip>
          <img className="stack-img" id="node" alt="node" src={node} />
          <Tooltip anchorSelect="#express" place="top">Express.js</Tooltip>
          <img className="stack-img" id="express" alt="express" src={express} />
          <Tooltip anchorSelect="#jquery" place="top">jQuery</Tooltip>
          <img className="stack-img" id="jquery" alt="jquery" src={jquery} />
          <Tooltip anchorSelect="#rails" place="top">Ruby on Rails</Tooltip>
          <img className="stack-img" id="rails" alt="ruby on rails" src={rubyOnRails} />
          <Tooltip anchorSelect="#ejs" place="top">EJS</Tooltip>
          <img className="stack-img" id="ejs" alt="ejs" src={ejs} />
        </div>
        <h3>Databases</h3>
        <div id="databases" className="sorts">
          <Tooltip anchorSelect="#mysql" place="top">MySQL</Tooltip>
          <img className="stack-img" id="mysql" alt="mysql" src={mysql} />
          <Tooltip anchorSelect="#mariadb" place="top">MariaDB</Tooltip>
          <img className="stack-img" id="mariadb" alt="mariadb" src={mariadb} />
          <Tooltip anchorSelect="#postgres" place="top">PostgreSQL</Tooltip>
          <img className="stack-img" id="postgres" alt="postgres" src={postgres} />
        </div>
        <h3>Testing</h3>
        <div id="testing" className="sorts">
          <Tooltip anchorSelect="#mocha-chai" place="top">Mocha & Chai</Tooltip>
          <img className="stack-img" id="mocha-chai" alt="mocha chai" src={mochaChai} />
          <Tooltip anchorSelect="#jest" place="top">jest</Tooltip>
          <img className="stack-img" id="jest" alt="jest" src={jest} />
          <Tooltip anchorSelect="#storybook" place="top">Storybook</Tooltip>
          <img className="stack-img" id="storybook" alt="storybook" src={storybook} />
          <Tooltip anchorSelect="#cypress" place="top">Cypress</Tooltip>
          <img className="stack-img" id="cypress" alt="cypress" src={cypress} />
          <Tooltip anchorSelect="#rspec" place="top">RSpec</Tooltip>
          <img className="stack-img" id="rspec" alt="rspec" src={rspec} />
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
          <p>English, Chinese(Mandarin), Dutch, French(Basic)</p>
        </div>
      </div>
    </div>
  )
};