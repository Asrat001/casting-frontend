import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./Work.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// import required modules
import { EffectCards, Pagination,Autoplay} from "swiper/modules";
import slide_image_1 from "../assets/hero.png";

function Slider() {
  return (
    <section className="   flex flex-col  sm:flex-row  justify-between items-center">
      <div className="flex justify-center items-center flex-col">
        <Swiper
          effect={"cards"}
          pagination={true}
          autoplay={{
            delay:2500,
            disableOnInteraction:false
          }}
          grabCursor={true}
          modules={[EffectCards, Pagination,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://res.cloudinary.com/diogyja1g/image/upload/v1693222355/9_v0if8x.jpg" className="w-full  h-full  object-cover" />
        
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/diogyja1g/image/upload/v1693222355/9_v0if8x.jpg" className="w-full  h-full  object-cover" />
       
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://res.cloudinary.com/diogyja1g/image/upload/v1693222355/9_v0if8x.jpg" className="w-full h-full  object-cover" />
         
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/diogyja1g/image/upload/v1693222355/9_v0if8x.jpg" className="w-full h-full  object-cover" />
         
          </SwiperSlide>
        </Swiper>
    
      </div>

  
    </section>
  );
}

export default Slider;
