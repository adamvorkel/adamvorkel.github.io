import React from "react";

const Skills = () => { 
    return (
        <section id="Skills" className="skills App-section">
            <div className="container">
                <div className="content">
                    <div className="section-heading">
                        <span className="tag line-before">Skills</span>
                        <h2>What I Can Do</h2>
                    </div>
                    <div className="skill-cards">
                        <div className="skill-card">
                            <h3>Back End</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>Python</li>
                                <li>PHP, Wordpress</li>
                                <li>C# and .NET Core</li>
                                <li>Databases (SQL, MongoDB)</li>
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h3>Front End</h3>
                            <ul>
                                <li>HTML(5)</li>
                                <li>CSS(3)</li>
                                <li>Javascript &amp; DOM</li>
                                <li>React, Redux</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h3>Tooling</h3>
                            <ul>
                                <li>Docker</li>
                                <li>Basic Linux Admin</li>
                                <li>Bash Shell</li>
                                <li>Git</li>
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h3>Other Interests</h3>
                            <ul>
                                <li>Machine learning Deep learning (Keras &amp; Tensorflow)</li>
                                <li>Blockchain technology</li>
                                <li>Operating Systems</li>
                                <li>Open source software</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;