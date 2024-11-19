import React from 'react';
import './Main.css';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';

const Main = () => {
    return (
        <div className="main-content">
            <section id="about" style={{ padding: '20px' }}>
                <About />
            </section>

            <section id="projects" style={{ padding: '20px' }}>
                <Projects />
            </section>

            <section id="experience" style={{ padding: '20px' }}>
                <Experience />
            </section>

            <section id="skills" style={{ padding: '20px' }}>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>

            <section id="resume" style={{ padding: '20px' }}>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>
        </div>
    );
};

export default Main;
