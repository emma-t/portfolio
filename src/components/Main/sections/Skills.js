import React, { useState } from 'react'; 
import './Skills.css';

const skills = [
  { name: 'Java', level: 80, proficiency: 'Proficient', color: '#DC148C' },
  { name: 'Python', level: 80, proficiency: 'Proficient', color: '#006450' },
  { name: 'JavaScript', level: 70, proficiency: 'Proficient', color: '#283EA3' },
  { name: 'HTML/CSS', level: 80, proficiency: 'Proficient', color: '#8400E7' },
  { name: 'Vue.js', level: 70, proficiency: 'Proficient', color: '#1E3264' },
  { name: 'React', level: 80, proficiency: 'Proficient', color: '#AF2896' },
  { name: 'Photoshop', level: 85, proficiency: 'Proficient', color: '#477D95' },
  { name: 'TypeScript', level: 55, proficiency: 'Familiar', color: '#E13300' },
  { name: 'Node.js', level: 65, proficiency: 'Familiar', color: '#D84000' },
  { name: 'C++', level: 35, proficiency: 'Familiar', color: '#0D73EC' },
  { name: 'Angular', level: 60, proficiency: 'Familiar', color: '#8D67AB' },
  { name: 'SQL', level: 60, proficiency: 'Familiar', color: '#503750' },
];

const SkillItem = ({ name, level, proficiency, color }) => (
  <div className="skill-item" style={{ backgroundColor: color }}>
    <div className="skill-header">
      <h3 className="skill-name">{name}</h3>
      <p className="skill-proficiency">{proficiency}</p>
    </div>
    <div className="skill-controls">
      <button className="control-btn">&#9664;</button>
      <button className="control-btn">&#10074;&#10074;</button>
      <button className="control-btn">&#9654;</button>
    </div>
    <div className="progress-bar">
      <div className="progress" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
