import React from "react";
import './skills.css';
import SEngineering from '../../assets/SE.jpg';
import CWriting from '../../assets/CW.jpg';
import TWriting from '../../assets/TW.jpg';

const Skills = () => {
    return (
        <section id="skills" className="skillsSection">
            <span className="skillTitle">What I do</span>
            <span className="skillDescription">
                I am a skilled and passionate software engineer with experience 
                in creating string and user-friendly systems. I am also experienced 
                in the fields of technical writing and content writing.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={SEngineering} className="skillBarImg" alt="SE img"></img>
                    <div className="skillBarText">
                        <h2>Software Engineering</h2>
                        <p>
                            Proficient in both front-end and back-end development, 
                            I specialize in building end-to-end solutions that meet 
                            the needs of modern web applications.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={CWriting} alt="CW img" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Content Writing</h2>
                        <p>
                            I have created web contents for numerous websites, job platforms and blogs 
                            such as Cyber Accord, Data Theory Group, Lemonade Strand, Scripted, Upwork.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={TWriting} alt="TW img" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Technical Writing</h2>
                        <p>
                            Wrote over 100+ technical articles around topics such as Ubuntu, Nodejs, Nginx, Aws, Azure, MySQL, 
                            Apache, Cassandra and more. Have also technical tutorials and how-to guides around 
                            servers and databases.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;