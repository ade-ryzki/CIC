// import React from "react";
// import APJII from'./../../img/APJII.jpeg'
// import Nagoya from'./../../img/nagoya hill.jpg'
// import Radison from './../../img/radison.jpg'
// import Haris from './../../img/haris.jpg'
// import Pasific from './../../img/pasific.jpg'
// import sosialisasi from './../../img/sosialisasi.jpeg'
// import Navbar from './../../components/navbar'
// import { Link } from "react-router-dom";

// const portfolio = () => {
// 	return (
//         <>
//         <Navbar/>
//             <div className="">
//             <div className="bg-[#CFCFD2] bg-opacity-20 font-['Rubik'] py-5 rounded-xl mx-5 my-5">
//                 <div className="text-center text-black font-bold text-4xl ">
//                 <h2>More portfolio</h2>
//                 </div>
//                 <div className="flex flex-wrap justify-around mt-10  ">
//                 <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
//                         <figure><img src={sosialisasi} alt="Radison" /></figure>
//                         <div className="card-body my-4 mx-4 ">
//                             <h2 className="card-title text-white">SOSIALISASI CIC DENGAN WARGA DI PUNGGUR</h2>
//                             {/* <p className="text-white">If a dog chews shoes whose shoes does he choose?</p> */}
//                             <div className="card-actions justify-end">
//                             <label htmlFor="my-modal-0" className="btn text-white bg-[#CFCFD2] bg-opacity-30">open </label>
//                             <input type="checkbox" id="my-modal-0" className="modal-toggle" />
//                             <div className="modal">
//                             <div className="modal-box relative bg-[#CFCFD2] bg-opacity-90">
//                                 <label htmlFor="my-modal-0" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                                 <h3 className="text-lg font-bold">SOSIALISSASI</h3>
//                                 <p className="py-4">Melakukan pertemuan & sosialisasi tentang CIC dengan warga di Punggur</p>
//                             </div>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
//                         <figure><img src={APJII} alt="Radison" /></figure>
//                         <div className="card-body my-4 mx-4 ">
//                             <h2 className="card-title text-white">INTERNET EXPO 2022 APJII KEPRI</h2>
//                             {/* <p className="text-white">If a dog chews shoes whose shoes does he choose?</p> */}
//                             <div className="card-actions justify-end">
//                             <label htmlFor="my-modal-0" className="btn text-white bg-[#CFCFD2] bg-opacity-30">open </label>
//                             <input type="checkbox" id="my-modal-0" className="modal-toggle" />
//                             <div className="modal">
//                             <div className="modal-box relative bg-[#CFCFD2] bg-opacity-80">
//                                 <label htmlFor="my-modal-0" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                                 <h3 className="text-lg font-bold">APJII KEPRI</h3>
//                                 <p className="py-4">Event APJII yang diadakan di One Mall Batam November 2022</p>
//                             </div>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
//                         <figure><img src={Radison} alt="Radison" /></figure>
//                         <div className="card-body my-4 mx-4 ">
//                             <h2 className="card-title text-white">Radison Hotel Batam</h2>
//                             {/* <p className="text-white">If a dog chews shoes whose shoes does he choose?</p> */}
//                             <div className="card-actions justify-end">
//                             <label htmlFor="my-modal-1" className="btn text-white bg-[#CFCFD2] bg-opacity-30">open </label>
//                             <input type="checkbox" id="my-modal-1" className="modal-toggle" />
//                             <div className="modal">
//                             <div className="modal-box relative bg-[#CFCFD2] bg-opacity-80">
//                                 <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                                 <h3 className="text-lg font-bold">Bintang 4</h3>
//                                 <p className="py-4">Guest & BOH Backbone<br/>
//                                                     Digital TV Headend, 55 Channels<br/>
//                                                     Wifi Internet, 246 rooms, 51 Public area<br/>
//                                                     Some of CCTV Project<br/>
//                                                     Project February 2016 - October 2016</p>
//                             </div>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
//                         <figure><img src={Haris} alt="Radison" /></figure>
//                         <div className="card-body my-4 mx-4 ">
//                             <h2 className="card-title text-white">Haris Resort Barelang Batam</h2>
//                             {/* <p className="text-white">If a dog chews shoes whose shoes does he choose?</p> */}
//                             <div className="card-actions justify-end">
//                             <label htmlFor="my-modal-2" className="btn text-white bg-[#CFCFD2] bg-opacity-30">open </label>
//                             <input type="checkbox" id="my-modal-2" className="modal-toggle" />
//                             <div className="modal">
//                             <div className="modal-box relative bg-[#CFCFD2] bg-opacity-80">
//                                 <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                                 <h3 className="text-lg font-bold">Bintang 4</h3>
//                                 <p className="py-4">Triple Play, 180 Rooms<br/>
//                                                     Guest & BOH Backbone<br/>
//                                                     IPTV Headend to LG Smartv Hospitality<br/>
//                                                     CCTV Integration<br/>
//                                                     IPBX Integration<br/>
//                                                     Project Start working from April 2017 - Januari 2018</p>
//                             </div>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
//                         <figure><img src={Pasific} alt="Radison" /></figure>
//                         <div className="card-body my-4 mx-4 ">
//                             <h2 className="card-title text-white">Pasific Palace Hotel Batam</h2>
//                             {/* <p className="text-white">If a dog chews shoes whose shoes does he choose?</p> */}
//                             <div className="card-actions justify-end">
//                             <label htmlFor="my-modal-3" className="btn text-white bg-[#CFCFD2] bg-opacity-30">open </label>
//                             <input type="checkbox" id="my-modal-3" className="modal-toggle" />
//                             <div className="modal">
//                             <div className="modal-box relative bg-[#CFCFD2] bg-opacity-80">
//                                 <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                                 <h3 className="text-lg font-bold">Bintang 3</h3>
//                                 <p className="py-4">IPTV & Internet Service, 155 Rooms<br/>
//                                                     Wifi Internet, 155 room</p>
//                             </div>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card w-96 bg-base-100 shadow-xl image-full my-3 mx-3">
//                         <figure><img src={Nagoya} alt="Radison" /></figure>
//                         <div className="card-body my-4 mx-4 ">
//                             <h2 className="card-title text-white">Nagoya Hill Hotel</h2>
//                             {/* <p className="text-white">If a dog chews shoes whose shoes does he choose?</p> */}
//                             <div className="card-actions justify-end">
//                             <label htmlFor="my-modal-4" className="btn text-white bg-[#CFCFD2] bg-opacity-30">open </label>
//                             <input type="checkbox" id="my-modal-4" className="modal-toggle" />
//                             <div className="modal">
//                             <div className="modal-box relative bg-[#CFCFD2] bg-opacity-80">
//                                 <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                                 <h3 className="text-lg font-bold">Bintang 4</h3>
//                                 <p className="py-4">IT Infrastructure, GPON Triple Play, 227 room<br/>
//                                                     IPTV, from Head end to Smartv Application<br/>
//                                                     IPBX, Integrate to Triple play<br/>
//                                                     Data / LAN / Internet Integrated to Triple play<br/>
//                                                     CCTV Integrate to Triple play<br/>
//                                                     Project April 2013 - May 2015 </p>
//                             </div>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//             </div>
//             <div className="text-center justify-center ">
//             <Link to='/'><button className="btn btn-circle bg-[#CFCFD2] bg-opacity-80 my-10">X</button></Link>
//             </div>
//             </div>
//         </>     
		
// 	);
// };

// export default portfolio;

// //<a href="https://api.whatsapp.com/send/?phone=62811275751545&amp;text=Halo+saya+ingin+bertanya&amp;type=phone_number"><img src={wa} alt=""/></a>