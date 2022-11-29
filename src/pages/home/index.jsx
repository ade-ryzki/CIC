import React from "react";
import Navbar from '../../components/navbar';
// import Banner from './components/Banner';
import Ourproduct from './components/Ourproduct';
import Footer from '../../components/footer'
import Partfour from './components/partfour'
import Partthree from './components/partthree';
import Portfolioo from './components/portfolioo';
import Slider from "../../components/Slider";



const Home = () => {
	return (
    <>
      <Navbar/>
      <Partfour/>
      <Slider/>
      <Ourproduct/>
      <Partthree/>
      
      <Portfolioo/>
      <Footer/>
      
    </>
	);
};

export default Home;