import React, { useEffect } from "react";
import Nagoya from'./../../../img/nagoya hill.jpg'
import Radison from './../../../img/radison.jpg'
import Haris from './../../../img/haris.jpg'
import Pasific from './../../../img/pasific.jpg'
import APJII from'./../../../img/APJII.jpeg'
import sosialisasi from './../../../img/sosialisasi.jpeg'
import { GetPortfolio } from "../../../redux/actions/Portfolio";
import { useDispatch, useSelector } from "react-redux";

const Portfolioo = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetPortfolio());
    },[]);

    const data = useSelector((state)=> state.portfolio)
    console.log(data.data, "test data manaaa");

	return (
        <>
            <div>
            <div className="bg-gradient-to-r from-white to-lime-400 font-['Rubik'] py-5 -3xl  rounded-tr-2xl md:rounded-tr-3xl  mr-5  ">
            <div className="text-center text-black font-bold text-4xl ">
                <h2 className="my-5">Portfolio</h2>
                </div>
               <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
               {/* {data.data.map((portfolio, index) => { 
                // console.log(`${'http://localhost:4117/uploads'}/${portfolio.image}`,'whereeee')
                return(
                        <div className="carousel-item font-['Rubik']">
                                <div className="card w-96 bg-gradient-to-r from-lime-300 to-orange-200 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={`${'http://113.212.160.6/uploads/'}/${portfolio.image}`}
                                    alt="Shoes" 
                                    className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{portfolio.title}</h2>
                                    <p>{portfolio.description}</p>
                                </div>
                            </div>
                         </div>
                            )
                        })} */}
                    <div className="carousel-item">
                        <div className="card lg:card-side bg-[#CFCFD2] bg-opacity-70 shadow-xl">
                        <figure><img src={sosialisasi} alt="Nagoya" className="w-96 h-full"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg">SOSIALISASI CIC</h2>
                            <p className="text-sm">Melakukan pertemuan & sosialisasi tentang CIC dengan warga di Punggur</p>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card lg:card-side bg-[#CFCFD2] bg-opacity-70 shadow-xl">
                        <figure><img src={Radison} alt="Radison" className="w-96 h-full"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg">Radison Hotel Batam</h2>
                            <p className="text-sm">Guest & BOH Backbone<br/>
                            Digital TV Headend, 55 Channels<br/>
                            Wifi Internet, 246 rooms, 51 Public area<br/>
                            Some of CCTV Project<br/>
                            Project February 2016 - October 2016</p>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card lg:card-side bg-[#CFCFD2] bg-opacity-70 shadow-xl">
                        <figure><img src={Haris} alt="Haris" className="w-96 h-full"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg">Haris Resort Barelang Batam</h2>
                            <p className="text-sm">Triple Play, 180 Rooms<br/>
                            Guest & BOH Backbone<br/>
                            IPTV Headend to LG Smartv Hospitality<br/>
                            CCTV Integration<br/>
                            IPBX Integration<br/>
                            Project Start working from April 2017 - Januari 2018</p>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card lg:card-side bg-[#CFCFD2] bg-opacity-70 shadow-xl">
                        <figure><img src={Pasific} alt="Pasific" className="w-96 h-full"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg">Pasific Palace Hotel Batam</h2>
                            <p className="text-sm">IPTV & Internet Service, 155 Rooms<br/>
                            Wifi Internet, 155 room</p>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card lg:card-side bg-[#CFCFD2] bg-opacity-70 shadow-xl">
                        <figure><img src={Nagoya} alt="Nagoya" className="w-96 h-full"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg">Nagoya Hill Hotel</h2>
                            <p className="text-sm">IT Infrastructure, GPON Triple Play, 227 room<br/>
                            IPTV, from Head end to Smartv Application<br/>
                            IPBX, Integrate to Triple play<br/>
                            Data / LAN / Internet Integrated to Triple play<br/>
                            CCTV Integrate to Triple play<br/>
                            Project April 2013 - May 2015 </p>
                        </div>
                        </div>
                    </div>
                </div> 
            </div>
            </div>
        </>     
		
	);
};

export default Portfolioo;
