import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background: rgba(0,0,0,0.9);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;
    --text-color: #f2f2f2;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: column;

        li a {
            text-decoration: none;
            color: var(--text-color);
            font-family: var(--heading-font);
            padding: 0.5em;
            font-size: 2em;
            display: block;
            font-weight: var(--font-weight-bold);
            // letter-spacing: 0.35em;
            // text-transform: uppercase;
        }
    }
`

const CloseBtn = styled.button`
    position: fixed;
    top: 50px;
    right: 50px;
    z-index: 100;
`;

const Navigation = () => {
    const nav = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        gsap.set(nav.current, {opacity: 0});
    }, []);

    const handleClick = () => {
        const listItems = nav.current.getElementsByTagName("li");
        console.log(listItems)
        if(isOpen) {
            // close
            setIsOpen(false);
            gsap.to(nav.current, {opacity: 0});
            // gsap.to(listItems, {y: -100, stagger: 0.1});
            
            
        } else {
            setIsOpen(true);
            // open
            gsap.to(nav.current, {opacity: 1});
            // gsap.to(listItems, {y: 0, stagger: 0.1})
            gsap.fromTo(listItems, 
                {y: 100, opacity: 0}, 
                {y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.inOut"}
            );
        }
    }

    return (
        <>
        <CloseBtn onClick={handleClick}>{isOpen ? 'Close': 'Open'}</CloseBtn>
        <Nav ref={nav}>
            <ul>
                <li><a href="/#About">About</a></li>
                <li><a href="/#Skills">Skills</a></li>
                <li><a href="/#Academics">Academics</a></li>
                <li><a href="/#Contact">Contact</a></li>
            </ul>
        </Nav>
        </>
    );
};

export default Navigation;