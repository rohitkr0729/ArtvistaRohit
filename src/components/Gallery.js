import React from 'react'
import Layout from '../rohit/Layout'

const Gallery = () => {
    const gal=[
    {
        image:"https://acquireart.co.uk/wp-content/uploads/2019/04/How-to-commission-an-artist.jpg",
        name:"Commission an Aritist"
    },
    {
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/55ace042019161.57bd78cf107f7.jpg",
        name:"Art of Offices"
    },
    {
        image:"https://assets.architecturaldigest.in/photos/600048935185c350fcd4e401/master/w_1600%2Cc_limit/Viya-Home-1.jpg",
        name:"Arts of Homes"
    },
    
    {
        image:"https://www.privatebankerinternational.com/wp-content/uploads/sites/5/2019/04/shutterstock_342943268.jpg",
        name:"Art of Consultancy"
    },
    {
        image:" https://artisticcustomframingandgallery.com/data1/images/6.jpg",
        name:"Custom Framing"
    },
    {
        image:" https://www.prairiegardens.com/wp-content/uploads/2017/08/Framing_FamilyWall.jpg",
        name:"Framing Art"
    },
]
  return (
    <>
    <Layout>
        <div className=' text-center text-3xl font-bold mt-7 uppercase'>My Art Gallery</div>
    <div className=' p-1 mb-7 '>
            <div className='w-4/5 md:ml-32 mx-12 gap-5  h-auto grid grid-cols-1 md:grid-cols-3 '>
                {gal.map((photo,index)=>{
                    return(
                        <div className='w-full mt-4 h-80 border-b-4 border-gray-800 hover:shadow-lg duration-200'>
                        <div className='w-full h-4/5 bg-green-100' key={index}>
                            <img className='w-full h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src={photo.image} alt=''/>
                        </div>
                        <div className='text-center text-xl mt-1'>{photo.name}</div>
                    </div>
                    )
                })}
                    
                    
            </div>
    </div>
    </Layout>
 </>

  )
}

export default Gallery