import React from 'react';
import './Main.css';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';

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
                <Skills />
            </section>
            <section id="resume" style={{ padding: '20px' }}>
                <h1>Resume</h1>
                <iframe 
                    src={`${process.env.PUBLIC_URL}/assets/Ethan_Tang.pdf`} 
                    width="100%" 
                    height="600px" 
                    title="Resume"
                ></iframe>
            </section>
        </div>
    );
};

export default Main;
