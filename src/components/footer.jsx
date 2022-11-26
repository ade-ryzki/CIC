import React from "react"
import logo from'./../img/logo.png'
import insta from './../img/insta.png'
import fb from './../img/fb.png'

const Footer =()=>{
    return (
        <>
            <footer className="footer p-10 bg-[#CFCFD2] text-base-content">
                <div>
                    {/* <img src={Logo} alt='logo' width="50" height="50" viewBox="0 0 24 24" > */}
                    <img src={logo} alt="logo" className="w-32"/>
                    <p className="font-semibold">PT.Cipta Informatika Cemerlang <br/>Providing reliable tech since 2009</p>
                    <div className="flex flex-wrap justify-center">
                        <a href='https://www.instagram.com/cic_batam/'> <img src={insta} alt='' className="w-10 mx=-3 rounded-md"/></a>
                        <a href='https://www.facebook.com/ciptainformatikacemerlang/'><img  src={fb} alt='' className="w-10 mx-3"/></a>
                        
                    </div>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="">CIC Smart Residence</a> 
                    <a className="">Fiber Optic Lastmile</a> 
                    <a className="">IPTV</a> 
                    <a className="">Internet</a>
                    <a className="">Hosting</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover" href='/about'>About Cic</a> 
                    <a className="link link-hover" href='/help&support'>Contact</a> 
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <a className="">Terms of use</a> 
                    <a className="">Privacy policy</a> 
                    <a className="">Cookie policy</a>
                </div>
                </footer>
        </>
    )
}

export default Footer;