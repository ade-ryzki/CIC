import React from "react";
import map from '../../../img/map.png'

const partthree = () => {
	return (
        
    <>
        <>
        <div className="bg-base-200">
        <div className=" bg-gradient-to-r from-orange-400  font-['rubik'] rounded-xl mx-10 my-5 ">
            <div className="text-center font-bold text-4xl">
                <br/><h1>Map Location</h1>
            </div>
            <div className="text-center">
            <img src={map} className="w-full h-auto" alt="Tailwind CSS Carousel component" />
            </div>
        </div>
        </div>
        </>  
    </>
		
	);
};

export default partthree;