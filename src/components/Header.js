import React, {useEffect} from 'react';
import {gsap} from "gsap";

const Header = () => {
    useEffect(() => {
        gsap.to('#headerText', {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
        });
    }, []);

    return (
        <section className="headerContainer" data-scroll-section>
            <ul>
                <li>Intro</li>
                <li>About</li>
                <li>Featured</li>
            </ul>
            <h1 id={"headerText"}>PUIG ETienne</h1>
        </section>

    );
};

export default Header;
