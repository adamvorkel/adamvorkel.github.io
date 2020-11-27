import React from "react";
import styled from 'styled-components';

import Container from '../styled/Container';
import Section from '../styled/Section';
import Tag from '../styled/Tag';

const projects = [
    {
        title: 'Chatter',
        description: 'A social media app',
        url: 'https://github.com/adamvorkel/mern-social',
    },
    {
        title: 'Two Cents',
        description: 'An advice platform',
        url: 'https://github.com/adamvorkel/reactnetcore-forum',
    },
    {
        title: 'Color Ripper',
        description: 'An color app',
        url: 'https://github.com/adamvorkel/flask-colorapp',
    },
]

const PortfolioContent = styled.div`
    margin-top: 3rem;       
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

const PortfolioTitle = styled.h2`
  margin-top: 1rem;
  font-size: 5rem;
`;

const PortfolioItem = styled.div`
  box-shadow: 0px 2px 3px rgba(0,0,0,0.4), 0px 0px 24px rgba(0,0,0,0.3);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
      font-size: 0.78em;
  }
`;

const Portfolio = ({ links }) => {
    return (
        <Section id="Portfolio">
          <Container>
            <Tag>Portfolio</Tag>
            <PortfolioContent>
                {projects.map(p => 
                    <PortfolioItem key={p.title}>
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <a href={p.url} target="_blank" rel="noopener noreferrer">View</a>
                    </PortfolioItem>
                )}
            </PortfolioContent>
          </Container>
        </Section>
    )
};

export default Portfolio;