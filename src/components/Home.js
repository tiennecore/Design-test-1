import React, {useEffect, useRef, useState} from 'react';
import NavBar from "./NavBar";
import Header from "./Header";
import Featured from "./Featured";
import About from "./About";
import Gallery from "./Gallery";
import Footer from "./Footer";
import CustomCursor from "../customCursor/CustomCursor";
import Locomotive from "./hooks/locomotive";

const Home = () => {
    const [preloader,setPreloader] = useState(true)
    const [timer,setTimer] = useState(1)
    const id = useRef(null)

    Locomotive(!preloader)

    const clear = () =>{
        window.clearInterval(id.current)
        setPreloader(false)
    }

    useEffect(()=>{
        id.current = window.setInterval( () =>{
            setTimer((timer) => timer-1)
        },1000)
    },[])

    useEffect(()=>{
        if(timer === 0){
            clear()
        }
    },[timer])
    return (
        <>
            <CustomCursor />
            { preloader ?
                <div className={"loader-wrapper absolute"}>
                    <h1>Welcome</h1>
                </div>
                :
                <div
                    className="main-container" id="main-container"
                    data-scroll-container
                >
                    <NavBar />
                    <Header/>
                    <Featured/>
                    <About />
                    <Gallery />
                    <Footer />
                </div>
            }
        </>
    );
};

export default Home;
