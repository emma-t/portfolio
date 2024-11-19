import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const items = [
  {
    title: 'BiblioTech Restore & ReviveMart',
    team: '',
    description: 'Created two websites for fictional services in React.js for a University course on UX/UI (Analysis and Design of User Interfaces). The GitHub for each is linked and the actual website is in the repository description.',
    date: 'Completed July 13, 2023',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    tagsFilter: ['Frontend', 'Completed', 'School'],
    link: ['https://github.com/emma-t/SEG3125-Project-1', 'https://github.com/emma-t/seg3125-project-2-main']
  },
  {
    title: 'Real-Time Computer Vision Calculator ',
    team: '',
    description: 'Implemented a calculator that tracks hand movements and gestures with OpenCV to do mathematical calculations.',
    date: 'Completed March 26, 2023',
    tags: ['Python', 'OpenCV', 'Pycharm'],
    tagsFilter: ['AI', 'Completed'],
    link: 'https://github.com/emma-t/computer-vision-calculator'
  },
  {
    title: 'Pride Chrome Extension',
    team: 'Ethan Tang & Timothy Mao',
    description: 'In 24 hours, we have created a Chrome extension that makes users aware of the underrepresented group in tech; LGBTQ+ members.',
    date: 'Completed July 13, 2023',
    tags: ['JavaScript', 'CSS', 'Hackathon'],
    tagsFilter: ['Frontend', 'Completed', 'Hackathon'],
    link: 'https://github.com/emma-t/pride-chrome-extension'
  },
  {
    title: 'Newspaperify',
    team: '',
    description: `This is really a tribute to the Spotify API. I absolutely love how Spotify makes yearly wraps for every user and I wanted to make something of my own! Combining my passion for frontend and graphic design, I created and designed a newspaper displaying a user's top songs.`,
    date: 'Completed March 8, 2023',
    tags: ['Spotify API', 'Flask', 'JavaScript', 'HTML', 'CSS'],
    tagsFilter: ['Frontend', 'Completed'],
    link: 'https://github.com/emma-t/newspaperify'
  },
  {
    title: '007Secure',
    team: 'Ethan Tang & Manaal Mujeebuddin',
    description: 'Created for uOttaHack 5, this website is a tool to teach the younger generation about cyber security practices.',
    date: 'Completed February 11, 2023',
    tags: ['GitHub', 'JavaScript', 'HTML', 'CSS'],
    tagsFilter: ['Frontend', 'Completed', 'Hackathon'],
    link: 'https://github.com/emma-t/007Secure'
  },
  {
    title: 'Meal Ordering and Delivery Android Application',
    team: 'Ethan Tang & Jenet Ghumman & Oliver Byl & Alex Oprea',
    description: 'As part of a software engineering course, developed a responsive Android application with 3 students using Android Studio and Firebase API which enabled users to order meals as clients and accept orders as chefs.',
    date: 'Completed December 9, 2022',
    tags: ['Android Studio', 'NoSQL', 'Firebase', 'Git'],
    tagsFilter: ['Frontend', 'Completed', 'School', 'Backend'],
    link: ''
  },
  {
    title: 'LiDAR Terrain Clustering Algorithm',
    team: '',
    description: 'Built a clustering algorithm based on nearest neighbor algorithms and improved spatial indexing with 3D k-d trees. Developed a data visualizer that digitally maps terrain topological information for autonomous vehicles',
    date: 'Completed December 1, 2022',
    tags: ['Java', 'Python', 'Open3D', 'Git'],
    tagsFilter: ['AI', 'Completed', 'School'],
    link: ''
  },
];

const ListItem = ({ title, team, description, date, tags, link }) => (
  <div className="list-item">
    <h3>{title}</h3>
    {team && <p className="description">{team}</p>}
    <p className="description">{description}</p>
    <p>{date}</p>
    <div className="item-extras">
      <div className="tags">
        {tags.map((tag, index) => (
          <span className="tag" key={index}>{tag}</span>
        ))}
      </div>
      <div className="links">
        {Array.isArray(link) ? (
          link.map((singleLink, index) => (
            <a
              key={index}
              href={singleLink}
              className="button-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
            </a>
          ))
        ) : (
          link && (
            <a href={link} className="button-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
            </a>
          )
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = [...new Set(items.flatMap(item => item.tagsFilter || []))];

  const filteredItems = selectedTag
    ? items.filter(item => item.tagsFilter?.includes(selectedTag))
    : items;

  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="heading">
        <img src={`${process.env.PUBLIC_URL}/assets/projects.png`} alt="Projects" className="left-image" />
        <div className="right-content">
          <h1>Projects</h1>
          <p>Recent work • {filteredItems.length} projects</p>
        </div>
      </div>

      <div className="filter-tags">
        <button onClick={() => setSelectedTag(null)} className={selectedTag === null ? 'active' : ''}>
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={selectedTag === tag ? 'active' : ''}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="list">
        {filteredItems.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;