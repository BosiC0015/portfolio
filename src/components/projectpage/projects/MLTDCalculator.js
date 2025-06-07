import mltdCalculator from "../preview/MLTDCalculator.png";
import "../Projectpage.css";


export default function MLTDCalculator() {
  return (
    <section id="mltd" className="project-card">
      <div className="project-title">
        <h2>MLTD Calculator</h2>
      </div>
      <div className="project-git">
        <a href="https://github.com/BosiC0015/mltd-calculator" target="_blank" rel="noreferrer">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Github--Streamline-Simple-Icons" height="36" width="36">
            <path d="M12 0.297c-6.63 0 -12 5.373 -12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82 -0.258 0.82 -0.577 0 -0.285 -0.01 -1.04 -0.015 -2.04 -3.338 0.724 -4.042 -1.61 -4.042 -1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087 -0.744 0.084 -0.729 0.084 -0.729 1.205 0.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495 0.998 0.108 -0.776 0.417 -1.305 0.76 -1.605 -2.665 -0.3 -5.466 -1.332 -5.466 -5.93 0 -1.31 0.465 -2.38 1.235 -3.22 -0.135 -0.303 -0.54 -1.523 0.105 -3.176 0 0 1.005 -0.322 3.3 1.23 0.96 -0.267 1.98 -0.399 3 -0.405 1.02 0.006 2.04 0.138 3 0.405 2.28 -1.552 3.285 -1.23 3.285 -1.23 0.645 1.653 0.24 2.873 0.12 3.176 0.765 0.84 1.23 1.91 1.23 3.22 0 4.61 -2.805 5.625 -5.475 5.92 0.42 0.36 0.81 1.096 0.81 2.22 0 1.606 -0.015 2.896 -0.015 3.286 0 0.315 0.21 0.69 0.825 0.57C20.565 22.092 24 17.592 24 12.297c0 -6.627 -5.373 -12 -12 -12" stroke-width="1"></path>
          </svg>
        </a>
      </div>
      <div className="project-live">
        <a href="https://bosic0015.github.io/mltd-calculator/" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="External-Link-Fill--Streamline-Outlined-Fill-Expansion" height="36" width="36">
            <path id="Union" fill-rule="evenodd" d="M4 12c0 -4.41828 3.58172 -8 8 -8V2C6.47715 2 2 6.47715 2 12c0 5.5228 4.47715 10 10 10 5.5228 0 10 -4.4772 10 -10h-2c0 4.4183 -3.5817 8 -8 8 -4.41828 0 -8 -3.5817 -8 -8Zm6.8 -0.2 1.4 1.4L20 5.4V9h2V2h-7v2h3.6l-7.8 7.8Z" clip-rule="evenodd" stroke-width="1"></path>
          </svg>
        </a>
      </div>
      <div className="about">
        <div className="text">
          <div className="stacks">
            <p id="stacks">React.js, SCSS, Bootstrap</p>
          </div>
          <div className="desc">
            <p id="description">A SPA for MLTD players to calculate how many times they need to play the regular or event songs to meet their event point goals.</p>
          </div>
        </div>
        <div className="project-img">
          <img className="project-img" src={mltdCalculator} alt="mltd-calculator" />
        </div>
      </div>
    </section>
  );
};