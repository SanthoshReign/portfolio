import React from 'react'
import './Skills.css';
import java from '../../assets/java.jpg';
import webDesign from '../../assets/website-design.png';
import SQL from '../../assets/SQL.png';
import spring from '../../assets/spring.jpeg';
import frameworks from '../../assets/frameworks.jpg';
import versionControl from '../../assets/versionControl.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">Skills</span>
        <span className="skillDesc">
            Passionate software developer with a keen eye for innovation and a drive to create impactful solutions.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={webDesign} alt="WebDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>
                        WebDesign
                    </h2>
                    <p>
                        Proficient in HTML5, CSS3, JavaScript (ES6+).
                        Experience with modern web frameworks such as React.js.
                        Strong understanding of responsive design principles and mobile-first development.
                    </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={java} alt="Java" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>
                        Java
                    </h2>
                    <p>
                        Strong understanding of object-oriented programming (OOP) concepts and design patterns.
                        Good understanding in DSA part of Java
                    </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={SQL} alt="SQL" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>
                        SQL
                    </h2>
                    <p>
                        Strong understanding in MySQL.
                        Proficient in writing complex SQL queries, including SELECT, INSERT, UPDATE, DELETE statements.
                    </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={frameworks} alt="frameworks" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>
                        FrameWorks
                    </h2>
                    <p>
                        Spring, Bootstrap, tailwind
                    </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={versionControl} alt="VersionControl" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>
                        Version Control System
                    </h2>
                    <p>
                        Utilized Git for version control, managing codebase changes, and
                        collaborating with team members on software development projects.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;