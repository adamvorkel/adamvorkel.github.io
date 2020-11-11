import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Splash = (props) => {
    useEffect(() => {
      // TweenMax.to(test.current, {
      // scrollTrigger: test.current, // start the animation when ".box" enters the viewport (once)
      // x: 500
    // });

    // const scene = gsap.timeline();
    // scene.set('.splash', {backgroundColor: 'transparent'})
    // scene.fromTo('.splash .splash-content .tag', 0.3, {x: -50, opacity: 0}, {x: 0, opacity: 1})
    // scene.fromTo('.splash .splash-content h1', 0.3, {y: 50, opacity: 0}, {y: 0, opacity: 1})
    // scene.fromTo('.splash .splash-content .content', 0.3, {y: 50, opacity: 0}, {y: 0, opacity: 1})

        // ScrollTrigger.create({
            // animation: scene,
            // trigger: '.splash',
            // start: "top top",
            // end: "bottom 0",
            // markers: true,
            // pin: true,
        // });
    });


    return (
        <section className="splash dark App-section">
          <div className="splash-content container">
              <div className="section-heading">
                <h1>Hi, I'm Adam.</h1>
              </div>
              
              <div className="content line-before">
                <p>Full-stack developer, software engineer, all-round tech enthusiast.</p>
              </div>
          </div>
          
          <div className="splash-footer container">
              <div className="hire-me">
                <span className="tag line-before">Available for Hire</span>
                <p className="resume-link"><a href="/downloads/resume.pdf" target="_blank">View my resume</a></p>
              </div>
              <div className="social-links">
            <ul>
              {props.links.map(l => (<li><a href={l.url} target="_blank" rel="noopener noreferrer">{l.name}</a></li>))}
            </ul>
          </div>
          </div>
          <span className="scroll-prompt line-before long">
            Scroll
          </span>
          
        </section>
    )
}

export default Splash;