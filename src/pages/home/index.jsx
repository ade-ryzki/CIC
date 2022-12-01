import React from "react";
import Navbar from '../../components/navbar';
// import Banner from './components/Banner';
import Ourproduct from './components/Ourproduct';
import Footer from '../../components/footer'
import Welcome from './components/welcome'
import Partthree from './components/partthree';
import Portfolioo from './components/portfolioo';
import Slider from "../../components/Slider";



const Home = () => {
	return (
    <>
      <Navbar/>
      <Welcome/>
      <Ourproduct/>
      <Slider/>
      {/* <Partthree/>
      <Portfolioo/> */}
      <Footer/>
      
    </>
	);
};

export default Home;