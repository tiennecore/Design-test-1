import React, {useEffect, useRef, useState} from 'react';
import SectionHeader from "./SectionHeader";
import {gsap} from "gsap";
import OnScreen from "./hooks/OnScreen";
import cn from 'classnames'

const About = () => {
    const ref =useRef()
    const [reveal,setReveal] = useState(false)
    const onScreen = OnScreen(ref)
    useEffect(()=>{
        if (onScreen) setReveal(onScreen)
    },[onScreen])
    useEffect(() =>{
        if (reveal){
            console.log("reveal")
            gsap.to('#headlines',{
                duration:3,
                y: 0,
                opacity:1,
                stagger:0.1,
                ease:"power2",
            })
        }
    },[reveal])

    return (
        <section className={"about-section"} data-scroll-section>
            <SectionHeader title={"About"}/>
            <p ref={ref} id={"headlines"} className={cn({'is-reveal' : reveal})}>
                Currently in a career change process,<br/>
                I was a young engineer in cyber security since three years.
                I've decided to put down my career in order to become a developer fullstack.
                I'm always looking for challenges. <br/>I will never stop to learn new things in code.
            </p>
        </section>
    );
};

export default About;
