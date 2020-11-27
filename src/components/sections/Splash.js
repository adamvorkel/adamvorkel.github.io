import React from "react";
import styled from 'styled-components';

import Container from '../styled/Container';

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Heading = styled.h1`
  margin-top: 0;
  font-size: 10rem;
`;

const Subheading = styled.span`
  color: #fff;
  font-style: italic;
`;

const Bold = styled.span`
  font-weight: var(--font-weight-bold);
  color: var(--color-accent)
`;

const Splash = (props) => {
    return (
        <Section>
            <Container>
              <Heading>Hi, I'm <Bold>Adam</Bold>, and I'm a <br />Software Engineer / <br />Fullstack Developer.</Heading>
              <Subheading>Currently based in Cape Town, South Africa <br/> Available for hire, view resume &gt;</Subheading>
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