import React from 'react'
import { BsHeart } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import { FaComment } from "react-icons/fa";

const Raj = () => {
  const posts = [
    {
        artist:"Rohit Raj",
        heartlike:"2k",
        view:'6.5k',
        comment:'190',
        paragraph:'Lorem ipsum dolor sit amet, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.',
        title:'Sketch Art',
        img: "https://images.unsplash.com/photo-1602738328654-51ab2ae6c4ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tldGNoJTIwYXJ0fGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
      artist:"Rohit Raj",
      heartlike:"4k",
      view:'10.5k',
      comment:'400',
      paragraph:'Lorem ipsum dolor sit amet, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.',
      title:'Drawing of Dog',
      img: "https://images.template.net/wp-content/uploads/2017/01/12105040/Art-Drawings.jpg"
    },
    {
      artist:"Rohit Raj",
      heartlike:"2.9k",
      view:'6.9k',
      comment:'140',
      paragraph:'Lorem ipsum dolor sit amet, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.',
      title:'Pencil Sketch',
      img: "https://e0.pxfuel.com/wallpapers/428/181/desktop-wallpaper-pencil-art-nature-drawing.jpg"
    },
    {
      artist:"Rohit Raj",
      heartlike:"5k",
      view:'7.5k',
      comment:'100',
      paragraph:'Lorem ipsum dolor sit amet, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.',
      title:'Heart and souls',
      img: "https://images.assettype.com/dtnext/2022-06/f852cbf1-d794-44fc-87a2-13e36f9f27bd/Blood.jpg"
    },

  ];
  return (
    <>
      <div className=' p-4 ' id='rohit'>
        <div className='  mx-5 lg:mx-20'>

          <div className=' text-center mt-4  pt-2 pb-2 '>

            <div className=' text-3xl font-bold text-white mt-3 uppercase mb-1 '>Tranding Art</div>
            <span className=' bg-black p-1 text-[#ff8f9c] font-semibold rounded-sm pl-2 pr-2 capitalize'>some comments or reactions on specific artworks</span>
              <div className="grid gap-4 grid-cols-1  md:grid-cols-2 xl:grid-cols-4 my-6">
                {posts.map((items, key) => (
                  <div className="w-full rounded-lg shadow-2xl  bg-slate-200 hover:bg-black hover:text-white cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105" key={key}>
                    <img
                      className="object-cover w-full h-48 rounded-lg "
                      src={items.img} alt='' />
                    <h2 className=' mt-4 text-lg  tracking-widest'>{items.title}</h2>
                    <h2 className=' text-lg  font-medium text-[#ff8f9c] '><em className='text-xl  text-green-600'>@_</em>{items.artist}</h2>
                    <p className=' pl-4 pr-4 text-gray-500 text-start'>{items.paragraph}</p>
                    <ul className=' py-4 pl-4 list-none inline-flex'>
                      <li className=''><BsHeart  className=' hover:text-red-600'/></li>
                      <li className='-mt-1 ml-1'>{items.heartlike}</li>
                      <li className='pl-7'><HiOutlineEye /> </li>
                       <li className='-mt-1 ml-1'>{items.view}</li>
                       <li className='pl-7'><FaComment /> </li>
                      <li className='-mt-1 ml-1'>{items.comment}</li>
                    </ul>

                  </div>
                ))}
              </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Raj;