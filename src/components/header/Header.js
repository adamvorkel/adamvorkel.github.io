import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

/*
* Header 
*/

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 3rem 3rem;
  color: #ffffff;
  z-index: 100;
  justify-content: space-between;
  --text-color: #f2f2f2;
`;

const Logo = styled.a`
  display: block;
  text-align: center;
  line-height: 1em;
  text-decoration: none;
  font-family: var(--heading-font);
  color: var(--text-color);
  font-size: 2rem;
  font-weight: 400;
  padding: 0.5em;
`;

const Header = () => {
  return (
    <>
      <HeaderStyle className="App-header">
        <Logo href="/">AV.</Logo>
        <Navigation />
      </HeaderStyle>
      
      </>
  );
}

export default Header;
