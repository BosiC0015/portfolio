import React from "react";
import "../../assets/styles/skills.scss";


export default function SkillBox(props) {
  return (
    <div className="skill">
      <img src={props.image} alt={props.name + " icon"} />
      <span className="text">{props.name}</span>
    </div>
  )
}