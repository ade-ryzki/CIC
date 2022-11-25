import React from "react";
import { Link } from "react-router-dom";
import Wifi from './../../../img/wifii.jpg'
import Iptv from './../../../img/iptv.jpg'
import Fiberoptic from './../../../img/fiberoptic.jpg' 
import Smr from './../../../img/smr.png'
import Hosting from './../../../img/hosting.jpg' 

const internet = () => {
	return (
        <>
            <div className="mt-10">
            <div className="bg-[#FFBA33] bg-opacity-20 font-['Rubik'] py-5 rounded-xl mx-5 my-5">
                <div className="text-center text-black font-bold text-4xl ">
                <h2>Our Product</h2>
                </div>
                <div className="flex flex-wrap justify-around">
                    <div className="flex flex-wrap justify-around mt-10  ">
                        <div className="card lg:card-side bg-[#9ACD32] bg-opacity-20  shadow-xl">
                            <figure><img src={Wifi} alt="Wifi" className="w-48 h-full"/></figure>
                            <div className="card-body  text-sm">
                                <h2 className="card-title">Internet!</h2>
                                    <ul type='square'>
                                        <li>Dedicated or Broadband </li>
                                        <li>Network 24/7 monitoring.</li>
                                        <li>Downtime/Uptime Graph</li>
                                        <li>Certified Network Engineer.</li>
                                        <li>Fiber Optic Backbone.</li>
                                        <li>Data Center with Power Backup.</li>
                                    </ul>
                                    <br/>
                                <div className="card-actions justify-end">
                                <Link to='/help&support'><button className="btn btn-primary bg-[#CFCFD2] bg-opacity-70">Call / Chat </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-around mt-10  ">
                        <div className="card lg:card-side bg-[#9ACD32] bg-opacity-20  shadow-xl">
                            <figure><img src={Iptv} alt="Iptv" className="w-48 h-full"/></figure>
                            <div className="card-body  text-sm">
                                <h2 className="card-title">IPTV!</h2>
                                    <ul type='square'>
                                        <li>Unlimited Bandwidth</li>
                                        <li>Koneksi OpenIX Bersama 1GB</li>
                                        <li>Koneksi Internasional Bersama 100 MB</li>
                                        <li>Terletak di IDC Jakarta</li>
                                        <li>Dukungan Pusat Data Sisco</li>
                                    </ul>
                                    <br/>
                                    <br/>
                                <div className="card-actions justify-end">
                                <Link to='/help&support'><button className="btn btn-primary bg-[#CFCFD2] bg-opacity-70">Call / Chat </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-around mt-10  ">
                        <div className="card lg:card-side bg-[#9ACD32] bg-opacity-20  shadow-xl">
                            <figure><img src={Fiberoptic} alt="Fiberoptic" className="w-48 h-full"/></figure>
                            <div className="card-body  text-sm">
                                <h2 className="card-title">Fiber Optic Last Mile!</h2>
                                <h3>Cakupan Layanan FO di <br/>wilayah Batam sekitar Daerah</h3>
                                    <ul type='square'>
                                        <li>Nagoya</li>
                                        <li>Pusat Batam</li>
                                        <li>Tiban</li>
                                        <li>Bati Aji</li>
                                        <li>Nongsa</li>
                                    </ul>
                                <div className="card-actions justify-end">
                                <Link to='/help&support'><button className="btn btn-primary bg-[#CFCFD2] bg-opacity-70">Call / Chat </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-around mt-10  ">
                        <div className="card lg:card-side bg-[#9ACD32] bg-opacity-20  shadow-xl">
                            <figure><img src={Smr} alt="Smr" className="w-48 h-full"/></figure>
                            <div className="card-body  text-sm">
                                <h2 className="card-title">Cic Smart Residence!</h2>
                                    <ul type='square'>
                                        <li>Integrated Barier Gate</li>
                                        <li>CCTV HD Resolution</li>
                                        <li>iResidence</li>
                                        <li>Panic Button</li>
                                    </ul>
                                <div className="card-actions justify-end">
                                <Link to='/help&support'><button className="btn btn-primary bg-[#CFCFD2] bg-opacity-70">Call / Chat </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-around mt-10  ">
                        <div className="card lg:card-side bg-[#9ACD32] bg-opacity-20  shadow-xl">
                            <figure><img src={Hosting} alt="Hosting" className="w-48 h-full"/></figure>
                            <div className="card-body  text-sm">
                                <h2 className="card-title">Hosting!</h2>
                                    <ul type='square'>
                                        <li>Unlimited Bandwidth</li>
                                        <li>Koneksi OpenIX Bersama 1GB</li>
                                        <li>Koneksi Internasional Bersama 100 MB</li>
                                        <li>Terletak di IDC Jakarta</li>
                                        <li>Dukungan Pusat Data Sisco</li>
                                    </ul>
                                <div className="card-actions justify-end">
                                <Link to='/help&support'><button className="btn btn-primary bg-[#CFCFD2] bg-opacity-70">Call / Chat </button></Link>
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

export default internet;

//<a href="https://api.whatsapp.com/send/?phone=62811275751545&amp;text=Halo+saya+ingin+bertanya&amp;type=phone_number"><img src={wa} alt=""/></a>