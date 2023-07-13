import React from 'react';
import { useState } from 'react';
import { FcGallery, FcHome, FcAbout, FcBusinessContact } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";
import Login from './Login';
import { Link } from 'react-router-dom';


const Menubottom = () => {

    const [open, setOpen] = useState(false);

    const close = () => {
      setOpen(false)
    }
  
  
    const opentab = () => {
  
      setOpen(
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div
              className="bg-white shadow p-2 border rounded"
  
            >
              <div className="flex justify-between text-black">
  
  
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <div
                    className="flex justify-between bg-[#f2f2f2] shadow p-5 border rounded w-72 sm:w-96 md:w-auto "
  
                  >
                    <div className=" text-black ">
                     <Login />
  
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span onClick={close} className="cursor-pointer uppercase text-lg text-white font-bold fixed top-4 right-4">
              X
            </span>
          </div>
  
        </>
  
      )
    }
   

    return (

        <>
            <div className='block sm:hidden '>
                <div className=' w-full  h-14 mx-auto bottom-0 fixed grid items-center'>

                    <div className='grid justify-items-center  bg-white shadow-[#ff8f9c] shadow-2xl w-auto mx-0 sm:mx-20 md:mx-28 h-auto p-[15px] rounded-t-none sm:rounded-t-xl'>
                        <div className='grid grid-cols-5 gap-10 sm:gap-10 md:gap-20 items-center'>

                            <div className=' cursor-pointer'>
                            <Link to="/gallery">
                                <FcGallery size={25} />
                                </Link>
                            </div>


                            <div>
                            <Link to="/about">
                                <FcAbout size={25} />
                                </Link>
                            </div>
                           
                            <div>
                            <Link to="/">
                                <FcHome size={25} />
                                </Link>
                            </div>
                         
                            <div>
                            <Link to="/contact">
                                <FcBusinessContact size={25} />
                                </Link>
                            </div>
                            
                            <div className=' cursor-pointer'>
                                <h1>{open}</h1>
                                <FaRegUser size={20} className=' text-red-500' onClick={opentab} />
                              
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};


export default Menubottom;