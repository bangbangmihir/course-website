import {Switch,Route,} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Service from './Service';
import Footer from './Footer';
import './App.css';

const App = () =>{
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/service" component={Service}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
