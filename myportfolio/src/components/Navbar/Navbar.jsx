import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {Link} from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import pic from "../../../public/photo.avif" 



const Navbar = () =>{
  return(
    <>
    <div className="max-w-screen-2xl container mx-auto px-4  md:px-20 h-16 shadow-md ">
      <div className="flex justify-between ">
        <div className="flex space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="menu icon" />
          <h1 className="font-semibold text-xl cursor-pointer">Mani<span className="text-green-500 text-2xl">sh</span>
          <p className="text-sm">Web developer</p></h1> 
          
        </div>
        <div className="py-4">
          <ul className="flex space-x-8">
            <li className="">Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
      <div></div>

    </div>
    </>
  )
};
export default Navbar;
