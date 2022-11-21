import React from "react"
import logo from'./../img/logo.png'

const Footer =()=>{
    return (
        <>
            <footer className="footer p-10 bg-[#CFCFD2] text-base-content">
                <div>
                    {/* <img src={Logo} alt='logo' width="50" height="50" viewBox="0 0 24 24" > */}
                    <img src={logo} alt="logo" className="w-32"/>
                    <p className="font-semibold">PT.Cipta Informatika Cemerlang <br/>Providing reliable tech since 2009</p>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">CIC Smart Residence</a> 
                    <a className="link link-hover">Fiber Optic Lastmile</a> 
                    <a className="link link-hover">IPTV</a> 
                    <a className="link link-hover">Internet</a>
                    <a className="link link-hover">Hosting</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </div>
                </footer>
        </>
    )
}

export default Footer;