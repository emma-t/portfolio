import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Application Developer',
      company: 'Government of Canada (Department of Finance)',
      years: 'June 2024 - Present',
      location: 'Ottawa, ON',
      image: `${process.env.PUBLIC_URL}/assets/gov.png`,
      roleDescription: [
        <>Implemented and maintained end-to-end web application using<strong>Vue.js</strong>and<strong>Typescript</strong></>,
        <>Documented issues and new features in the<strong>software architecture</strong>on a daily basis</>,
        <>Communicated with both development and<strong>business side users</strong>, resulting in a 25% reduction in client technical issues</>,
      ],
      languagesAndTools: ['Vue.js, Typescript', 'Pinia, TailwindCSS', 'Microsoft Azure Active Directory B2C'],
    },
    {
      title: 'QC Automation Test Developer',
      company: 'DistillerSR',
      years: 'September 2023 - December 2023',
      location: 'Ottawa, ON',
      image: `${process.env.PUBLIC_URL}/assets/distillersr.jpg`,
      roleDescription: [
        <>Designed, developed, and executed automated test cases from integration testing to load testing, resulting in a<strong>20%
reduction in the number of backlogged tickets</strong></>,
        <>Worked closely with development and QA teams to review requirements and define manual test plans</>,
        <>Maintained and organized all records, documentation, and other files associated with quality engineering and inspection</>,
      ],
      languagesAndTools: ['Cypress.io, JavaScript, HTML, CSS', 'Zephr', 'Jira, Agile'],
    },
    {
        title: 'Full-Stack Developer',
        company: 'Government of Canada (Department of Finance) ',
        years: 'January 2023 - April 2023',
        location: 'Ottawa, ON',
        image: `${process.env.PUBLIC_URL}/assets/gov.png`,
        roleDescription: [
          <>Developed end-to-end web application using<strong>Vue.js</strong>for frontend and<strong>Node.js</strong>with<strong>SQL</strong>for backend development</>,
          <>Ensured code quality and adhered to coding best practices by implementing daily commits under senior developer
mentorship, resulting in a<strong>25% reduction in bugs and issues</strong></>,
        ],
        languagesAndTools: ['Vue.js, Node.js, SQL, MongoDB, Postman', 'Microsoft DevOps'],
      },
  ];

  return (
    <div className="experience-container">
      <h1>Experience</h1>
      {experiences.map((experience, index) => (
        <div className="experience-item" key={index}>
          <div className="experience-header">
            <img src={experience.image} alt={experience.title} className="experience-image" />
            <div className="experience-title">
              <h2>{experience.title}</h2>
              <h3>{experience.company}</h3>
              <div className='experience-info'>
                <span className="experience-years">{experience.years}</span>
                <span className="experience-location">{experience.location}</span>
              </div>
            </div>
          </div>
          <table className="experience-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>Languages & Tools</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(
                { length: Math.max(experience.roleDescription.length, experience.languagesAndTools.length) },
                (_, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{rowIndex + 1}</td>
                    <td>{experience.roleDescription[rowIndex] || ''}</td>
                    <td>{experience.languagesAndTools[rowIndex] || ''}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Experience;
