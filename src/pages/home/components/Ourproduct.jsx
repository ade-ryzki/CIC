import React from "react";
import { Link } from "react-router-dom";
import Wifi from './../../../img/wifi.jpg'

const parttwo = () => {
	return (
        
    <>
        <div className="hero min-h-screen bg-base-200 font-['rubik']">
        <div className="hero-content flex-col lg:flex-row">
            <img src={Wifi} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
            <div>
            <h1 className="text-5xl font-bold">Menghubungkan Jaringan dan Andal!</h1>
            <p className="py-6">CIC merupakan perusahaan <a className="font-semibold">Internet Service Provider</a> yang menyediakan berbagai solusi IT lengkap seperti internet, IPTV, hosting, dan beberapa produk lainnya. Untuk mengetahui produk apa saja yang ada di CIC, silahkan klik tombol "Product"</p>
            <Link to='/product'>
            <button className="btn transition ease-in-out delay-150 bg-[#9ACD32] bg-opacity-70 hover:-translate-y-1  hover:bg-[#FFBA33] hover:bg-opacity-70 duration-300 rounded-2xl">Our Product</button>
            </Link>
            </div>
        </div>
        </div>
    </>
	);
};

export default parttwo;