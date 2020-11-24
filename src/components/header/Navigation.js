import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

import MenuIcon from './MenuIcon';
 
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
        }
    }
`

const Navigation = () => {
    const nav = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const tl = useRef(null);

    useEffect(() => {
        const listItems = nav.current.getElementsByTagName("li");
        gsap.set(nav.current, {opacity: 0, display: 'none'});
        tl.current = gsap.timeline({ paused: true });
        tl.current
            .set(nav.current, {display: 'flex'})
            .to(nav.current, {opacity: 1, duration: 0.2})
            .fromTo(listItems, 
                {x: -100, opacity: 0}, 
                {x: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.inOut"},
                "-=0.4"
                )
    }, []);


    const handleClick = () => {
        if(isOpen) {
            // close
            setIsOpen(false);
            tl.current.reverse();
        } else {
            // open
            setIsOpen(true);
            tl.current.play();
        }
    }

    return (
        <>
        <MenuIcon onClick={handleClick} />
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