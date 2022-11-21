import React from "react";
import Nagoya from'./../../../img/nagoya hill.jpg'
import Radison from './../../../img/radison.jpg'
import Haris from './../../../img/haris.jpg'
import Pasific from './../../../img/pasific.jpg'
import { Link } from 'react-router-dom';
const portfolioo = () => {
	return (
        <>
            <div className="bg">
            <div className="bg-[#9ACD32] bg-opacity-20 font-['Rubik'] py-5 rounded-xl mx-5 my-5">
            <div className="text-center text-black font-bold text-4xl ">
                <h2 className="my-5">Portfolio</h2>
                </div>
               <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
                    <figure><img src={Radison} alt="Radison" /></figure>
                    <div className="card-body my-4 mx-4 ">
                        <h2 className="card-title text-white">Radison Hotel Batam</h2>
                        <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                    </div>
                </div> 
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
                    <figure><img src={Haris} alt="Haris" /></figure>
                    <div className="card-body my-4 mx-4">
                        <h2 className="card-title text-white">Haris Resort Barelang Batam</h2>
                        <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                    </div>
                </div> 
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
                    <figure><img src={Pasific} alt="Pasific" /></figure>
                    <div className="card-body my-4 mx-4">
                        <h2 className="card-title text-white">Pasific Palace Hotel Batam</h2>
                        <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                    </div>
                </div> 
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
                    <figure><img src={Nagoya} alt="Nagoya" /></figure>
                    <div className="card-body my-4 mx-4">
                        <h2 className="card-title text-white">Nagoya Hill Hotel</h2>
                        <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                    </div>
                </div> 
            </div> 
            <div className="card-actions justify-end my-5">
                <Link to='/portfolio'>
                <button className="btn transition ease-in-out delay-150 bg-[#CFCFD2] bg-opacity-50 hover:-translate-y-1  hover:bg-[#a1a1a3] hover:bg-opacity-70 duration-300 rounded-2xl mr-5">More Portfolio</button>
                </Link>
            </div>
            </div>
            </div>
            
            
        </>     
		
	);
};

export default portfolioo;

//<a href="https://api.whatsapp.com/send/?phone=62811275751545&amp;text=Halo+saya+ingin+bertanya&amp;type=phone_number"><img src={wa} alt=""/></a>