import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {Link} from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import pic from "../../../public/photo.avif";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";



const Navbar = () =>{


  const [menu, setmenu] = useState(false);
  const navItems =[
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text: "About"
    },
    {
      id:3,
      text:"Portfolio"
    },
    {
      id:4,
      text:"Experience"

    },
    {
      id:5,
      text:"Contacts"
    }
  ]
  return(
    <>
    <div className="max-w-screen-2xl container mx-auto px-4  md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 ">
      <div className="flex justify-between h-16 ">
        <div className="flex space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="menu icon" />
          <h1 className="font-semibold text-xl cursor-pointer">Mani<span className="text-green-500 text-2xl">sh</span>
          <p className="text-sm">Web developer</p></h1> 
          
        </div>
        <div className="py-4">
          <ul className="hidden md:flex space-x-8">
           {
            navItems.map(({id,text})=>(
              <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>{text}</li>
            ))
           }
          </ul>

         <div onClick={()=>setmenu(!menu)} className="md:hidden"> {menu? <MdOutlineMenu size={24} />:<AiOutlineClose size={24} />}</div>
        </div>
      </div>
      {menu && (
         <div>
          <ul className="md:hidden flex flex-col items-center justify-center py-4">
             {
            navItems.map(({id,text})=>(
              <li className="hover:scale-105 duration-200 cursor-pointer font-semibold" key={id}>{text}</li>
            ))
           }
          </ul>
      </div>
      )}
     

    </div>
    </>
  )
};
export default Navbar;
