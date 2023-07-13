import React from 'react';
import { MdStar } from 'react-icons/md';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';

const rohit = () => {
  return (
    <>
    <section className=' mx-10 lg:mx-20 my-7'>
      <div className=" ">
        <h1 className=" font-bold text-3xl ml-10 uppercase text-center">
          Customers Stories
        </h1>
        <h1 className="text-sm font-normal mb-2 text-gray-500 text-center capitalize">
          (Rated 4.8/5 based on 125523 ratings)
        </h1>
        <div className="md:grid-cols-3  grid grid-cols-1   mx-5 gap-2">
            {/* first div start */}
          <div className=" border-2 border-gray-600 rounded-lg mx- my-5 bg-white cursor-pointer hover:bg-black ">
            <div className="  my-2 border-1 rounded-xl flex justify-center">
              <img src="https://media.licdn.com/dms/image/C5603AQFx4sF38N20RA/profile-displayphoto-shrink_800_800/0/1639930651498?e=2147483647&v=beta&t=SB1TvceBFEsIfx88wg28i4HF9TtmpQ2qC2fIA4RwkzA"
                className=" h-20 w-max" alt=''
                
              />
            </div>
            <div className="flex justify-center">
              <span className="text-yellow-400  text-xl  flex">
                <MdStar />
                <MdStar />
                <MdStar /> <MdStar />
                <MdStar />
              </span>
             <div className=" justify-center text-gray-500 font-light">| 12 july 2023</div>
            </div>
            <div className="ml-4   text-gray-500">
              <RiDoubleQuotesL size={30} />
            </div>
            <div className="py-6 text-center text-gray-500  font-sans -mt-11">
              Beautiful Art
            </div>
            <div className="float-right mr-4   text-gray-500">
              <RiDoubleQuotesR size={30} />
            </div>
            <div className=" text-center  mt-8 my-3  text-gray-500  font-sans">
              Rohit Raj
            </div>
          </div>
          {/* first div end */}
          {/* second div start */}
           <div className=" border-2 border-gray-600 rounded-lg mx- my-5 bg-white cursor-pointer hover:bg-black ">
            <div className="  my-2 border-1 rounded-xl flex justify-center">
              <img
                src="https://bizimages.withfloats.com/actual/6423e89d8b45730001365976.jpg"
                className=" h-20 w-max" alt=''
               
              />
            </div>
            <div className="flex  justify-center">
              <span className="text-yellow-400  text-xl  flex">
                <MdStar />
                <MdStar />
                <MdStar /> <MdStar />
                <MdStar />
              </span>
             <div className=" justify-center text-gray-500 font-light">| 16 May 2023</div>
            </div>
            <div className="ml-4   text-gray-500">
              <RiDoubleQuotesL size={30} />
            </div>
            <div className="py-6 text-center text-gray-500  font-sans -mt-11">
              Jai Sri Ganesh
            </div>
            <div className="float-right mr-4   text-gray-500">
              <RiDoubleQuotesR size={30} />
            </div>
            <div className=" text-center  mt-8 my-3  text-gray-500  font-sans">
              Ashok Kumar
            </div>
          </div>
          {/* second div end */}
          {/* third div start */}
           <div className=" border-2 border-gray-600 rounded-lg mx- my-5 bg-white cursor-pointer hover:bg-black ">
            <div className="  my-2 border-1 rounded-xl flex justify-center">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2021/4/UR/XO/TH/126512148/350-ruppes-500x500.jpeg"
                className=" h-20 w-max" alt=''
              
              />
            </div>
            <div className="flex  justify-center">
              <span className="text-yellow-400  text-xl  flex">
                <MdStar />
                <MdStar />
                <MdStar /> <MdStar />
                <MdStar />
              </span>
             <div className=" justify-center text-gray-500 font-light">| 19 May 2023</div>
            </div>
            <div className="ml-4   text-gray-500">
              <RiDoubleQuotesL size={30} />
            </div>
            <div className="py-6 text-center text-gray-500  font-sans -mt-11">
              Jai Bholenath
            </div>
            <div className="float-right mr-4   text-gray-500">
              <RiDoubleQuotesR size={30} />
            </div>
            <div className=" text-center  mt-8 my-3  text-gray-500  font-sans">
              Srinath Singh
            </div>
          </div>
          {/* third div end */}
        </div>
      </div>
    </section>



    <div className='mx-10 md:mx-20 bg-gray-200 rounded-lg my-7 '>
                <div className='grid grid-col-1   xl:grid-cols-2 mx-5 xl:mx-20 py-10 '>
                    <div className='border  border-r-0 border-t-0 border-l-0 border-b-0 xl:border-r-2 border-red-500 px-5 xl:px-0'>
                        <h1 className='text-3xl font-extrabold border'>SUBSCRIBE NOW</h1>
                        <h1 className='text-gray-500 text-sm'>For Latest Updates on Paintings, News and Offer.</h1>
                    </div>


                    <div className=' px-5'>
                        <div class=" my-5">
                            <input class="shadow appearance-none border  py-2 px-3 w-[60%] text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12" id="username" type="text" placeholder="Enter Email-ID" />
                            <button class="bg-sky-500  hover:bg-[#212121] hover:text-white text-white font-bold mx-0 sm:mx-5 py-2 px-10 h-11 mt-4 sm:mt-0  focus:outline-none focus:shadow-outline" type="button">
                                SIGN UP
                            </button>
                        </div>


                    </div>

                </div>
            </div>
    </>
  );
};

export default rohit;