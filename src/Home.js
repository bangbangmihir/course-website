import React from 'react';
import Common from './Common';
import Service from './Service';
import "./index.css"


const Home = (props) => {
    const web = "https://source.unsplash.com/user/erondu/1600x900"
    return (
        <>
            <Common name="Welcome to Home Page" imgsrc={web} visit="/contact" btname="Get started"/>
            <Service/>
            
        </>
    );

}

export default Home;