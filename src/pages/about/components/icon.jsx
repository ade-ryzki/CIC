import people from './../../../img/partners.png'
import team from './../../../img/teamwork.png'
import mc from './../../../img/call-center.png'

const icon = () => {
	return (
        <>
            <div className="bg">
            <div className=" font-['Rubik'] py-5 rounded-xl mx-5 my-5">
                
                <div className="flex flex-wrap justify-around mt-10  ">
                <div className="mx-5 my-5 py-10 item-center">
                    <img src={people} alt="" className="w-36" />
                    <h1 className='mt-3 ml-7 text-xl font-semibold'>Our People</h1>
                </div>
                <div className="mx-5 my-5  py-10 item-center">
                    <img src={team} alt="" className="w-36" />
                    <h1 className='mt-3 ml-7 text-xl font-semibold'>Our Commitments</h1>
                </div>
                <div className="mx-5 my-5  py-10 item-center">
                    <img src={mc} alt="" className="w-36"/>
                    <h1 className='mt-3 ml-7 text-xl font-semibold'>Media centre</h1>
                </div>
               
                </div>
            </div>
            </div>
        </>     
		
	);
};

export default icon;