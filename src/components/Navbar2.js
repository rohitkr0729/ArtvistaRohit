import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaBarsStaggered } from "react-icons/fa6";
import { FcGallery, FcHome, FcAbout, FcBusinessContact } from "react-icons/fc";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Nav2 = () => {

  const [isOpen, setIsOpen] = useState();



  const close = () => {
    setIsOpen(false);
  }


  const openbar = () => {
    setIsOpen(
      <>
        <span onClick={close} className="cursor-pointer uppercase text-md text-black font-bold fixed top-2 right-4 z-10">
          X
        </span>

        <div className='top-0 right-0 fixed bg-white w-[30vw] h-full text-center p-5 shadow-xl ease-in-out duration-300  overflow-y-scroll '>

          <div className=' my-1  h-auto grid grid-cols-1 '>

            <div className=' '>
              <div className='grid w-auto justify-center p-3  ' >
                <div className=' mt-2'>
                  <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-8 '>
                  <Link to="/">
                    Home
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className=' '>
              <div className='grid w-auto justify-center p-3  ' >
                <div className=' mt-2'>
                  <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-8 '>
                  <Link to="/gallery">
                    Gallery
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className=' '>
              <div className='grid w-auto justify-center p-3  ' >
                <div className=' mt-2'>
                  <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-8 '>
                  <Link to="/about">
                    About
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className=' '>
              <div className='grid w-auto justify-center p-3  ' >
                <div className=' mt-2'>
                  <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-8 '>
                  <Link to="/contact">
                    Contact
                    </Link>
                    </p>
                </div>
              </div>
            </div>




          </div>

          <div className='flex items-center justify-center pt-52 '>
            <hr />
            <div className=' grid grid-cols-2 sm:grid-cols-4  '>
              <div className='flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
                <FaFacebook />
              </div>
              <div className='flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
                <FaTwitter />
              </div>
              <div className='mt-2 sm:mt-0 flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
                <FaInstagram />
              </div>
              <div className='mt-2 sm:mt-0 flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
                <FaLinkedin />
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }


  return (
    <nav className=' p-2 border border-t-0' id='parallax'>
      <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 mx-5 lg:mx-20'>
        <div className=' grid items-center'>
        <Link to="/">
          <h1 className=' text-center sm:text-left  text-3xl font-extrabold hover:text-gray-700'>
            <span className=' text-sky-500 '>Art</span>
          <em className=' text-[#ff8f9c]'>Vista</em></h1>
          </Link>

        </div>
        <div className='grid justify-items-center'>

          {/* search box start */}

          <div className="  pt-2  justify-items-center text-gray-600 -ml-[10px] sm:-ml-[10px] md:-ml-[40px] lg:-ml-[50px] xl:-ml-[130px] 2xl:-ml-[120px]">
            <input className=" grid justify-items-center border-2 border-gray-300 bg-white h-12 px-5 pr-16  text-sm focus:outline-[#ff8f9c] w-auto sm:w-[300px] md:w-[400px] lg:w-[410px] xl:w-[410px] 2xl:w-[420px]  rounded-lg shadow-inner"
              type="search" placeholder="Search" />
          </div>
          <div className=' flex float-left -mt-11 ml-[200px] sm:ml-[90%] md:ml-[90%] lg:ml-[90%] xl:ml-[60%]'>
            <button type="submit">
              <FaSearch />
            </button>
          </div>


          {/* search box end */}

        </div>
        <div className='ml-auto mt-4 hidden xl:block '>
          <div className='flex '>
            <div className=' grid items-center mt-1 '>
              <div className='flex '>
                <Link to="/">
                  <div className=' cursor-pointer '>
                    <div className='flex float-left  p-1 rounded-md text-gray-500 '>
                      <FcHome size={17} />
                    </div>
                    <div className='flex float-left font-medium hover:text-gray-700 hover:underline underline-offset-8 '>
                      Home
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className=' grid items-center ml-5'>
              <div className='flex mt-1 '>
                <Link to="/gallery">
                <div className=' cursor-pointer'>
                  <div className='flex float-left  p-1 rounded-md text-gray-500 '>
                    <FcGallery size={19} />
                  </div>
                  <div className='flex float-left font-medium hover:text-gray-700 hover:underline underline-offset-8 '>
                    Gallery
                  </div>
                </div>
                </Link>
              </div>
            </div>

            <div className=' grid items-center ml-5'>
              <div className='flex mt-1'>
                <Link to="/about">
                  <div className=' cursor-pointer'>
                    <div className='flex float-left  p-1 rounded-md text-gray-500 '>
                      <FcAbout size={18} />
                    </div>
                    <div className='flex float-left font-medium hover:text-gray-700 hover:underline underline-offset-8'>
                      About
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className=' grid items-center ml-5'>
              <div className='flex mt-1'>
                <Link to="/contact">
                <div className=' cursor-pointer'>
                  <div className='flex float-left  p-1 rounded-md text-gray-500 '>
                    <FcBusinessContact size={18} />
                  </div>
                  <div className='flex float-left font-medium hover:text-gray-700 hover:underline underline-offset-8'>
                    Contact
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='ml-auto mt-4 hidden sm:block xl:hidden '>
          <div className='flex '>

            <div className=' grid items-center mt-1 '>
              <h1>{isOpen}</h1>
              <FaBarsStaggered size={25} onClick={openbar} className=' cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav2;