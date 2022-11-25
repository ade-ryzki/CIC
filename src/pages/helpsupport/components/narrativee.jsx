import React from "react"
import HD from './../../../img/HD.png'

const narrativee =()=>{
    return (
        <>
        <div className="font-['rubik'] bg-base-200 my-10">
            <div className="text-center font-bold text-4xl my-10 ">
            <h1>BAGAIMANA KAMI BISA MEMBANTU ANDA?</h1>
            </div>  
            <br/>
            <br/>
        <div className="grid grid-col-2 md:grid-flow-col font-['rubik'] bg-base-200">
            <div className="m5">
            <img src={HD} alt='HD' className="w-96 h-72 opacity-90"/>
            </div>
            <div className="m-5  bg-[#FFBA33] bg-opacity-20 rounded-lg ">
                <div className=" text-justify font-['rubik']  text-2xl  p-5 ">
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