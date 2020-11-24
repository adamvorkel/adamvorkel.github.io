import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineMax } from 'gsap';



const Loader = () => {
    const preloader_bg = useRef(null);
    const preloader = useRef(null);

    useEffect(() => {
        var l = preloader.current.getTotalLength();
        TweenMax.set(preloader.current, {strokeDasharray:l});
        let tl = new TimelineMax();
        tl
        .fromTo(preloader.current, 1, { strokeDashoffset:l }, {strokeDashoffset:0})
        .to(preloader.current, 0.5, { opacity: 0 })
        .to(preloader_bg.current, 1, {scaleX:0, transformOrigin: "center right", ease: 'Power4.easeInOut'});
    }, []);

    
    return (
        <div ref={preloader_bg} className="App-preloader">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle ref={preloader} cx="25" cy="25" r="24" stroke="white" stroke-width="2"/>
        </svg>


        </div>
    );
};

export default Loader;