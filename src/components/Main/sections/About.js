import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const About = () => {

    const clubs = [
        { image: `${process.env.PUBLIC_URL}/assets/ess.png`, club: 'University of Ottawa Engineering Students Society', position: 'Vice President of Services', year: '2024 - 2025' },
        { image: `${process.env.PUBLIC_URL}/assets/uoeq.png`, club: 'EngiQueers Canada University of Ottawa Chapter', position: 'President', year: '2023 - 2025' },
        { image: `${process.env.PUBLIC_URL}/assets/hth.png`, club: 'Hack the Hill', position: 'Merchandise Manager', year: '2023 - 2024' },
        { image: `${process.env.PUBLIC_URL}/assets/cusec.png`, club: 'Canadian University Software Engineering Conference', position: 'Graphic Design Coordinator', year: '2023 - 2024' },
        { image: `${process.env.PUBLIC_URL}/assets/sesa.png`, club: 'University of Ottawa Software Engineering Student Association', position: 'Social Media Coordinator', year: '2022 - 2023' },
        { image: `${process.env.PUBLIC_URL}/assets/ieee.png`, club: 'IEEE University of Ottawa Student Branch', position: 'Graphic Design Commissioner', year: '2022 - 2023' },
        { image: `${process.env.PUBLIC_URL}/assets/hth.png`, club: 'Hack the Hill', position: 'Design Team Coordinator', year: '2022 - 2023' },
        { image: `${process.env.PUBLIC_URL}/assets/uottahack.png`, club: 'uOttaHack', position: 'Design and Marketing Team Coordinator', year: '2022 - 2022' },
    ]
    
    return (
        <div className="about-container">
            <div className="about-heading">
                <img src={`${process.env.PUBLIC_URL}/assets/aboutsquare.png`} alt="About" className="left-image" />
                <div className="right-content">
                    <p>Portfolio</p>
                    <h1>Hello, I'm Ethan Tang</h1>
                    <p>I'm a software engineering student at the University of Ottawa</p>
                    <div className="button-group">
                        <a href={`${process.env.PUBLIC_URL}/assets/Ethan_Tang.pdf`} className="inverted" target="_blank" rel="noopener noreferrer">Resume</a>
                        <a href="mailto:ethantangtech@gmail.com" className="regular">Contact</a>
                    </div>
                </div>
            </div>

            <div className="about-text">
                <p>
                    Hello World! I’m Ethan Tang, a software engineering student at the University of Ottawa (graduating December 2025). I’m passionate about accessible UX/UI design, code optimization, and data analysis. I love coming up with coding solutions to problems I face in my daily life which you can read more about in my projects! I’ve done 3 co-op positions throughout my post secondary education in full-stack web development and testing. In my free time, I hold executive positions in school clubs, go climbing / workout, do pottery on the wheel, and listen to music all the time. 
                    <br/> <br/>
                    Some achievements: uOttaHack 2023 Hackathon 1st place CSE category winner, Microsoft Certified Azure AI Fundamentals
                    <br/> <br/>
                    Scroll or click on the navbar on the left to learn more about me!
                </p>
            </div>

            <div className="author">
                <div className="left">
                    <p>
                        <b>Bachelor of Applied Science in Software Engineering
                        <br/>
                        University of Ottawa</b>              
                        <br/>
                        Ottawa, ON, Canada
                        <div className="numbers">
                            <p>2021 - 2025</p>
                            <p>GPA: 3.5/4.0</p>
                        </div>
                    </p>
                </div>
                <div className="right">
                    <FontAwesomeIcon icon={faCircleUser} className="icon"/>
                    <p>
                        Posted By Ethan Tang
                        <br/>
                        Updated October 2024
                    </p>

                </div>
            </div>

            <div className="clubs">
                <div className="title">
                    <h1>Clubs</h1>
                    <h1>Scroll →</h1>
                </div>

                <div className="scrollable-container">
                {clubs.map((club, index) => (
                    <div className="scrollable-item" key={index}>
                        <img src={club.image} alt={club.club} className="scrollable-image" />
                        <p className="scrollable-caption"><b>{club.club}</b></p>
                        <p className="scrollable-caption">{club.position}</p>
                        <p className="scrollable-caption">{club.year}</p>
                    </div>
                ))}
                </div>
            </div>

        </div>
    );
};

export default About;
