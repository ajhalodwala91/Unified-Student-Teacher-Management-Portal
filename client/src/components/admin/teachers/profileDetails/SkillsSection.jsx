import React from "react";
import "./ProfileDetails.css";
import { useState } from "react";

function SkillsSection() {
  const skills = {
    Communication: 83,
    Leadership: 64,
    "Resource Staffing": 92,
    Teamwork: 52,
    "Time Management": 100,
    Planning: 70,
  };

  return (
    <div className="skillsSection">
      {Object.keys(skills).map((element) => {
        return (
          <div className="skillCard">
            <div className="skillName">{element}</div>
            <div className="skillBar">
              <div className="skillPercent" style={{width: `${skills[element]}%`}}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsSection;
