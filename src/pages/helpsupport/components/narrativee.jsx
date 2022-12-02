import React from "react"
import HD from './../../../img/HDD.png'

const narrativee =()=>{
    return (
        <>
        <div className="font-['rubik'] bg-base-200 my-10">
            <div className="text-center  my-10 ">
            <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-orange-500  to-lime-500">BAGAIMANA KAMI BISA MEMBANTU ANDA?</h1>
            </div>  
            <br/>
            <br/>
        <div className="grid grid-col-2 md:grid-flow-col font-['rubik'] bg-base-200">
            <div className="">
            <img src={HD} alt='HD' className="w-full  opacity-90"/>
            </div>
            <div className="mx-5 w-full bg-gradient-to-r from-white  to-lime-400 ">
                <div className=" text-justify font-['rubik']  text-2xl mr-5 p-5 ">
                    <br/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p className="">
                        Pelanggan yang terhormat, <br/> <br/>Demi kenyamanan anda dalam menggunakan produk dari kami,kami dari pihak penyedia layanan selalu melakukan yang terbaik.
                        Jika pelanggan setia kami mengalami kesulitan dalam penggunaan layanan atau bagi yang mau berlangganan, anda dapat menghubungi kami dengan <a className="font-semibold">beberapa fitur yang disediakan dibawah ini.</a> 
                    </p>
                </div>
            </div>
        </div>  
        
        </div>
        </>
    )
}

export default narrativee