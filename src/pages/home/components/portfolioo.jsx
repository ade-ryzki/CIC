import React, { useEffect } from "react";
import Nagoya from'./../../../img/nagoya hill.jpg'
import Radison from './../../../img/radison.jpg'
import Haris from './../../../img/haris.jpg'
import Pasific from './../../../img/pasific.jpg'
import APJII from'./../../../img/APJII.jpeg'
import sosialisasi from './../../../img/sosialisasi.jpeg'
import { GetPortfolio } from "../../../redux/actions/Portfolio";
import { useDispatch, useSelector } from "react-redux";

const Portfolioo = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetPortfolio());
    },[]);

    const data = useSelector((state)=> state.portfolio)
    console.log(data.data, "test data manaaa");

	return (
        <>
            <div>
            <div className="bg-gradient-to-r from-white to-lime-400 font-['Rubik'] py-5 -3xl  rounded-tr-2xl md:rounded-tr-3xl  mr-5  ">
            <div className="text-center text-black font-bold text-4xl ">
                <h2 className="my-5">Portfolio</h2>
                </div>
               <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
               {data.data.map((portfolio, index) => { 
                // console.log(`${'http://localhost:4117/uploads'}/${portfolio.image}`,'whereeee')
                return(
                        <div className="carousel-item font-['Rubik']">
                                <div className="card w-96 bg-gradient-to-r from-lime-300 to-orange-200 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={`${'http://113.212.160.6/uploads/'}/${portfolio.image}`}
                                    alt="Shoes" 
                                    className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{portfolio.title}</h2>
                                    <p>{portfolio.description}</p>
                                </div>
                            </div>
                         </div>
                            )
                        })} 
     
                </div> 
            </div>
            </div>
        </>     
		
	);
};

export default Portfolioo;
