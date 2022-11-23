import React from "react";
import cisco from './../../../img/cisco.svg'
import wa from './../../../img/wa.svg'
import lg from './../../../img/lg.png'
import chat from './../../../img/chat.png'
const contact = () => {
	return (
        <>
            <div className="font-['Rubik']">
            <div className="bg-[#CFCFD2] bg-opacity-20 font-['Rubik'] py-5 rounded-xl mx-5 my-5">
                <div className="text-center text-black font-bold text-4xl ">
                    <h2>Contact Us</h2>
                </div>
                <div className="flex flex-wrap justify-around mt-10  ">
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-3" >
                            <div className="mx-5 my-5 item-center">
                                <img src={chat} alt="" className="w-24" />
                            </div>
                        </label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative bg-[#CFCFD2] bg-opacity-80">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">CHAT US </h3>
                                <div className="flex flex-wrap justify-around  py-4">
                                <div className="mx-5 my-5 item-center font-semibold text-center">
                                    <a href="https://api.whatsapp.com/send/?phone=6281270619933&amp;text=Halo+saya+ingin+bertanya+kepada+layanan+CIC&amp;type=phone_number"><img src={wa} alt="" className="w-24 justify-items-center"/></a>
                                    <h1 className="font-['Rubik'] font-semibold">CIC</h1>
                                </div>
                                <div className="mx-5 my-5 item-center text-center">
                                <a href="https://api.whatsapp.com/send/?phone=6282392679933&amp;text=Halo+saya+ingin+bertanya+kepada+layanan+HOMEMEDIA&amp;type=phone_number"><img src={wa} alt="" className="w-24 justify-center"/></a>
                                    <h1 className="font-['Rubik'] font-semibold">HOME MEDIA</h1>
                                </div>
                                </div>
                            </div>
                        </div>
                    <div className="mx-5 my-5 item-center">
                        <img src={cisco} alt="" className="w-24" />
                    </div>
                    <div className="mx-5 my-5 item-center">
                        <img src={lg} alt="" className="w-24"/>
                    </div>
                </div>
                
                
                
            </div>
            </div>
        </>     
		
	);
};

export default contact;

<a href="https://api.whatsapp.com/send/?phone=62811275751545&amp;text=Halo+saya+ingin+bertanya&amp;type=phone_number"><img src={wa} alt=""/></a>