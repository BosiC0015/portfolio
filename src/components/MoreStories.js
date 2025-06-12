import React from "react";
import "../assets/styles/more.scss";
import resumePDF from "../documents/Resume_Bosi_Chen.pdf";


export default function MoreStories() {
  return (
    <div id="more-about-me" className="more-about-me">
      <h1>More About Me:</h1>
      {/* <div>Education</div> */}
      <div className="more-container">
        <div className="resume">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Business-User-Curriculum--Streamline-Core" height="20" width="20">
              <desc>Business User Curriculum Streamline Icon: https://streamlinehq.com</desc>
              <g id="business-user-curriculum">
                <path id="Vector" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.09766 3.65061c0 0.63533 0.51503 1.15037 1.15036 1.15037 0.16062 0 0.31354 -0.03292 0.45241 -0.09237 0.41042 -0.17573 0.69796 -0.58328 0.69796 -1.058 0 -0.63533 -0.51504 -1.15037 -1.15037 -1.15037 -0.63533 0 -1.15036 0.51504 -1.15036 1.15037Z" stroke-width="1"></path>
                <path id="Vector_2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 5.94004c0.18279 -0.34767 0.4397 -0.63502 0.74602 -0.83441 0.30632 -0.19939 0.65175 -0.30412 1.00309 -0.30412s0.69677 0.10473 1.00309 0.30412c0.30632 0.19939 0.56323 0.48674 0.74602 0.83441" stroke-width="1"></path>
                <path id="Vector_3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5c0 0.2652 -0.1054 0.5196 -0.2929 0.7071s-0.4419 0.2929 -0.7071 0.2929h-9c-0.26522 0 -0.51957 -0.1054 -0.70711 -0.2929C1.60536 13.0196 1.5 12.7652 1.5 12.5v-11c0 -0.26522 0.10536 -0.51957 0.29289 -0.707107C1.98043 0.605357 2.23478 0.5 2.5 0.5H9L12.5 4v8.5Z" stroke-width="1"></path>
                <path id="Vector 2531" stroke="currentColor" stroke-linecap="round" d="M3.5 8.5h7" stroke-width="1"></path>
                <path id="Vector 2532" stroke="currentColor" stroke-linecap="round" d="M3.5 11h4" stroke-width="1"></path>
              </g>
            </svg>
            <p>Get my resume here</p>
          </a>
        </div>
        <div className="my-story">
          <p className="content">From player to developer.</p>
          <p className="content">Game playing has always been a part of my whole growing up experience. It was fascinating for me how the beautiful world was created and how the interesting systems were created just by typing some words. After finishing my Bachelor’s degree in Engineering, I still can’t put aside my yearn for the virtual world. Finally this made me meet Lighthouse Lab, where I definitely made my first step to the world of programming. The courses of the 12-week-long web development bootcamp for full stack developers were compact-designed, but it made me feel amused instead. Then, I continued my learning path in Algonquin College, where I came to a larger world of web development, together with the two-years-long Web Development and Internet Application program.</p>
          <p className="content">For me, the coding process is the same as a game. I get the quests, I am equipped with the skills I have learnt, and I need to explore the world to obtain new skills to meet the requirements more effectively. The feeling of fulfillment of finishing a quest (or let say a project) is awesome, and motivates me in further working.</p>
          <p className="content">I am also comfortable with working in a team, where every member knows what skills each one has, what they are good at, and how to divide and finish the tasks more efficiently. Just like we have raids in the game, which make the players assemble, work on their own part and finish the same quest together. </p>
          <p className="content">While I am away from my work, I am not away from coding. In my free time, I would make some small applications to make it more convenient in my life, like is shown in my projects. </p>
          <p className="content">I will keep on with the continuing game called coding in my life.</p>
        </div>
      </div>
    </div>
  );
};