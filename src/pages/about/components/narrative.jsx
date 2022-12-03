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


