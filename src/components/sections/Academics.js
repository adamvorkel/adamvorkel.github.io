import React from "react";
import styled from 'styled-components';

import Container from '../styled/Container';
import Section from '../styled/Section';
import Tag from '../styled/Tag';

const AcademicsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  gap: 1rem;
  margin-top: 3rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 2fr;
    gap: 3rem;
  }
  ${Tag} {
    grid-column: 2;
    justify-self: flex-end;
    :nth-of-type(even) {
      grid-column: 1;
    }
  }
`;

const AcademicsTag = styled(Tag)`
  transform: translateX(0);
`;


const Academics = () => {
    return (
      <Section>
      <Container>
          <AcademicsTag>Education</AcademicsTag>
          <AcademicsContent>

                <Tag>2015 - 2020</Tag>
                <div>
                    <p>University of South Africa (UNISA)</p>
                    <h2>BSc in Computing</h2>
                    <p>University of South Africa (UNISA)</p>
                </div>

                <Tag>2013 - 2014</Tag>
                <div>
                    <p>Emendy Multimedia Institute</p>
                    <p>Completed first year of Diploma in Music Technology - DMT02</p>
                </div>

                <Tag>2008 - 2012</Tag>
                <div>
                    <p>The Keep Learning Centre</p>
                    <p>High School Student | AS &amp; O levels</p>
                    <p>Completed University of Cambridge International Matric</p>
                </div>

          </AcademicsContent>
      </Container>
  </Section>
    )
};

export default Academics;