  import {
    GoogleMap,
    LoadScript,
    Marker, // Import Marker
  } from "@react-google-maps/api";
  
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
            <div className=" bg-gradient-to-r from-slate-400  to-orange-400 font-['Rubik'] py-20 rounded-xl  shadow-lg">
                <div className="text-center text-black font-bold text-4xl ">
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