import React, { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from 'styled-components';

import Container from '../styled/Container';

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

/*
* Splash 
*/


    const Section = styled.section`
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `

    const Heading = styled.h1`
      margin-top: 0;
      font-size: 5.5rem;
    `;

    const Tag = styled.span`
      color: #fff;
      // font-size: 0.875em;
      // text-transform: uppercase;
      // font-weight: 400;
      // letter-spacing: 0.2em;
    `;


    return (
        <Section>
          <Container>
              <Heading>Hi, I'm Adam.</Heading>
              <Tag>Software Engineer | Fullstack Developer</Tag>
              </Container>
          

            <div className="social-links">
              <ul>
                {props.links.map(l => (<li><a href={l.url} target="_blank" rel="noopener noreferrer">{l.name}</a></li>))}
              </ul>
            </div>

          
        </Section>
    )
}

export default Splash;