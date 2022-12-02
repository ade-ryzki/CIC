import React from "react";
import Navbar from '../../components/navbar';
import Ourproduct from './components/Ourproduct';
import Footer from '../../components/footer'
import Welcome from './components/welcome'
import Portfolioo from './components/portfolioo';
import Slider from "../../components/Slider";

const Home = () => {
	return (
    <>
      <Navbar/>
      <Welcome/>
      <Ourproduct/>
      <Slider/>
      <Portfolioo/>
      <Footer/>
      
    </>
	);
};

export default Home;