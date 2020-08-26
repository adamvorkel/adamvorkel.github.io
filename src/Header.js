import React from 'react';

function Header() {
  return (
      <header className="App-header">
        <span className="App-logo"><a href="/">AV</a></span>
        {/* <img src={logo} className="App-logo" alt="logo" /> */} 
        <nav className="App-nav">
          <ul>
            <li><a href="/#About">About</a></li>
            <li><a href="/#Skills">Skills</a></li>
            <li><a href="/#Academics">Academics</a></li>
            <li><a href="/#Contact">Contact</a></li>
          </ul>
        </nav>
        {/* <span className="cv-link line-before"><a href="/#">Download CV</a></span> */}
        
      </header>
  );
}

export default Header;
