import {
    GoogleMap,
    LoadScript,
    Marker, // Import Marker
  } from "@react-google-maps/api";
import tlp from './../../../img/tlp.png'
import wa from './../../../img/wa.svg'
import mail from './../../../img/mail.png'
import chat from './../../../img/chat.png'
import cicsupport from './../../../img/cicsupport.png'
  
  function Maps() {
  
    // Atur LongLat Focus map disini saya mengatur LongLat yang mengarah ke Jakarta
    const center = {
        lat: 1.1533874199001755,
        lng: 104.0047102910837,
    };

    
    // ContainerStyle Berfungsi Untuk Mengatur StyleContainer Untuk google maps
    const containerStyle = {
      width: '500px',
      height: '500px'
    };

    return (
      <>
        <div className="font-['Rubik'] my-10 ">
            
            <div className=" bg-gradient-to-r from-white  to-lime-400 font-['Rubik'] py-20   shadow-md">
            <div className="font-['Rubik']  ">
                {/* our contact */}
                <div className="bg-gradient-to-r mx-10">
                    <div className="text-center text-black font-bold text-4xl ">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="flex flex-wrap justify-center mx-10  ">
                            <label htmlFor="my-modal-3" >
                                <div className="mx-5 my-5 item-center">
                                    <img src={chat} alt="" className="w-16"/>
                                </div>
                            </label>
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative bg-[#CFCFD2] bg-opacity-80">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="font-bold text-2xl">CHAT </h3>
                                    <div className="flex flex-wrap justify-around  py-4">
                                    <div className="mx-5 my-5 item-center font-semibold text-center">
                                        <a href="https://api.whatsapp.com/send/?phone=6281270619933&amp;text=Halo+saya+ingin+bertanya+kepada+layanan+CIC&amp;type=phone_number"><img src={wa} alt="" className="w-16 justify-items-center"/></a>
                                        <h1 className="font-['Rubik'] font-semibold">CIC</h1>
                                    </div>
                                    <div className="mx-5 my-5 item-center text-center">
                                    <a href="https://api.whatsapp.com/send/?phone=6282392679933&amp;text=Halo+saya+ingin+bertanya+kepada+layanan+HOMEMEDIA&amp;type=phone_number"><img src={wa} alt="" className="w-16 justify-center"/></a>
                                        <h1 className="font-['Rubik'] font-semibold">HOME MEDIA</h1>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <label htmlFor="MY-modal-01" >
                                <div className="mx-5 my-5 item-center">
                                    <img src={tlp} alt="" className="w-16" />
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
                                    <img src={mail} alt="" className="w-16" />
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
                            <a href='https://play.google.com/store/apps/details?id=id.net.cic.cicsupport&hl=en_ZA&gl=US'><img src={cicsupport} alt="" className="w-16"/></a>
                        </div>
                    </div>
                </div>
                {/* Map */}
                </div>
                <div className="text-center text-black font-bold text-4xl mt-20 ">
                    <h2>Office Location</h2>
                </div>
                <div className="flex flex-wrap justify-center mt-10  ">
                    <div className=" bg-[#CFCFD2] bg-opacity-40 rounded-md shadow-lg ">
                        <div className="m-3">
                        <LoadScript googleMapsApiKey={'AIzaSyBs6yGE8J7HTXLHjCXithuIVHAYU4I87X0'}>
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={20}
                            >
                                <Marker className=''
                                //Titik Marker akan di letakkan dengan menentukan LongLat
                                position={{
                                    lat: 1.1533874199001755,
                                    lng: 104.0047102910837,
                                    
                                }}
                                // Jika Ingin Marker dapat di drag rubah value draggable menjadi true
                                draggable={false}
                                />
                            </GoogleMap>
                        </LoadScript>
                        </div>
                    </div>
                    <div className=" bg-[#CFCFD2] bg-opacity-40 rounded-md shadow-lg mx-5 ">
                        <div className=" bg-[#FFBA33] bg-opacity-20 rounded-lg m-3 p-3 shadow-2xl ">
                            <div>
                                <h1 className="font-['Rubik'] font-semibold text-center text-2xl">PT. Cipta Informatika Cemerlang</h1>
                                <br/>
                                <h3 className="text-left font-semibold text-xl">Batam Head Office : </h3>
                                <p>Komplek Jodoh Square, Blok D, No. 43-45
                                Sei jodoh, Batuampar, Batam<br/>
                                Kepulauan Riau - Indonesia</p>
                            </div>
                            <div>
                                <br/>
                                <h3 className="text-left font-semibold text-xl">Pekan Baru Branch Office : </h3>
                                <p>Jl. Karya Indah, Karya Jaya, Jl. Riau Ujung No.18, 
                                Payung Sekali, Pekan Baru <br/>
                                Riau</p>
                            </div>
                            <div>
                                <br/>
                                <h3 className="text-left font-semibold text-xl">Pekan Baru Branch Office : </h3>
                                <p>Jl. A. Yani Kompleks Telaga Mas No 08
                                Kolong, Tanjung Balai Karimun.
                                Kepulauan Riau</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
      </>
    );
  }
  
  export default Maps;