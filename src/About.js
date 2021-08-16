import React from 'react';
import Common from './Common';
import "./index.css"


const About = () => {
    const web = "https://source.unsplash.com/user/erondu/1600x900"
    return (
        <>
            <Common name="Welcome to About Page" imgsrc={web} visit="/contact" btname="Contact Now"/>
        </>
    );

}

export default About;