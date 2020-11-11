import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';


/*
* Header 
*/

const HeaderStyle = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 3rem;
  color: #ffffff;
  z-index: 100;
  --text-color: #f2f2f2;
`;

const Logo = styled.a`
  margin-bottom: 3em;
  display: block;
  width: 3em;
  height: 3em;
  border: 1px solid var(--text-color);
  border-radius: 50%;
  text-align: center;
  line-height: 3em;
  text-decoration: none;
  font-family: var(--heading-font);
  color: var(--text-color);
  font-size: 1.25rem;
`;

function Header() {
  return (
    <>
      <HeaderStyle className="App-header">
        <Logo href="/">AV</Logo>
      </HeaderStyle>
      <Navigation />
      </>
  );
}

export default Header;
