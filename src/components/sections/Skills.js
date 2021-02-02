import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import { gsap } from 'gsap';

import Container from '../styled/Container';
import Section from '../styled/Section';
import Tag from '../styled/Tag';

const Section1 = styled(Section)`
    background-color: #141c3a;
`

const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 3rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

const SkillsTag = styled(Tag)`
  transform: translateX(0);
`;

const SkillCategory = styled.div`
  background-color: #202732;
  padding: 3rem;
  h3 {
      margin-top: 0;
  }
  ul {
      list-style: none;
      font-size: 0.78em;
  }
`;

const Skills = () => { 
    const blocks = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            blocks.current, 
            {
                opacity: 0, 
                y: '50%',
            }, 
            {
                opacity: 1, 
                y: '0%',
                stagger: 0.1, 
                scrollTrigger: 
                {
                    trigger: '#Skills', 
                    // start: '-=50% 75%', 
                    // end: '50% 75%',
                    scrub: 1,
                    pin: true,
                    // markers: true,
                }
            }
        )
    }, []);

    const addToRefs = (el) => {
        if(el && !blocks.current.includes(el)) {
            blocks.current.push(el);
        }
    }

    return (
        <Section1 id="Skills">
            <Container>
                <SkillsTag>Skills</SkillsTag>
                <SkillsContent>
                    <SkillCategory ref={addToRefs}>
                        <h3>Backend</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>PHP, Wordpress</li>
                            <li>C# and .NET Core</li>
                            <li>Databases (SQL, MongoDB)</li>
                        </ul>
                    </SkillCategory>
                    <SkillCategory ref={addToRefs}>
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML(5)</li>
                            <li>CSS(3)</li>
                            <li>Javascript</li>
                            <li>React, Redux</li>
                            <li>Bootstrap</li>
                        </ul>
                    </SkillCategory>
                    <SkillCategory ref={addToRefs}>
                        <h3>Tools</h3>
                        <ul>
                            <li>Git</li>
                            <li>Docker</li>
                            <li>Linux</li>
                            <li>Bash</li>
                        </ul>
                    </SkillCategory>
                </SkillsContent>
            </Container>
        </Section1>
                

    );
};

export default Skills;