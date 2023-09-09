import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import "./Slider.css"

// import required modules
import {Autoplay, Pagination,EffectCoverflow } from "swiper";
import { width } from "@mui/system";


export default function App() {
  return (
    <>
  <div style={{justifyContent:"center",alignItems:"center",display:"flex", position:"absolute",overflow:"hidden",width:"100vw",top:"20%"}}>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className="mySwiper"
      > */}
       <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./images/sc1.jpg" width="100%"/></SwiperSlide>
        <SwiperSlide><img src="./images/sc4.jpg" width="100px"/></SwiperSlide>
        <SwiperSlide><img src="./images/sc3.jpg" width="100px"/></SwiperSlide>
        <SwiperSlide><img src="./images/sc5.jpg" width="100px"/></SwiperSlide>
        <SwiperSlide><img src="./images/sc6.jpg" width="100px"/></SwiperSlide>
        <SwiperSlide><img src="./images/sc2.jpg" width="100px"/></SwiperSlide>
       
      </Swiper>
    </div>
    </>
  );
}
