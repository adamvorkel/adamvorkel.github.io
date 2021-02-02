import React from "react";
import styled from 'styled-components';

import Container from '../styled/Container';

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`

const Heading = styled.h1`
  margin-top: 0;
  font-size: 4.8rem;
  font-weight: var(--font-weight-bold);
  color: #141c3a;
`;

const Subheading = styled.span`
  color: #141c3a;
  font-size: 2.4rem;
`;



const Splash = (props) => {
    return (
        <Section>
            <Container>
              <Heading>Fullstack Developer <br/> and tech enthusiast</Heading>
              <Subheading>Currently based in Cape Town, South Africa</Subheading>
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