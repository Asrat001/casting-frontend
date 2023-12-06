import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Work.css';

// import required modules
import { Autoplay, Pagination} from 'swiper/modules';

export default function Slider() {
 
  const image =[
    "https://res.cloudinary.com/diogyja1g/image/upload/v1695589767/image2_fu1qup.jpg",
    "https://res.cloudinary.com/diogyja1g/image/upload/v1695589768/86_sffdlz.jpg",
    "https://res.cloudinary.com/diogyja1g/image/upload/v1695590103/image1_hzy1af.jpg",
    "https://res.cloudinary.com/diogyja1g/image/upload/v1695589769/image3_fezfd6.jpg"
    ]


  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction:true,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination,]}
        className="mySwiper"
      >
        {
          image.map((img,i)=>{
            return(
              <SwiperSlide key={i} className={``}>
                <img src={img} className=' rounded-bl-lg'/>
              
              </SwiperSlide>
            )
          })
        }
    
      </Swiper>
    </>
  );
}
