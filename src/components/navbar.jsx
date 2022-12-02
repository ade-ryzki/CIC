import React from "react";
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';

const Navbar =()=>{
    return(
        <>
         <div className=" navbar font-['Rubik'] bg-slate-50  divide-y-reverse shadow-sm ">
            <div className="navbar-start ml-5">
                <div className="dropdown ">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-Black  w-52 rounded-lg transition ease-in-out delay-150 bg-gradient-to-r from-orange-400  to-white hover:from-white hover:to-lime-400 hover:-translate-y-1  opacity-90  duration-300">
                    <li><a className="hover:underline" href='/'>Home</a></li>
                    <li tabIndex={0}>
                    <a className="justify-between hover:underline" href='/product'>
                        Product
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </a>
                    <ul className=" absolute-2 rounded-lg transition ease-in-out delay-150 bg-gradient-to-r from-white  to-orange-400 hover:from-white hover:to-lime-400 hover:-translate-y-1  opacity-90 duration-300">
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
                <Link to='/'><img src={logo} alt="logo" className="w-24 ml-4"/></Link>
                {/* <div class="hidden sm:flex flex-row">
                <a class="pl-4 font-semibold text-xl">Cipta Informatika Cemerlang</a>
                </div> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-xl font-semibold">
                <Link to='/'><li><a className='hover:underline duration-300 text-2xl'>Home</a></li></Link>
                <Link to='/product'><li><a className='hover:underline duration-300 text-2xl'>Product</a></li></Link>
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
                        <a className="hover:underline duration-300 text-2xl">About CIC</a>
                    </Link>
                </li>
                </ul>
            </div>
            <div className="navbar-end mr-5">
                <Link to='/help&support'>
                <button className="bg-gradient-to-r from-white  to-orange-400 hover:from-white hover:to-lime-400  rounded-md py-1 px-3 text-lg md:text-2xl">Help & Support</button>    
                </Link>
            </div>
        </div>
        </>
    )
}

export default Navbar;