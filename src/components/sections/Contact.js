import React from "react";
import styled from 'styled-components';

import Container from '../styled/Container';
import Section from '../styled/Section';
import Tag from '../styled/Tag';

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
`;

const ContactTitle = styled.h2`
  margin-top: 3rem;
  font-size: 5rem;
`;

const SocialLinks = styled.ul`
  list-style: none;
`;

const Contact = ({ links }) => {
    return (
        <Section>
          <Container>
            <Tag>Contact</Tag>
            <ContactContent>
              <ContactTitle>Get in touch</ContactTitle>
              <div>
                <h3>Contact details</h3>
                <p>082 465 3228<br /> adamvorkel@gmail.com</p>
              </div>
              <div>
                <h3>Address</h3>
                <p>Bluebell Way<br /> Cape Town, 7560<br /> Western Cape, South Africa</p>
              </div>
              <div>
                <h3>Links</h3>
                <SocialLinks>
                {links.map(l => <li><a href={l.url} key={l.name} target="_blank" rel="noopener noreferrer">{l.name}</a></li>)}
                </SocialLinks>
              </div>
            </ContactContent>
          </Container>
        </Section>
    )
};

export default Contact;