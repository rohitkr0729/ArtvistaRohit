import React from "react";


export default function CardComponent() {
  const posts = [
    {
      title: "Banaras",
      img: "https://s3.ap-southeast-1.amazonaws.com/art-flute-media/artworks/artwork-10370/thumbnail/compressed/12_07_21_11_08_49_WhatsAppImage2021-07-12at3.27.18PM.jpeg",
      button: (
        <button className=" bg-sky-400  hover:bg-[#212121] hover:text-white font-bold py-1 px-2 border-none rounded-sm">
        Explore
        </button>
      )

    },
    {
      title: "Buddha",
      img: "https://www.artzolo.com/sites/default/files/styles/product_full/public/uploads/multi/4854/largest/gautama_buddha.jpg",
      button: (
        <button className="bg-sky-400  hover:bg-[#212121] hover:text-white font-bold py-1 px-2 border-none rounded-sm">
          Explore
        </button>
      )

    },
    {
      title: "Abstract",
      img: "https://indianartideas.in/articleimages/1575100001A-Brief-Synopsis-How-Abstract-Art-Evolved-Over-A-Period-Of-Time.jpg",
      button: (
        <button className="bg-sky-400  hover:bg-[#212121] hover:text-white font-bold py-1 px-2 border-none rounded-sm">
          Explore
        </button>
      )

    },
    {
      title: "Radha Kishan",
      img: "https://www.tallengestore.com/cdn/shop/products/Indian_Art_-_Radha_Krishna_Painting_2_9df3e43e-13f6-49da-ad02-61fb5dd3c1ba.jpg?v=1568959851",
      button: (
        <button className="bg-sky-400  hover:bg-[#212121] hover:text-white font-bold py-1 px-2 border-none rounded-sm">
          Explore
        </button>
      )

    },
    {
      title: "Landscape",
      img: "https://d1dzh206jt2san.cloudfront.net/posts-images/743X483/82_1512371002TghvG.jpg",
      button: (
        <button className="bg-sky-400  hover:bg-[#212121] hover:text-white font-bold py-1 px-2 border-none rounded-sm">
          Explore
        </button>
      )

    },
    {
      title: "Animal",
      img: "https://images.template.net/wp-content/uploads/2017/01/02134837/Black-and-White-Digital-Art.jpg",
      button: (
        <button className="bg-sky-400  hover:bg-[#212121] hover:text-white font-bold py-1 px-2 border-none rounded-sm">
          Explore
        </button>
      )

    },
    {
      title: "Shivji",
      img: "https://images.saatchiart.com/saatchi/994983/art/7741350/6809446-NKZDGPTF-7.jpg",
      button: (
        <button className="bg-sky-400  hover:bg-[#212121] hover:text-white font-bold py-1 px-2 border-none rounded-sm">
          Explore
        </button>
      )

    },
    {
      title: "Indian wear",
      img: "https://learn.podium.school/wp-content/uploads/2021/10/1402553233Indian-motifs-27.jpg",
      button: (
        <button className="bg-sky-400  hover:bg-[#212121] hover:text-white font-bold py-1 px-2 border-none rounded-sm">
          Explore
        </button>
      )

    },

  ];
  return (
    <>
      <div className=" mx-7 md:mx-10 lg:mx-20 py-7">
        <div>
          <h1 className=" text-3xl font-bold text-center uppercase ">Explore By Collection</h1>
          <h1 className=" text-sm font-normal mb-5 text-gray-500 text-center" >Handpicked for your Beautiful Arts</h1>
        </div>
        <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-4">
          {posts.map((items, key) => (
            <div className="w-full rounded-lg lg:max-w-sm border-[20px] " key={key} style={{
              backgroundImage: `url("${items.img}")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}>
              <div className='w-full h-full bg-black bg-opacity-40 p-14 justify-items-center'>
                <p className='text-white transparent text-2xl text-center'>{items.title}</p>
                <div className='grid mt-2 justify-items-center '>{items.button}</div>
              </div>

            </div>

          ))}
        </div>
      </div>



      {/* {products.map((product, index) => (
        <div
          className='w-full md:w-3/5 h-[250px] mt-4  border-gray-300 border-[12px]'
          key={index}
          style={{
            backgroundImage: `url("${product.image}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='w-full h-full bg-black bg-opacity-40 p-14 justify-items-center'>
            <p className='text-white transparent text-2xl'>{product.name}</p>
            <div className='mt-2 '>{product.button}</div>
          </div>
        </div>
      ))} */}



    </>
  );
}