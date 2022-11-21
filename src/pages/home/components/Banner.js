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
    </>
		
	);
};

export default partOne;