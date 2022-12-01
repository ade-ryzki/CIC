import React from "react";
import tlp from './../../../img/tlp.png'
import wa from './../../../img/wa.svg'
import mail from './../../../img/mail.png'
import chat from './../../../img/chat.png'
import cicsupport from './../../../img/cicsupport.png'

const contact = () => {
	return (
        <>
            <div className="font-['Rubik']  ">
            <div className="bg-gradient-to-r from-slate-400  to-lime-400 font-['Rubik'] py-20 rounded-xl  shadow-lg">
                <div className="text-center text-black font-bold text-4xl ">
                    <h2>Contact Us</h2>
                </div>
                <div className="flex flex-wrap justify-around mt-10  ">
                        <label htmlFor="my-modal-3" >
                            <div className="mx-5 my-5 item-center">
                                <img src={chat} alt="" className="w-24"/>
                            </div>
                        </label>
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative bg-[#CFCFD2] bg-opacity-80">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="font-bold text-2xl">CHAT </h3>
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
                        <label htmlFor="MY-modal-01" >
                            <div className="mx-5 my-5 item-center">
                                <img src={tlp} alt="" className="w-24" />
                            </div>
                        </label>
                        <input type="checkbox" id="MY-modal-01" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative bg-[#CFCFD2] bg-opacity-80">
                                <label htmlFor="MY-modal-01" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-2xl font-bold">CALL</h3>
                                <div className="flex flex-wrap justify-around  py-4">
                                <div className="mx-5 my-5 item-center font-semibold text-center">
                                    <a href="tel:+62778429933" className="font-['Rubik'] font-semibold link-hover hover:text-blue-700 text-2xl">+62778429933</a>
                                    {/* <h1 className="font-['Rubik'] font-semibold my-5 text-2xl">CIC</h1> */}
                                </div>
                                </div>
                            </div>
                        </div>
                        <label htmlFor="MY-MODAL-2" >
                            <div className="mx-5 my-5 item-center">
                                <img src={mail} alt="" className="w-24" />
                            </div>
                        </label>
                        <input type="checkbox" id="MY-MODAL-2" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative bg-[#CFCFD2] bg-opacity-80">
                                <label htmlFor="MY-MODAL-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-2xl font-bold">MAIL</h3>
                                <div className="flex flex-wrap justify-around  py-4">
                                <div className="mx-5 my-5 item-center font-semibold text-center">
                                    <a href="mailto:helpdesk@cic.net.id" className="font-['Rubik'] font-semibold link-hover hover:text-blue-700 text-2xl">helpdesk@cic.net.id</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    <div className="mx-5 my-5 item-center">
                        <a href='https://play.google.com/store/apps/details?id=id.net.cic.cicsupport&hl=en_ZA&gl=US'><img src={cicsupport} alt="" className="w-24"/></a>
                    </div>
                </div>
            </div>
            </div>
        </>     
		
	);
};

export default contact;

