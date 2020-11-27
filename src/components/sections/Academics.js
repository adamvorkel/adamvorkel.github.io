import React from "react";
import styled from 'styled-components';

import Container from '../styled/Container';
import Section from '../styled/Section';
import Tag from '../styled/Tag';


const Date = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  display: flex;
  align-items: center;
  position: relative;
  :after {
    content: '';
    width: 2rem;
    border-top: 1px solid;
    margin-left: 1rem;
  }
`;

const AcademicsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  gap: 1rem;
  margin-top: 3rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
  }
  ${Date} {
    // grid-column: 2;
    justify-self: flex-end;
    // :nth-of-type(even) {
      // grid-column: 1;
    // }
  }

  h3 {
    font-size: 1.8rem;
  }

  .big {
    display: block;
    font-size: 5rem;
    margin-top: 0.5em;
    margin-bottom: 0.4em;
  }
`;

const Academics = () => {
    return (
    <Section id="Academics">
      <Container>
          <Tag>Education</Tag>
          <AcademicsContent>
                <Date>2015 - 2020</Date>
                <div>
                    <h3>University of South Africa (UNISA)</h3>
                    <span className="big">BSc in Computing</span>
                    <p>University of South Africa (UNISA)</p>
                </div>

                <Date>2013 - 2014</Date>
                <div>
                    <h3>Emendy Multimedia Institute</h3>
                    <p>Completed first year of Diploma in Music Technology - DMT02</p>
                </div>

                <Date>2008 - 2012</Date>
                <div>
                    <h3>The Keep Learning Centre</h3>
                    <p>High School Student | AS &amp; O levels</p>
                    <p>Completed University of Cambridge International Matric</p>
                </div>

          </AcademicsContent>
      </Container>
    </Section>
    )
};

export default Academics;