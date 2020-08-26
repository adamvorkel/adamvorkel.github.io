import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {

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
        <section id="About" className="about App-section">
          <div className="container">
            <div className="content">

                <span className="tag line-before">About</span>

                  <div className="section-heading">
                    <h2>Let’s Get Aquainted</h2>
                  </div>
                  <div className="details">
                        <ul>
                            <li>Name: Adam Vorkel</li>
                            <li>Age: 26</li>
                            <li>From: Gauteng, South Africa</li>
                        </ul>
                    </div>

                <div className="big-text">
                  <p>I’m Adam, and I am a passionate software engineer and full stack developer with a boundless interest in technology and computing. </p>
                </div>
                <div className="story">
                    <p>I’ve always been fascinated with technology, specifically computers. As a kid I spent countless hours playing around on the family PC, or opening up electronics (even though I couldn’t always put them back together).</p>
                    <p>Years later, after deciding to learn my first programming language, PHP, an undertaking that although seemed daunting, filled me with wonder and excitement, I realized that I was meant for a career in development.</p>
                    <p>In 2015 I decided to formally study computer science to better acquaint me with the discipline and give me means to gain a footing in the field professionaly, so I enrolled at UNISA (the University of South Africa) and began my Bsc in Computing, which I completed in 2020.</p>
                </div>
            </div>
          </div>
        </section>
    )
}

export default About;