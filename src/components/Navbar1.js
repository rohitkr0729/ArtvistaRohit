import React, { useState } from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaRegUser } from "react-icons/fa";
import Login from './Login';




const Nav1 = () => {

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
    <nav className=' p-2 lg:p-2 border border-gray-300'>
      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-5 lg:mx-20'>
        <div className=' hidden lg:block'>
          <div className='cursor-pointer flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
            <FaFacebook />
          </div>
          <div className='flex cursor-pointer float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
            <FaTwitter />
          </div>
          <div className='flex cursor-pointer float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
            <FaInstagram />
          </div>
          <div className='flex cursor-pointer float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
            <FaLinkedin />
          </div>


        </div>
        <div className='grid justify-items-center sm:justify-items-center xl:justify-items-center'>
          <div className=' text-gray-500 text-sm ' >
            <span className=' font-medium cursor-pointer'>Call us</span>
            <span className=' font-normal cursor-pointer'> +9631303526 (Also on Whatsapp)</span>
          </div>
        </div>
        <div className=' grid justify-items-end '>
          <div>
            <div className='flex '>


              <div className=' hidden sm:block'>
                <h1>{open}</h1>
                <div onClick={opentab} className=' cursor-pointer hover:text-[#ff8f9c]'>
                  <div className='flex float-left mx-1 p-1 rounded-md text-gray-500 hover:text-[#ff8f9c] '>
                    <FaRegUser />
                  </div>
                  <div className='flex float-left  '>
                    Account
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>


    </nav>
  )
};

export default Nav1;