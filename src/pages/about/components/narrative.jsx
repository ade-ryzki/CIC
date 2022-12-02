import React from "react"
import AB from './../../../img/about01.png'
import AB3 from './../../../img/about03.png'

const narrative =()=>{
    return (
        <>
        <div>
            <div className="grid grid-col-2 md:grid-flow-col font-['Rubik'] my-5">
                <div className="bg-white text-center">
                    <div className=" text-center">
                        <img src={AB} alt="teamwork" />
                    </div>
                </div>
                <div className="mx-5 my-14 text-center md:text-left">
                    <div className="mb-5 font-bold text-4xl">
                        <h1 className="font-extrabold text-transparent text-lg md:text-4xl bg-clip-text bg-gradient-to-r from-orange-500 via-slate-400 to-lime-500">
                            Layanan 24 Jam! 
                        </h1 >
                    </div>
                    <div>
                        <p className="text-xl text-justify font-['Rubik'] font-bold">
                        CIC telah berupaya memberikan dampak positif yang signifikan 
                        bagi pelanggan dan di beberapa daerah.Kami berkomitmen untuk mendukung dan menyediakan kepada 
                        pelanggan dengan melengkapi keseluruhan operasi dan jaringan di Internet dan jaringan kerja.
                        Dalam mewujudkan tujuan terserbut,kami menyediakan segala solusi dan layanan yang dibutuhkan dalam 
                        mengembangkan perusahaan di bidang IT sekaligus menjadi mitra yang dapat membantu mengembangkan bisnis 
                        para pengguna layanan CIC</p>
                    </div>
                </div>
            </div>
        <br/>
            <div
                className="w-full object-cover"
                style={{
                backgroundImage:`url(./images/wallpro.png)`,
                }}
                >
                <div className="text-center md:text-right justify-center mx-2">
                <br/><br/><br/>
                    <h1 className="mt-5 font-extrabold text-transparent text-lg md:text-5xl bg-clip-text bg-gradient-to-r from-black via-orange-600 to-black">
                        Kenyaman Pelanggan <br/>Diutamakan!
                    </h1>
                    <br/><br/>
                    <p className="text-lg  md:text-2xl font-bold text-black ">Sebagai perusahaan ISP (Internet Service Provider)<br/> di Batam,
                    kami telah melayani ribuan pelanggan<br/> dari Perumahan, Perhotelan, Perkantoran <br/>dan beberapa perusahaan lainnya sejak 2009.</p><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        <br/>
            <div className="grid grid-col-2 md:grid-flow-col font-['Rubik'] my-5">
                <div className="bg-white text-center">
                    <div className=" text-center">
                        <img src={AB3} alt="teamwork" />
                    </div>
                </div>
                <div className="mx-5 my-14">
                    <div className="mb-5 font-bold text-4xl text-center md:text-left">
                        <h1 className="font-extrabold text-transparent text-lg md:text-4xl bg-clip-text bg-gradient-to-r from-orange-500 via-slate-400 to-lime-500">
                            Komitmen dan Kualitas! 
                        </h1 >
                    </div>
                    <div>
                        <p className="text-xl text-justify font-bold">
                        Tim CIC berterima kasih kepada para pelanggan yang telah memberikan kepercayaan kepada kami. Kami berkomitmen 
                        untuk memberikan yang terbaik setiap waktu, menjadi mitra tepercaya , dan saling tertkait. Kami akan terus 
                        meningkatkan kemampuan kami untuk memberikan proposisi yang menarik dan pengalaman layanan terbaik untuk memenuhi 
                        kebutuhan yang terus berkembang. </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default narrative


{/* <div className="grid grid-col-2 md:grid-flow-col font-['rubik'] bg-base-200 my-10">
<div className="font-['rubik'] bg-[#9ACD32] bg-opacity-10 shadow-lg">
    <div className="text-center font-bold text-4xl my-8 ">
        <p><br/>Kenapa Memilih CIC ?</p>
    </div>
    <div class="">
    <div className="my-2 ">
        <div className="alert alert-success  shadow-lg bg-[#9ACD32] bg-opacity-60 justify-center py-8 text-lg font-semibold">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Memiliki Dual backbone ke jaringan internasional demi menjaga Kualitas tetap baik</span>
            </div>
        </div>
    </div>
    <div className="my-2 ">
        <div className="alert alert-success shadow-lg bg-[#9ACD32] bg-opacity-60 justify-center py-8 text-lg font-semibold">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span  className="text-left ">UPS dan Backup Generator memastikan jaringan anda berjalan dengan baik </span>
            </div>
        </div>
    </div>
    <div className="my-2 ">
        <div className="alert alert-success shadow-lg bg-[#CFCFD2] bg-opacity-60 justify-center py-8 text-lg font-semibold">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Wireless & Fiber Optic yang terkoneksi ke Tower POP (Point Of Presence) sehingga layanan tetap stabil</span>
            </div>
        </div>
    </div>
    <div className="my-2 ">
        <div className="alert alert-success shadow-lg bg-[#CFCFD2] bg-opacity-60 justify-center py-8 text-lg font-semibold">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Terkoneksi ke IIX Indonesia Internet Exchange</span>
            </div>
        </div>
    </div>
    <div className="my-2 ">
        <div className="alert alert-success shadow-lg bg-[#FFBA33] bg-opacity-60  justify-center py-8 text-lg font-semibold">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Pemantauan & Manajemen Jaringan 24 Jam</span>
            </div>
        </div>
    </div>
    <div className="my-2 ">
        <div className="alert alert-success shadow-lg bg-[#FFBA33] bg-opacity-60  justify-center py-8 text-lg font-semibold">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Terkoneksi KE IX Internet Exchange</span>
            </div>
        </div>
    </div>
    </div>
    <div className="my-2 ">
        <div className="alert alert-success shadow-lg bg-[#CFCFD2] bg-opacity-60 justify-center py-8 text-lg font-semibold">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Layanan Teknis 24 jam</span>
            </div>
        </div>
    </div>
    <br/>
</div>
<div className="mx-5 w-full bg-gradient-to-r from-white  to-slate-400 ">
    <div className=" text-justify font-['rubik']  text-2xl mr-5 p-5 ">
        <br/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <br/>
        <p className="">
            Lebih dari satu dekade, CIC telah berupaya memberikan dampak positif yang signifikan 
            bagi pelanggan dan di beberapa daerah.Kami berkomitmen untuk mendukung dan menyediakan kepada 
            pelanggan dengan melengkapi keseluruhan operasi dan jaringan di Internet dan jaringan kerja.
            Dalam mewujudkan tujuan terserbut,kami menyediakan segala solusi dan layanan yang dibutuhkan dalam 
            mengembangkan perusahaan di bidang IT sekaligus menjadi mitra yang dapat membantu mengembangkan bisnis 
            para pengguna layanan CIC
        </p>
        <br/>
        <p>
            Sebagai perusahaan ISP (Internet Service Provider) di Batam, kami telah melayani ribuan pelanggan 
            dari Perumahan,<br/> Perhotelan, Perkantoran dan beberapa perusahaan lainnya sejak 2009.
        </p>
    <br/>
        <p>
        Tim CIC berterima kasih kepada para pelanggan yang telah memberikan kepercayaan kepada kami. Kami berkomitmen 
        untuk<br/> memberikan yang terbaik setiap waktu, menjadi mitra tepercaya , dan saling tertkait. Kami akan terus 
        meningkatkan<br/> kemampuan kami untuk memberikan proposisi yang menarik dan pengalaman layanan terbaik untuk memenuhi 
        kebutuhan <br/>yang terus berkembang. 
        </p>
    </div>
</div>
</div>  */}