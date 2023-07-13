import React from 'react'
import Layout from '../rohit/Layout'
import Rohit  from './Rohit'
import Raj from './Raj'
import Collection from './Collection';


const Herosection = () => {
  return (
    <Layout>
      

      <div className=' h-auto' id='parallax'>
        <div className=' p-5 lg:p-4 '>
          <div className='mx-5 lg:mx-20'>
            <div className=' mx-auto mt-40 mb-40 text-center'>
              <div className=' bg-slate-200 pt-4 pb-4 rounded'>
              <p className='  text-3xl font-bold underline  '>ArtVista Gallery</p>
              <p className=' font-medium text-gray-500'>Since 1950</p>
              <p className=' mt-7 font-light px-2'>With your continued support and art patronage we hope to make available handpicked Indian talent from across</p>
              <p className=' font-light mb-5'>the country exclusively for you.</p>
              <div className=' grid grid-cols-3 '>
                <div className=' border border-t-0 border-l-0 border-b-0 border-black border-r-2'>
                  <p className=' underline text-3xl font-semibold underline-offset-4'>100+</p>
                  <p className=' font-normal text-gray-500 mt-1 p-2'>SELECTED EXCLUSIVE ARTIST</p>
                </div>
                <div className=' border border-t-0 border-l-0 border-b-0 border-black border-r-2'>
                  <p className=' underline text-3xl font-semibold underline-offset-4'>70+</p>
                  <p className=' font-normal text-gray-500 mt-1 p-2'>YEARS EXPERIENCE</p>
                </div>
                <div className=' '>
                  <p className=' underline text-3xl font-semibold underline-offset-4'>1000+</p>
                  <p className=' font-normal text-gray-500 mt-1 p-2'>ARTWORKS AVAILABLE</p>
                </div>
              </div>
              </div>


            </div>
          </div>
        </div>
         </div>
         <Collection />
         <Raj />
        <Rohit />
      
     
    </Layout>
  )
}

export default Herosection;