import React from "react";
import { Link } from "react-router-dom";
import layout3 from './../../../img/layout3.png'
import layout1 from './../../../img/layout1.png'
import layout2 from './../../../img/layout2.png'

const parttwo = () => {
	return (
        
    <>
        {/* section 1 */}
        <div className="grid grid-col-2 md:grid-flow-col font-['Rubik'] mt-10 my-5">
            <div className="bg-white text-black ">
                <div className="mx-5 my-14">
                    <div className="mb-5 font-bold text-4xl">
                        <h1>
                           Ngegaming Tampa Mikir Habis Kuota! 
                        </h1 >
                    </div>
                    <div>
                        <p className="text-xl">
                            Tingkatkan kemampuan dan jadi Pro Player atau Gamer Indonesia<br/><br/>
                            <a className="font-semibold">CIC Gaming</a> memiliki bandwidth hingga 100 Mbps dengan Ip Public.<br/>
                            Nikmati sensai terbaik tampa Lag! dan jadilah pemenang!
                        </p>
                    </div>
                    <div className="bg-white text-center mt-5">
                        <Link to='/help&support'>
                        <button className="bg-gradient-to-r from-white  to-orange-400 hover:from-white hover:to-lime-400  rounded-md py-3 px-3 font-semibold">Beli sekarang</button>    
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white text-center">
                <div className=" text-center">
                    <img src={layout2} alt="teamwork" />
                </div>
            </div>
        </div>
        {/* section 2 */}
        <div className="grid grid-col-2 md:grid-flow-col font-['Rubik'] my-5">
            <div className="bg-white text-center">
                <div className=" text-center">
                    <img src={layout1} alt="teamwork" />
                </div>
            </div>
            <div className="mx-5 my-14">
                 <div className="mb-5 font-bold text-4xl">
                    <h1>
                        CIC Unlimited Dan Layanan 24 Jam! 
                    </h1 >
                </div>
                <div>
                       <p className="text-xl">
                           Di Era digital aktivitas sehari-hari semua butuh Internet, seperti meeting,<br/> Belajar, streaming dan Bermain Game <br/><br/>
                           <a className="font-semibold">CIC Home</a> Hadir dengan bandwidth 10 hingga 100 Mbps serta <br/>Unlimited kuota. Kamu bisa lakukan aktivitas 24 Jam tanpa<br/> khawatir kehabisan kuota
                       </p>
                 </div>
                <div className="bg-white text-center mt-5">
                     <Link to='/help&support'>
                     <button className="bg-gradient-to-r from-white  to-orange-400 hover:from-white hover:to-lime-400  rounded-md py-3 px-3 font-semibold">Beli sekarang</button>    
                     </Link>
                 </div>
            </div>
        </div>
        {/* section 3 */}
        <div className="grid grid-col-2 md:grid-flow-col font-['Rubik'] my-5">
        <div className="mx-5 my-14">
                 <div className="mb-5 font-bold text-4xl">
                    <h1>
                        Hiburan Bersama Keluarga! 
                    </h1 >
                </div>
                <div>
                       <p className="text-xl">
                           Bangun hubungan harmonis dan momen berkesan dengan<br/> Internet dan Program TV berkualitas <br/><br/>
                           <a className="font-semibold">CIC Home Combo IPTV</a> dengan resolusi gambar 4K terbaik dan <br/>bandwidth mulai dari 10 Mbps. Dapatkan konten hiburan berkualitas<br/>
                            yang dapat dinikmati kapan saja.
                       </p>
                 </div>
                <div className="bg-white text-center mt-5">
                     <Link to='/help&support'>
                     <button className="bg-gradient-to-r from-white  to-orange-400 hover:from-white hover:to-lime-400  rounded-md py-3 px-3 font-semibold">Beli sekarang</button>    
                     </Link>
                 </div>
            </div>
            <div className="bg-white text-center">
                <div className=" text-center">
                    <img src={layout3} alt="teamwork w-full" />
                </div>
            </div>
        </div>
    </>
	);
};

export default parttwo;