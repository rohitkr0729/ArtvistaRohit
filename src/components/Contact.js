import React from 'react'
import Layout from '../rohit/Layout'
import { HiLocationMarker } from 'react-icons/hi';
import { GrMail } from 'react-icons/gr';
import { BsTelephoneFill } from 'react-icons/bs';


const Contact = () => {
  return (
    <Layout>
      <>
        <div className=' p-2 lg:p-4 my-7 '>
          <div className=' text-center text-3xl font-bold mb-7 uppercase'>ContactUS</div>
          <div className='mx-5 lg:mx-20'>
            <div className="bg-white ">
              <div className="flex justify-around items-center  md:flex-row flex-col">
                {/* textual content */}
                <div className="md:w-1/2 w-full md:p-10  md:my-0  flex-col">
                  <h1 className="text-4xl font-bold text-sky-500">
                    Get In Touch
                  </h1>
                  <p className="text-gray-500 font-semibold text-sm my-5">
                    Fill up the form &amp; our Team will get interact with you.
                  </p>
                  <div className="flex-col my-10 gap-5 flex">
                    <div className="flex gap-5 p-4 border border-gray-500 hover:bg-[#ff8f9c] w-full rounded-lg group cursor-pointer items-center">
                      <BsTelephoneFill className="text-xl text-gray-500 group-hover:text-white" />
                      <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                        +91-9631303526
                      </p>
                    </div>
                    <div className="flex gap-5 p-4 border border-gray-500 hover:bg-[#ff8f9c] w-full rounded-lg group cursor-pointer items-center">
                      <GrMail className="text-xl text-gray-500 group-hover:text-white" />
                      <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                        tdpvista@gmail.com
                      </p>
                    </div>
                    <div className="flex gap-5 p-4 border border-gray-500 hover:bg-[#ff8f9c] w-full  rounded-lg group cursor-pointer items-center">
                      <HiLocationMarker className="text-xl text-gray-500 group-hover:text-white" />
                      <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                        Colar, Bhopal
                      </p>
                    </div>
                  </div>


                </div>

                {/* Contact form */}
                <div className="bg-white p-6 md:p-12 rounded-lg border-blue-700 shadow-md md:w-1/2 w-full">
                  <form >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#ff8f9c] focus:outline-none"
                        placeholder="First Name"
                        required
                      />

                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#ff8f9c] focus:outline-none"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="form-control block w-full px-3 py-2 mt-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#ff8f9c] focus:outline-none"
                      placeholder="Email"
                      required
                    />
                    <input
                      type="text"
                      name="subject"
                      className="form-control block w-full px-3 py-2 mt-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#ff8f9c] focus:outline-none"
                      placeholder="Subject"
                      required
                    />

                    <div className="flex justify-center">
                      <textarea
                        className="form-control block w-full px-3 py-2 mt-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#ff8f9c] focus:outline-none"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      name="message"
                      className="text-white bg-[#ff8f9c] hover:bg-[#212121] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:hover:bg-[#ff8f9c] dark:focus:ring-blue-800 mt-6"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export default Contact;