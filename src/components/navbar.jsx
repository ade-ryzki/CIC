import React from "react";
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';

const Navbar =()=>{
    return(
        <>
        <div>
            <div className="navbar bg-[#CFCFD2] font-['Rubik']">
            <div className="navbar-start">
                <div className="dropdown ">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-Black rounded-box w-52 rounded-lg transition ease-in-out delay-150 bg-[#9ACD32] bg-opacity-70 hover:-translate-y-1  hover:bg-[#FFBA33]  duration-300">
                    <li><a className="hover:underline" href='/'>Home</a></li>
                    <li tabIndex={0}>
                    <a className="justify-between hover:underline" href='/product'>
                        Product
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </a>
                    <ul className=" absolute-2 rounded-lg transition ease-in-out delay-150 bg-[#9ACD32] bg-opacity-70 hover:-translate-y-1  hover:bg-[#FFBA33]  duration-300">
                    <li><a className="hover:underline">Internet Service</a></li>
                    <li><a className="hover:underline">IPTV</a></li>
                    <li><a className="hover:underline">Fiber Optic Lastmile</a></li>
                    <li><a className="hover:underline">CIC Smart Residence</a></li>
                    <li><a className="hover:underline">Hosting Service</a></li>
                    </ul>
                    </li>
                    <Link to='/about'>
                        <li><a className="hover:underline">About CIC</a></li>
                    </Link>
                </ul>
                </div>
                <Link to='/'><img src={logo} alt="logo" className="w-14" /></Link>
                <div class="hidden sm:flex flex-row">
                <a class="pl-4 font-semibold text-xl">Cipta Informatika Cemerlang</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-xl font-semibold">
                <Link to='/'><li><a className='hover:underline duration-300'>Home</a></li></Link>
                <Link to='/product'><li><a className='hover:underline duration-300'>Product</a></li></Link>
                {/* <li tabIndex={0}>
                    <a className="text-xl font-semibold" href='/product'>
                    Product
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className=" absolute-2 rounded-lg transition ease-in-out delay-150 bg-[#9ACD32] bg-opacity-70 hover:-translate-y-1  hover:bg-[#FFBA33]  duration-300">
                    <li><a className="hover:underline">Internet Service</a></li>
                    <li><a className="hover:underline">IPTV</a></li>
                    <li><a className="hover:underline">Fiber Optic Lastmile</a></li>
                    <li><a className="hover:underline">CIC Smart Residence</a></li>
                    <li><a className="hover:underline">Hosting Service</a></li>
                    </ul>
                </li> */}
                <li>
                    <Link to='/about'>
                        <a className="hover:underline duration-300">About CIC</a>
                    </Link>
                </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/help&support'>
                <a className="btn transition ease-in-out delay-150 bg-[#9ACD32] bg-opacity-70 hover:-translate-y-1  hover:bg-[#FFBA33] hover:bg-opacity-70 duration-300 rounded-2xl">Help & Support</a>    
                </Link>
            </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;