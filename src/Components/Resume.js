import React from "react";
import { CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
        
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        
          <div style={{width:200, height:200}} className="columns skils-item">
            <div className="item-wrap ">
            <CircularProgressbarWithChildren value={skills.level}>
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <strong>{skills.level}%</strong> {skills.name}
            </CircularProgressbarWithChildren>
            </div>
          </div>
        
        
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
      
        <div> 
            <p>{skillmessage}</p>
            <div className="row-skill">
              <div 
                className="bgrid-quarters s-bgrid-thirds"> 
                  {skills} 
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
