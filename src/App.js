import React, { useEffect, useRef } from "react";
import { TimelineMax, gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Loader from './Loader';
import Header from './components/header/Header';
import Splash from './components/sections/Splash';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Academics from './components/sections/Academics';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import './App.css';

// gsap stuff
gsap.registerPlugin(ScrollTrigger);

const social_media_links = [
  { name: 'Github', url: 'https://github.com/adamvorkel' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/adamvorkel/' },
  { name: 'Facebook', url: 'https://www.facebook.com/adam.vorkel/' }
];

const App = () => {
  const sections = useRef([]);

  useEffect(() => {
    const scroll_scene = new TimelineMax();
    // gsap.set('.App-section', { backgroundColor: 'transparent' });
    // scroll_scene
      // .fromTo('.App-background', .3, {backgroundColor: '#111111'}, {backgroundColor: '#ffffff'});
    // scroll_scene.fromTo('.App-background', {backgroundColor: '#111111'}, {backgroundColor: '#ffffff'})
    // ScrollTrigger.create({
    //     animation: scroll_scene,
    //     trigger: '.App-background',
    //     start: "top top",
    //     end: "+=100%",
    //     markers: true,
    //     scrub: true
    // });
    // ScrollTrigger.create({
    //     animation: scroll_scene,
    //     trigger: '.about',
    //     start: "top 50%",
    //     end: "+=100%",
    //     toggleActions: "play pause resume reverse",
    //     markers: true,
    // });
  }, []);

  useEffect(() => {
    // const scroll_scene = gsap.timeline();
    // scroll_scene
      // .to('.App-background ', .3, {backgroundColor: '#ffffff'}, 0)
      // .to('.splash ', .3, {opacity: 0}, 0)
      // .fromTo('.about .tag ', .3, {opacity: 0, y: -100}, {opacity: 1, y: 0}, 0)
      // .fromTo('.about .big-text ', .3, {opacity: 0, y: 100}, {opacity: 1, y: 0}, 0)
      // .fromTo('.about .section-heading ', .3, {opacity: 0, x: -100}, {opacity: 1, x: 0})
      // .fromTo('.about .story ', .3, {opacity: 0, x: 100}, {opacity: 1, x: 0});
    // scroll_scene.fromTo('.App-background', {backgroundColor: '#111111'}, {backgroundColor: '#ffffff'})
    // ScrollTrigger.create({
    //     animation: scroll_scene,
    //     trigger: '.App-background',
    //     start: "top top",
    //     end: "+=100%",
    //     markers: true,
    //     scrub: true
    // });
    // ScrollTrigger.create({
        // animation: scroll_scene,
        // trigger: '.about',
        // start: "50% 80%",
        // end: "+=100%",
        // toggleActions: "play pause resume reverse",
        // markers: true,
    // });
  });

  return (
    <div className="App">
      <div className="App-background"></div>
      {/* <Loader /> */}
      <Header />
      <Splash links={social_media_links} />
      <About />
      <Skills />
      <Academics />
      <Portfolio />
      <Contact links={social_media_links} /> 
    </div>
  );
}

export default App;
