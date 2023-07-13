import React from 'react'
import Layout from '../rohit/Layout'


const About = () => {
  return (
    <Layout>

      <>
        <div className=' p-2 lg:p-4 my-7 '>
          <div className=' text-center text-3xl font-bold  mb-7 uppercase'>AboutUS</div>
          <div className='mx-5 lg:mx-20'>
            <div className=' grid grid-cols-1 xl:grid-cols-2'>
              <div>
                <div className=' ml-[3%]'>
                  <div className=' border-sky-500 border-[12px] w-[697px] h-[427px]'>
                    <img alt='sea' className=' h-[440px] w-[700px] pt-[15px] pl-[15px]' src="https://content.jdmagicbox.com/comp/rajkot/d3/0281px281.x281.160531150136.m2d3/catalogue/mitesh-art-gallery-rajkot-gift-shops-l10xhghqvh.jpg" />
                  </div>
                </div>
              </div>
              <div className='xl:ml-48 2xl:ml-20 mt-10 xl:mt-0 '>
                <h1 className=' font-bold tracking-wider'>Explore The Best Art Work</h1>
                <p className=' pt-1 text-gray-500'>
                Artvista was set up under the banner ‘Painted Art Gallery’ in 1950 and has since continued to promote and exhibit talented artists from all over India. With the intention of making ‘Art Affordable for Everybody’ and with the introduction of the new generation into the family business, the gallery chose to rebrand itself.
                </p>
                <p className='pt-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat mollit anim id est laborum.</p>
                <button className='mt-5 bg-sky-400  hover:bg-[#212121] hover:text-white  transition-transform p-3 font-bold text-white tracking-wider  border-0'>READ MORE</button>

              </div>
            </div>
          </div>
        </div>
      </>

    </Layout>
  )
}

export default About