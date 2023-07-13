import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { MdOutlineMail } from 'react-icons/md';


const Footer = () => {
  return (
    <section className="width-[100%]  overflow-hidden">


      <hr className=" bg-gray-900"></hr>
      <div className="grid grid-cols-1 items-center md:grid-cols-4 md:px-20 px-5  mx-auto w-screen h-full bg-[#212121] ">
        <div className=" text-white  cursor-pointer items-start py-7 mx-2 ">
          <span className='underline underline-offset-4 decoration-[#ff8f9c] font-semibold uppercase'>Collection</span>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Painting
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Pencil Skatch
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Crafted
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Sketch
          </div>

        </div>
        <div className=" text-white  cursor-pointer items-start py-7 mx-2 ">
          <span className='underline decoration-[#ff8f9c] font-semibold uppercase underline-offset-4'>Artist</span>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Rohit Raj
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Mohit Raj
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Navin Raj
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Ashok kumar
          </div>

        </div>
        <div className=" text-white  cursor-pointer items-start py-7 mx-2  ">
          <span className='underline decoration-[#ff8f9c] font-semibold uppercase underline-offset-4 '>Our Company</span>
         
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            About
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Best Sales
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Contact Us
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Sitemap
          </div>



        </div>


        <div className=" text-white cursor-pointer items-start py-7 mx-2 ">
          <span className='underline decoration-[#ff8f9c]  font-semibold uppercase underline-offset-4'> CONTACT </span>
          <div className=' mt-2'><CiLocationOn
            size={20}
            className="text-gray-500 flex float-left items-start    "/>
            <h1 className='  px-3 ml-5 hover:text-[#ff8f9c]'>Siwan, Bihar</h1> 
          </div>
          <div><MdCall
            size={20}
            className="text-gray-500 flex float-left items-start  "
          /><span className=' px-2 py-2 mx-1 my-1 hover:text-[#ff8f9c]'>9631303526</span></div>

          <div><MdOutlineMail
            size={20}
            className="text-gray-500 flex float-left items-start mt-1 "
          /><span className=' px-2 py-2 my-3 mx-1 hover:text-[#ff8f9c]'>rohitpd8162012@gmail.com</span></div>


        </div>
      </div>

      <hr className=" bg-gray-900"></hr>
      <div className='text-center text-gray-500 pt-5 pb-5 text-lg bg-[#212121]'>Copyright © Artvista All Rights Reserved.</div>

    </section>
  );
};

export default Footer;