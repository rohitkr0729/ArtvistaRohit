import React from 'react'
import { useState } from 'react';


const ConditionalLoginComponent = () => {
  const [user, setUser] = useState(null);
  const [user1, setUser1] = useState(null);

  const singup = () => {
    //normally connect to db or api
    setUser(true);
  };

  const pass = () => {
    setUser1(true);
  };


  const login = () => {
    setUser(null);
  };


  return (
    <>
    
    <div>
      {user ? (
        <div className=' p-4'>
          <form>
            <div className=" text-black font-bold text-sm sm:text-sm md:text-2xl font-serif uppercase text-center sm:text-start">
              Sign In to Create your account
            </div>
            <p onClick={login} className=" cursor-pointer mb-3 mt-4 text-center text-base font-semibold">Already Have an account?<span className='text-red-600 ml-1 hover:underline'>

              Login

            </span></p>

            <div className="  grid grid-cols-1 md:grid-cols-1 ">
              <label>
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                className="border  shadow-lg p-2 outline-[#ff8f9c]"
                placeholder="Enter your  Firstname & Lastname)"
              />
            </div>
            <div className="  grid grid-cols-1 md:grid-cols-1 my-2 ">
              <label>
                Mobile Number <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                className="border  shadow-lg p-2 outline-[#ff8f9c] "
                placeholder="Enter your Mobile Number"
              />
            </div>
            <div className="  grid grid-cols-1 md:grid-cols-1 my-2 ">
              <label>
                Email id <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                className="border  shadow-lg p-2 outline-[#ff8f9c]"
                placeholder="Enter your Email id"
              />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-1 py-2">
              <label>
                Password <span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                className=" border  shadow-lg p-2 outline-[#ff8f9c]"
                placeholder="Enter your password"
              />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-1 py-2">
              <label>
               Conform Password <span className="text-red-500">*</span>
              </label>

              <input
                type="confirm password"
                className=" border  shadow-lg p-2 outline-[#ff8f9c]"
                placeholder="Conform your password"
              />
            </div>





            <div className=" text-center  grid grid-cols-1 md:grid-cols-1 items-center my-2 mt-5 rounded-md py-2 px-7 pb-2.5 pt-3 text-sm font-medium  text-white shadow-[0_4px_9px_-4px_#3b71ca] bg-[#ff8f9c]  hover:bg-[#212121]">
              <button type="submit">Sign Up</button>
            </div>





          </form>
        </div>



      ) : (



      <div>
        {user1 ? (
        
        <div className=' p-4'>
          

        <form>
          <div className=" text-black font-bold text-sm sm:text-sm md:text-2xl font-serif uppercase text-center sm:text-start">
            Reset Your Password
          </div>

          <div className="mt-7  grid grid-cols-1 md:grid-cols-1 ">
              <label className=' capitalize'>
              OTP will sent to your registered email id 
              </label>

              <input
                type="text"
                className="border  shadow-lg p-2 outline-[#ff8f9c] mt-1 "
                placeholder="Enter your Email"
              />
            </div>

            <div className="mt-7 text-center  grid grid-cols-1 md:grid-cols-1 items-center py-3 my-3 px-7 pb-2.5 pt-3 text-sm font-medium  text-white shadow-[0_4px_9px_-4px_#3b71ca] bg-[#ff8f9c]  hover:bg-[#212121]">
              <button type="submit">Login</button>
            </div>

        </form>
        </div>
        
        ) : (



          <div className=' p-4'>
          

          <form>
            <div className=" text-black font-bold text-sm sm:text-sm md:text-2xl font-serif uppercase text-center sm:text-start ">
              Login in to complete your order
            </div>



            <p onClick={singup} className=" cursor-pointer mb-3 mt-4 text-center text-base font-semibold">Don't have account?<span className=' text-red-600 ml-1 hover:underline'>

              Sign Up

            </span></p>


            <div className="  grid grid-cols-1 md:grid-cols-1 ">
              <label>
                Username <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                className="border  shadow-lg p-2 outline-[#ff8f9c] "
                placeholder="Enter your username"
              />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-1 py-2 mt-1">
              <label>
                Password <span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                className=" border shadow-lg p-2 rounded outline-[#ff8f9c]"
                placeholder="Enter your password"
              />
            </div>


            {/* <!-- Forgot password link --> */}

            
            <h1 onClick={pass} className=' cursor-pointer text-right font-normal text-red-500 hover:underline'>Forgot Password ?</h1>
            


            <div className=" text-center  grid grid-cols-1 md:grid-cols-1 items-center py-3 my-3 px-7 pb-2.5 pt-3 text-sm font-medium  text-white shadow-[0_4px_9px_-4px_#3b71ca] bg-[#ff8f9c]  hover:bg-[#212121]">
              <button type="submit">Login</button>
            </div>




          </form>
        </div>

         

        )}
        </div>




      )}
      
    </div>
    
    </>
  )
}

export default ConditionalLoginComponent;