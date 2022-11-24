import React from "react";
import Nagoya from'./../../../img/nagoya hill.jpg'
import Radison from './../../../img/radison.jpg'
import Haris from './../../../img/haris.jpg'
import Pasific from './../../../img/pasific.jpg'
import APJII from'./../../../img/APJII.jpeg'
import sosialisasi from './../../../img/sosialisasi.jpeg'
import { Link } from 'react-router-dom';
const portfolioo = () => {
	return (
        <>
            <div>
            <div className="bg-[#9ACD32] bg-opacity-20 font-['Rubik'] py-5 rounded-xl mx-5 my-5">
            <div className="text-center text-black font-bold text-4xl ">
                <h2 className="my-5">Portfolio</h2>
                </div>
               <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
               <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
                    <figure><img src={APJII} alt="Nagoya" /></figure>
                    <div className="card-body my-4 mx-4">
                        <h2 className="card-title text-white">INTERNET EXPO 2022 APJII KEPRI</h2>
                        {/* <p className="text-white">If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-1" className="btn text-white bg-[#CFCFD2] bg-opacity-30">more...</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                        <label htmlFor="my-modal-1" className="modal cursor-pointer">
                        <label className="modal-box relative bg-[#CFCFD2] bg-opacity-90" htmlFor="">
                            <h3 className="text-lg font-bold">APJII KEPRI</h3>
                            <p className="py-4">Event APJII yang diadakan di One Mall Batam November 2022</p>
                        </label>
                        </label>                       
                        </div>
                    </div>
                    </div>
                </div> 
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
                    <figure><img src={sosialisasi} alt="Nagoya" /></figure>
                    <div className="card-body my-4 mx-4">
                        <h2 className="card-title text-white">SOSIALISASI CIC</h2>
                        {/* <p className="text-white">If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        <label htmlFor="my-modal-2" className="btn text-white bg-[#CFCFD2] bg-opacity-30">more...</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                        <label htmlFor="my-modal-2" className="modal cursor-pointer">
                        <label className="modal-box relative bg-[#CFCFD2] bg-opacity-90" htmlFor="">
                            <h3 className="text-lg font-bold">Sosialisasi</h3>
                            <p className="py-4">Melakukan pertemuan & sosialisasi tentang CIC dengan warga di Punggur</p>
                        </label>
                        </label> 
                        </div>
                    </div>
                    </div>
                </div> 
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
                    <figure><img src={Radison} alt="Radison" /></figure>
                    <div className="card-body my-4 mx-4 ">
                        <h2 className="card-title text-white">Radison Hotel Batam</h2>
                        {/* <p className="text-white">If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        <label htmlFor="my-modal-3" className="btn text-white bg-[#CFCFD2] bg-opacity-30">more...</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <label htmlFor="my-modal-3" className="modal cursor-pointer">
                        <label className="modal-box relative bg-[#CFCFD2] bg-opacity-90" htmlFor="">
                            <h3 className="text-lg font-bold">4 stars</h3>
                            <p className="py-4">Guest & BOH Backbone<br/>
                                                    Digital TV Headend, 55 Channels<br/>
                                                    Wifi Internet, 246 rooms, 51 Public area<br/>
                                                    Some of CCTV Project<br/>
                                                    Project February 2016 - October 2016</p>
                        </label>
                        </label> 
                        </div>
                    </div>
                    </div>
                </div> 
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
                    <figure><img src={Haris} alt="Haris" /></figure>
                    <div className="card-body my-4 mx-4">
                        <h2 className="card-title text-white">Haris Resort Barelang Batam</h2>
                        {/* <p className="text-white">If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        <label htmlFor="my-modal-4" className="btn text-white bg-[#CFCFD2] bg-opacity-30">more...</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <label htmlFor="my-modal-4" className="modal cursor-pointer">
                        <label className="modal-box relative bg-[#CFCFD2] bg-opacity-90" htmlFor="">
                            <h3 className="text-lg font-bold">4 Stars</h3>
                            <p className="py-4">Triple Play, 180 Rooms<br/>
                                                    Guest & BOH Backbone<br/>
                                                    IPTV Headend to LG Smartv Hospitality<br/>
                                                    CCTV Integration<br/>
                                                    IPBX Integration<br/>
                                                    Project Start working from April 2017 - Januari 2018</p>
                        </label>
                        </label> 
                        </div>
                    </div>
                    </div>
                </div> 
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
                    <figure><img src={Pasific} alt="Pasific" /></figure>
                    <div className="card-body my-4 mx-4">
                        <h2 className="card-title text-white">Pasific Palace Hotel Batam</h2>
                        {/* <p className="text-white">If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        <label htmlFor="my-modal-5" className="btn text-white bg-[#CFCFD2] bg-opacity-30">more...</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <label htmlFor="my-modal-5" className="modal cursor-pointer">
                        <label className="modal-box relative bg-[#CFCFD2] bg-opacity-90" htmlFor="">
                            <h3 className="text-lg font-bold">3 Stars</h3>
                            <p className="py-4">IPTV & Internet Service, 155 Rooms<br/>
                                                    Wifi Internet, 155 room</p>
                        </label>
                        </label> 
                        </div>
                    </div>
                    </div>
                </div> 
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
                    <figure><img src={Nagoya} alt="Nagoya" /></figure>
                    <div className="card-body my-4 mx-4">
                        <h2 className="card-title text-white">Nagoya Hill Hotel</h2>
                        {/* <p className="text-white">If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        <label htmlFor="my-modal-6" className="btn text-white bg-[#CFCFD2] bg-opacity-30">more...</label>
                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <label htmlFor="my-modal-6" className="modal cursor-pointer">
                        <label className="modal-box relative bg-[#CFCFD2] bg-opacity-90" htmlFor="">
                            <h3 className="text-lg font-bold">4 Stars</h3>
                            <p className="py-4">IT Infrastructure, GPON Triple Play, 227 room<br/>
                                                    IPTV, from Head end to Smartv Application<br/>
                                                    IPBX, Integrate to Triple play<br/>
                                                    Data / LAN / Internet Integrated to Triple play<br/>
                                                    CCTV Integrate to Triple play<br/>
                                                    Project April 2013 - May 2015 </p>
                        </label>
                        </label> 
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
            </div>
            </div>
        </>     
		
	);
};

export default portfolioo;

//<a href="https://api.whatsapp.com/send/?phone=62811275751545&amp;text=Halo+saya+ingin+bertanya&amp;type=phone_number"><img src={wa} alt=""/></a>