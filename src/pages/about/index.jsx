import React from "react";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Narrative from './../about/components/narrative'
import Bannerabout from'./../about/components/bannerabout'
import Why from'./../about/components/why'
import Icon from'../about/components/icon'

const About = () => {
	return (
    <>
    
    <Navbar/>
    <Bannerabout/>
    <Narrative/>
    <Why/>
    <Icon/>
    <Footer/>
    </>
		
	);
};

export default About;