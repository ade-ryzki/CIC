import React from "react";
import banner from '../../../img/baner.jpg'
import banner2 from '../../../img/baner2.jpg'
import banner3 from '../../../img/baner3.jpg'

const partOne = () => {
	return (
        
    <>
    <div>
        <div className="w-full carousel rounded-sm ">
            <div className="carousel-item w-full h-96">
                <img src={banner} className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full h-96">
            <img src={banner3} className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full h-96">
            <img src={banner2} className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
        </div>
    </div>
   {/* <div className="carousel w-full h-1/2">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={banner} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-slate-600 ">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-slate-600">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <img src={banner3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-slate-600">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-slate-600">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src={banner2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-slate-600">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-slate-600">❯</a>
            </div>
        </div>
    </div> */}
    </>
		
	);
};

export default partOne;