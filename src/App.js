import React from 'react';
// import logo from './logo.svg';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <section className="splash dark App-section">
          <div className="splash-content container">
              <div className="section-heading">
                <span className="tag line-before">Adam Vorkel</span>
                <h1>Fullstack Developer</h1>
              </div>
              
              <div className="content line-before">
              <p>Full stack developer, software engineer, all-round tech enthusiast.</p>
              </div>
          </div>
          
          <div className="splash-footer container">
              <div className="hire-me">
                <span className="tag line-before">Available for Hire</span>
                <p className="resume-link">View my resume</p>
              </div>
              <div className="social-links">
            <ul>
              <li><a href="https://github.com/adamvorkel" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://www.linkedin.com/in/adamvorkel/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
              <li><a href="https://www.facebook.com/adam.vorkel/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
          </div>
          <span className="scroll-prompt line-before long">
            Scroll
          </span>
          
        </section>

        <section className="about App-section">
          <div className="container">
            <div className="content">

                <span className="tag line-before">About</span>
                <div className="main">
                  <div className="section-heading">
                    <h2>Who I Am</h2>
                    <div className="details">
                    <ul>
                      <li>Name: Adam Vorkel</li>
                      <li>Age: 26</li>
                      <li>From: Gauteng, South Africa</li>
                    </ul>
                  </div>
                  </div>
                </div>
                
                
                <div className="big-text">
                  <p>I’m Adam, and I am a passionate software engineer and full stack developer with a boundless interest in technology and computing. </p>
                </div>
                <div className="story-col-1">
                    <p>I’ve always been fascinated with technology, specifically computers. As a kid I spent countless hours playing around on the family PC, or opening up electronics (even though I couldn’t always put them back together).</p>
                    <p>Years later, after deciding to learn my first programming language, PHP, an undertaking that although seemed daunting, filled me with wonder and excitement, I realized that I was meant for a career in development.</p>
                </div>
                <div className="story-col-2">
                  <p>In 2015 I decided to formally study computer science to better acquaint me with the discipline and give me means to gain a footing in the field professionaly, so I enrolled at UNISA (the University of South Africa) and began my Bsc in Computing, which I completed in 2020.</p>
                </div>

                    

                

            </div>
          </div>
        </section>

        <section className="skills App-section">
          <div className="container">
            <div className="content">
              
              
   
              <div className="section-heading">
              <span className="tag line-before">Skills</span>
                <h2>My Skills</h2>
              </div>
                
                <div className="skill-list">
                  <h3>Back End</h3>
                  <ul>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>PHP, Wordpress</li>
                    <li>C# and .NET Core</li>
                    <li>Databases (SQL, MongoDB)</li>
                  </ul>
                </div>
                <div className="skill-list">
                  <h3>Front End</h3>
                  <ul>
                    <li>HTML(5)</li>
                    <li>CSS(3)</li>
                    <li>Javascript &amp; DOM</li>
                    <li>React, Redux</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="skill-list">
                  <h3>Tooling</h3>
                  <ul>
                    <li>Docker</li>
                    <li>Basic Linux Admin</li>
                    <li>Bash Shell</li>
                    <li>Git</li>
                  </ul>
                </div>

            </div>
          </div>
        </section>

        <section className="academics App-section">
          <div className="container">
            <div className="content">
              
                <div className="section-heading">
                  <span className="tag line-before">Academics</span>
                  <h2>CS Degree</h2>
                </div>
                
                <div className="info">
                  <p>I obtained my computer science degree, a BSc in Computing, from the University of South Africa (UNISA).</p>
                  <p><b>2015 - 2020</b></p>
                  <p><b>Course Code 98906</b></p>
                </div>

            </div>
          </div>
        </section>

        <section className="contact dark App-section">
          <div className="container">
            <div className="content">
              <div className="section-heading">
                <span className="tag line-before">Contact</span>
                <h2>Let's Get in Touch</h2>
              </div>
              <div className="details">
                <p>If you’re interested in getting in touch, feel free to contact me at any time.</p>
                <ul>
                  <li>082 465 3228</li>
                  <li>adamvorkel@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
