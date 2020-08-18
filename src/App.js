import React from 'react';
// import logo from './logo.svg';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <section className="splash App-section">
          <div className="container">
            <span className="tag line-before">Intro</span>
            <h1>Hi, I’m Adam Vorkel</h1>
            <div className="content line-before">
            <p>Full stack developer, software engineer, all-round tech enthusiast.</p>
            </div>
          </div>
          <span className="scroll-prompt line-before long">
            Scroll down
          </span>
        </section>

        <section className="about App-section">
          <div className="container">
            <div className="content">

                <span className="tag line-before">About</span>
                <div className="main">
                  <div className="section-heading">
                    <h2>Who I Am</h2>
                  </div>
                </div>
                
                
                <div className="big-text">
                  <p>I’m Adam, and I am a passionate software engineer and full stack developer with a boundless interest in technology and computing. </p>
                </div>
                <div className="story">
                    <p>I’ve always been fascinated with technology, specifically computers. As a kid I spent countless hours playing around on the family PC, or opening up electronics (even though I couldn’t always put them back together).</p>
                    <p>Years later, after deciding to learn my first programming language, PHP, an undertaking that although seemed daunting, filled me with wonder and excitement, I realized that I was meant for a career in development.</p>
                    <p>In 2015 I decided to formally study computer science to better acquaint me with the discipline and give me means to gain a footing in the field professionaly, so I enrolled at UNISA (the University of South Africa) and began my Bsc in Computing, which I completed in 2020.</p>
                </div>
                <div className="profile">
                    <div className="image-placeholder"></div>
                    <div className="details">
                    <ul>
                      <li>Name: Adam Vorkel</li>
                      <li>Age: 26</li>
                      <li>From: Gauteng, South Africa</li>
                    </ul>
                    {/* <ul> */}
                      {/* <li>Qualification: Bachelor of Science in Computing</li> */}
                      {/* <li>University of South Africa (UNISA)</li> */}
                    {/* </ul> */}
                    <div className="resume-link">
                      <p><a href="/">View my resume &gt;</a></p>
                    </div>
                  </div>
                </div>
                

            </div>
          </div>
        </section>

        <section className="skills App-section">
          <div className="container">
            <div className="content">
              
              
            
              <div className="skill-cards">
              <div className="section-heading">
              <span className="tag line-before">Skills</span>
                <h2>My Skills</h2>
              </div>
                <div>
                  <h3>Front End</h3>
                  <ul>
                    <li>HTML(5)</li>
                    <li>CSS(3)</li>
                    <li>Javascript &amp; DOM</li>
                    <li>React, Redux</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div>
                  <h3>Back End</h3>
                  <ul>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>PHP, Wordpress</li>
                    <li>C# and .NET Core</li>
                    <li>Databases (SQL, MongoDB)</li>
                  </ul>
                </div>
                
                <div>
                  <h3>Tooling</h3>
                  <ul>
                    <li>Docker</li>
                    <li>Basic Linux Admin</li>
                    <li>Bash Shell</li>
                    <li>Git</li>
                  </ul>
                </div>
                <div>
                  <h3>Other Interests</h3>
                  <ul>
                    <li>Machine learning</li>
                    <li>Deep learning (Keras &amp; Tensorflow)</li>
                    <li>Blockchain technology</li>
                    <li>Operating Systems</li>
                    <li>Open source software</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="academics App-section">
          <div className="container">
            <div className="content">
              
                <div className="section-heading">
                  <span className="tag line-before">Academics</span>
                  <h2>BSc in Computing</h2>
                </div>
                
                <div className="info text-lg">
                  <ul>
                    <li>University of South Africa (UNISA)</li>
                    <li>Course code: 98906</li>
                    <li>2015 - 2020</li>
                  </ul>
                </div>

            </div>
          </div>
        </section>

        <section className="contact App-section">
          <div className="container">
            <div className="section-heading">
                <h2>Contact</h2>
              </div>
          </div>
        </section>
    </div>
  );
}

export default App;
