import React from "react";
import styled from 'styled-components';

import Container from '../styled/Container';
import Section from '../styled/Section';
import Tag from '../styled/Tag';

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 2fr;
    gap: 3rem;
  }
`;

const AboutTitle = styled.h2`
  grid-column: 1/3;
  margin-top: 3rem;
  font-size: 10rem;
`;

const AboutStory = styled.div`
  grid-column: 3/4;
  margin-top: 3rem;
`;

const About = () => {
    return (
        <Section id="About">
          <Container>
            <Tag>About</Tag>
            <AboutContent>
                <AboutTitle>I believe in constantly learning and improving...</AboutTitle>
                <AboutStory>
                  <p>I’ve always been fascinated with technology, specifically computers. As a kid I spent countless hours playing around on the family PC, or opening up electronics (even though I couldn’t always put them back together). Years later, after deciding to learn my first programming language, PHP, an undertaking that although seemed daunting, filled me with wonder and excitement, I realized then that I wanted to be a developer.</p>
                  <p>In 2015 I decided to formally study computer science to further my education and give me means to gain a footing in the field professionaly, so I enrolled at the University of South Africa (UNISA) and began my Bsc in Computing, Since completing my degree, I have continued to indulge my curiosity and passion by learning new skills and technologies, always growing and improving as a software developer and problem solver.</p>
                </AboutStory>
            </AboutContent>
          </Container>
        </Section>
    )
}

export default About;