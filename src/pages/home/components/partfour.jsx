import React from "react";
import cisco from './../../../img/cisco.svg'
import huawei from './../../../img/huawei.svg'
import lg from './../../../img/lg.png'
import optic from './../../../img/optic.jpg'
import iptv from'./../../../img/iptv.png'
import zte from'./../../../img/zte.png'

const partfour = () => {
	return (
        <>
            <div className="bg">
            <div className="bg-[#CFCFD2] bg-opacity-20 font-['Rubik'] py-5 rounded-xl mx-5 my-5">
                <div className="text-center text-black font-bold text-4xl ">
                <h2>Our Partner</h2>
                </div>
                <div className="flex flex-wrap justify-around mt-10  ">
                <div className="mx-5 my-5 item-center">
                    <img src={huawei} alt="" className="w-24" />
                </div>
                <div className="mx-5 my-5 item-center">
                <img src={cisco} alt="" className="w-24" />
                </div>
                <div className="mx-5 my-5 item-center">
                    <img src={lg} alt="" className="w-24"/>
                </div>
                <div className="mx-5 my-5 item-center">
                    <img src={optic} alt="" className="w-24 rounded-xl"/>
                </div>
                <div className="mx-5 my-5 item-center">
                    <img src={iptv} alt="" className="w-32"/>
                </div>
                <div className="mx-5 my-5 item-center">
                    <img src={zte} alt="" className="w-28"/>
                </div>
                </div>
            </div>
            </div>
        </>     
		
	);
};

export default partfour;

//<a href="https://api.whatsapp.com/send/?phone=62811275751545&amp;text=Halo+saya+ingin+bertanya&amp;type=phone_number"><img src={wa} alt=""/></a>