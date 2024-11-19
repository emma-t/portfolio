import React from 'react';
import CircularButton from './CircularButton/CircularButton';
import SearchBar from './SearchBar/SearchBar';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import NavItem from './NavItem/NavItem';
import './Navbar.css';

const sections = [
    { id: 'about', title: 'About Me', subtitle: 'Learn more • Ethan Tang' },
    { id: 'projects', title: 'Projects', subtitle: 'Recent work •  8 projects' },
    { id: 'experience', title: 'Experience', subtitle: 'In industry • 3 coop placements' },
    { id: 'skills', title: 'Skills', subtitle: 'Technical & soft • 10+ skills ranked' },
    { id: 'resume', title: 'Resume', subtitle: 'All in one place • 1 page' },
];

const Navbar = () => {
    const handleSearch = (query) => {
        console.log('Search query:', query);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="buttons">
                <CircularButton icon={faHome} link="/" label="Home" className="left-button" />
                <div className="right-buttons">
                    <CircularButton icon={faEnvelope} link="mailto:ethantangtech@gmail.com" label="Email" />
                    <CircularButton icon={faGithub} link="https://github.com/emma-t" label="GitHub" target="_blank" />
                    <CircularButton icon={faLinkedin} link="https://www.linkedin.com/in/etang-/" label="Linkedin" target="_blank" />
                </div>
            </div>
            <SearchBar onSearch={handleSearch} />
            <div className="nav-items">
                {sections.map((section) => (
                    <NavItem
                        key={section.id}
                        id={section.id}
                        title={section.title}
                        subtitle={section.subtitle}
                        icon={section.icon}
                        onClick={() => scrollToSection(section.id)}
                    />
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
