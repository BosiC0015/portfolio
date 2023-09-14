import React from "react";
import { Tooltip } from "react-tooltip";
import "./skills.scss";


export default function Skills() {
  return (
    <main>
      <h2>My Skills</h2>
      <div className="skills">
        <h3>Operating Systems</h3>
        <h3>Languages and Frameworks</h3>
        <div id="languages" className="sorts">
          <Tooltip anchorSelect="#js" place="top">JavaScript</Tooltip>
          <img className="stack-img" id="js" alt="js" src="https://drive.google.com/uc?export=view&id=1MDMQaRCt7KvD6gbN-6Fe0Y_5rw-sdR_e" />
          <Tooltip anchorSelect="#python" place="top">Python</Tooltip>
          <img className="stack-img" id="python" alt="python" src="https://drive.google.com/uc?export=view&id=1LuC9FqQtI5apXHIPUmsXZ2R1ohMCeFMT" />
          <Tooltip anchorSelect="#csharp" place="top">C#</Tooltip>
          <img className="stack-img" id="csharp" alt="c#" src="https://drive.google.com/uc?export=view&id=1gOsbVXoGqwhrtRcW1suYArhfdHrXpKt-&usp=drive_fs" />
          <Tooltip anchorSelect="#php" place="top">PHP</Tooltip>
          <img className="stack-img" id="php" alt="php" src="" />         
          <Tooltip anchorSelect="#ruby" place="top">Ruby</Tooltip>
          <img className="stack-img" id="ruby" alt="ruby" src="https://drive.google.com/uc?export=view&id=1MpX5EEe84wNTW4j56IdReOV_7lsfh500" />
          <Tooltip anchorSelect="#html" place="top">HTML</Tooltip>
          <img className="stack-img" id="html" alt="html" src="https://drive.google.com/uc?export=view&id=1MS_vIXrac-LZlVOg4PTBZz9jAoc9Orfm" />
          <Tooltip anchorSelect="#css" place="top">CSS</Tooltip>
          <img className="stack-img" id="css" alt="css" src="https://drive.google.com/uc?export=view&id=1MdtSfROQsgumyXMHQx7HKhDmVRJ6igix" />
          <Tooltip anchorSelect="#scss" place="top">SCSS</Tooltip>
          <img className="stack-img" id="scss" alt="scss" src="https://drive.google.com/uc?export=view&id=1ddZ7-57SOZaH4xQ6s7w29FhPw6WNNeUl" />
          <Tooltip anchorSelect="#bootstrap" place="top">Bootstrap</Tooltip>
          <img className="stack-img" id="bootstrap" alt="bootstrap" src="https://drive.google.com/uc?export=view&id=1gGz2sCIVZfQWrcAcKjcZmdaiV8_Jmbqy" />
          <Tooltip anchorSelect="#react" place="top">React.js</Tooltip>
          <img className="stack-img" id="react" alt="react" src="https://drive.google.com/uc?export=view&id=1MK4tg91CV7owfy8mwou-NSLpLJs_p68L" />
          <Tooltip anchorSelect="#node" place="top">Node.js</Tooltip>
          <img className="stack-img" id="node" alt="node" src="https://drive.google.com/uc?export=view&id=1MGvn5vfXONSYBkV4CXE4iSJkDO8EXiXc" />
          <Tooltip anchorSelect="#jquery" place="top">jQuery</Tooltip>
          <img className="stack-img" id="jquery" alt="jquery" src="https://drive.google.com/uc?export=view&id=1MwIo42zeCy1DaGmhZlQZ9b6wWsuK5skU" />
          <Tooltip anchorSelect="#rails" place="top">Ruby on Rails</Tooltip>
          <img className="stack-img" id="rails" alt="ruby on rails" src="https://drive.google.com/uc?export=view&id=1MtZphWX-BOVltJ9l0b1EmZOkoTt9BCHL" />
        </div>
        <h3>Databases</h3>
          <Tooltip anchorSelect="mysql" place="top">MySQL</Tooltip>
          <img className="stack-img" id="mysql" alt="mysql" src="" />
          <Tooltip anchorSelect="mysql" place="top">MySQL</Tooltip>
          <img className="stack-img" id="mariadb" alt="mariadb" src="" />
          <Tooltip anchorSelect="#postgres" place="top">PostgreSQL</Tooltip>
          <img className="stack-img" id="postgres" alt="postgres" src="https://drive.google.com/uc?export=view&id=1MgnQXlUMqAxEeYOZ6bLoIUDs3c6xSw7P" />
        <h3>Back End</h3>
        <div id="back-end" className="sorts">
          <Tooltip anchorSelect="#express" place="top">Express.js</Tooltip>
          <img className="stack-img" id="express" alt="express" src="https://drive.google.com/uc?export=view&id=1MfxzExsy3gbt6xH3Y_CN6R63Hc4qyL49" />
          <Tooltip anchorSelect="#ejs" place="top">EJS</Tooltip>
          <img className="stack-img" id="ejs" alt="ejs" src="https://drive.google.com/uc?export=view&id=1Mkx0xG7oTTOSn4CMSIeLgI3z-HD5BFIP" />
        </div>
        <h3>Front End</h3>
        <div id="front-end" className="sorts">
        </div>
        <h3>Testing</h3>
        <div id="testing" className="sorts">
          <Tooltip anchorSelect="#mocha-chai" place="top">Mocha & Chai</Tooltip>
          <img className="stack-img" id="mocha-chai" alt="mocha chai" src="https://drive.google.com/uc?export=view&id=1RDkoGxbc6dWyYgObNdzzF-fDIEmr2wgk" />
          <Tooltip anchorSelect="#jest" place="top">jest</Tooltip>
          <img className="stack-img" id="jest" alt="jest" src="https://drive.google.com/uc?export=view&id=1LsRHpBIiu_nnFiAnqHiBeqedCzp-Zriu" />
          <Tooltip anchorSelect="#storybook" place="top">Storybook</Tooltip>
          <img className="stack-img" id="storybook" alt="storybook" src="https://drive.google.com/uc?export=view&id=13OrvusZmqDlgslrth5n8dWuoWFc4HVx3" />
          <Tooltip anchorSelect="#cypress" place="top">Cypress</Tooltip>
          <img className="stack-img" id="cypress" alt="cypress" src="https://drive.google.com/uc?export=view&id=1GXivIWDULFKG2Sa5rbgy03CNuJoSdRfe" />
          <Tooltip anchorSelect="#rspec" place="top">RSpec</Tooltip>
          <img className="stack-img" id="rspec" alt="rspec" src="https://drive.google.com/uc?export=view&id=1cPZq-8Q6CmLCOPzuuEDefGKdvCHBkICr" />
        </div>
        <h3>Soft Skills</h3>
        <h3>Spoken Languages</h3>
        <p>  - English</p>
        <p>  - Chinese(Mandarin)</p>
        <p>  - Dutch</p>
        <p>  - French(Basic)</p>
      </div>
    </main>
  )
};