import React from "react";
import { Link } from "react-router-dom";
import Wifi from './../../../img/wifii.jpg'
import Iptv from './../../../img/iptv.jpg'
import Fiberoptic from './../../../img/fiberoptic.jpg' 
import Smr from './../../../img/smr.png'
import IC from './../../../img/image 46.png' 
import ICC from './../../../img/image 43.png'
import Hosting from './../../../img/hosting.jpg'

const internet = () => {
	return (
        <>
            <div className="mt-10">
            <div className="bg-gradient-to-r from-orange-500 via-slate-400 to-lime-500 font-['Rubik'] py-5 rounded-xl mx-5 my-5">
                <div className="text-center text-black font-bold text-4xl pb-3 ">
                <h2>Our Product</h2>
                </div>
                <div className="grid md:grid-flow-col h-[580px] font-['Rubik'] divide-x shadow-lg">
                    <div className=" bg-white px-3">
                        <div className=" text-center">
                            <div className="text-3xl text-black font-bold my-5">
                            <h1>CIC Pilihan Kita!</h1>
                            </div>
                            <div className="mb-5">
                            <p>
                                Pelayanan 24 Nonstop
                                <br /> Lihat Product sekarang !!!
                            </p>
                            </div>
                        </div>
                    {/* card */}
                    <div className="card w-96 bg-gradient-to-r from-white  to-lime-400 text-black my-3">
                        <div className="card-body my-3">
                        <div className="flex">
                            <img src={IC} alt="" />
                            <div className="text-left ">
                            <h2 className="font-bold text-xl">CIC INI APA YA !</h2>
                            <p>Katanya viral ini di Kepri dan Pekan baru</p>
                            </div>
                        </div>
                        </div>
                        <div className="card-body my-3">
                        <div className="flex">
                            <img src={ICC} alt="" />
                            <div className="text-left ">
                            <h2 className="font-bold text-xl">CIC YA!</h2>
                            <p>itu Productnya ada di depan kita</p>
                            </div>
                        </div>
                        </div>
                        <div className="card-body my-3">
                        <div className="flex">
                            <img src={IC} alt="" />
                            <div className="text-left ">
                            <h2 className="font-bold text-xl">OH IYAAA!</h2>
                            <p>kita liat yuk apa aja yang ada?</p>
                            </div>
                        </div>
                        </div>
                        <div className="card-body my-3">
                        <div className="flex">
                            <img src={ICC} alt="" />
                            <div className="text-left ">
                            <h2 className="font-bold text-xl">KUY CHAT DAN TANYA LANGSUNG!</h2>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* btn */}
                    <button className="bg-gradient-to-r from-white  to-orange-400 hover:from-white hover:to-lime-400  rounded-md h-20 w-96 font-semibold text-2xl ">
                        Chat sekarang
                    </button>
                    {/* Terms and Condition  */}
                    <div className="ml-24">
                    <div className="mx-2 text-black mt-5 mb-96">
                        <h1>Terms and Condition </h1>
                        <p> 1. You can only apply 1 coupon per day </p>
                        <p>2. It only for dine in </p>
                        <p>3. Buy 1 get 1 only for new user</p>
                        <p> 4. Should make member card to apply coupon</p>
                    </div>
                    </div>
                    </div>

                    {/* side */}
                    <div className=" bg-white ">
                    <div className="flex justify-around font-extrabold text-black text-lg md:text-3xl my-3">
                        <div>
                        <h3>Pilih & Hubungi Call Center Kami </h3>
                        </div>
                        
                    </div>
                    {/* card */}
                    <div className="">
                        <div className=" flex flex-wrap justify-center  ">
                            <div className="card w-96 h-96 bg-gradient-to-r from-white  to-lime-400 shadow-xl my-3 mx-3">
                                <figure className="px-10 pt-10">
                                    <img src={Wifi} alt="Wifi" className="rounded-badge" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title mb-3">IPTV + WIFI!</h2>
                                    <div className="card-actions">
                                    <Link to='/help&support'>
                                    <button className="bg-gradient-to-r from-white  to-amber-500 hover:from-white hover:to-orange-500 font-semibold text-lg rounded-md h-10 w-64 ">
                                        Chat & Beli
                                    </button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 h-96 bg-gradient-to-r from-white  to-lime-400 shadow-xl my-3 mx-3">
                                <figure className="px-10 pt-10">
                                    <img src={Iptv} alt="Iptv" className="rounded-badge" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title mb-3">IPTV!</h2>
                                    <div className="card-actions">
                                    <button className="bg-gradient-to-r from-white  to-amber-500 hover:from-white hover:to-orange-500 font-semibold text-lg rounded-md h-10 w-64 ">
                                        Chat & Beli
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 h-96 bg-gradient-to-r from-white  to-lime-400 shadow-xl my-3 mx-3">
                                <figure className="px-10 pt-10">
                                    <img src={Smr} alt="Smr" className="rounded-badge" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title mb-3">CIC SMART RESIDENCE!</h2>
                                    <div className="card-actions">
                                    <button className="bg-gradient-to-r from-white  to-amber-500 hover:from-white hover:to-orange-500 font-semibold text-lg rounded-md h-10 w-64 ">
                                        Chat & Beli
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 h-96 bg-gradient-to-r from-white  to-lime-400 shadow-xl my-3 mx-3">
                                <figure className="px-10 pt-10">
                                    <img src={Fiberoptic} alt="Fiberoptic" className="rounded-badge" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title mb-3">Fiber Optic Lastmile!</h2>
                                    <div className="card-actions">
                                    <button className="bg-gradient-to-r from-white  to-amber-500 hover:from-white hover:to-orange-500 font-semibold text-lg rounded-md h-10 w-64 ">
                                        Chat & Beli
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 h-96 bg-gradient-to-r from-white  to-lime-400 shadow-xl my-3 mx-3">
                                <figure className="px-10 pt-10">
                                    <img src={Hosting} alt="Shoes" className="rounded-badge" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title mb-3">IPTV + WIFI!</h2>
                                    <div className="card-actions">
                                    <button className="bg-gradient-to-r from-white  to-amber-500 hover:from-white hover:to-orange-500 font-semibold text-lg rounded-md h-10 w-64 ">
                                        Chat & Beli
                                    </button>
                                    </div>
                                </div>
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