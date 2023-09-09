import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import "./Slider2.css"

// import required modules
import {Autoplay, Pagination } from "swiper";


export default function App() {
  return (
    <>
      <Swiper
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
      >
        <SwiperSlide><img src="./images/f.jpg" width="100%"/></SwiperSlide>
        <SwiperSlide><img src="./images/e.jpg" width="100%"/></SwiperSlide>
        <SwiperSlide><img src="./images/a.jpg" width="100%"/></SwiperSlide>
        <SwiperSlide><img src="./images/b.jpg" width="100%"/></SwiperSlide>
        <SwiperSlide><img src="./images/c.jpg" width="100%"/></SwiperSlide>
        <SwiperSlide><img src="./images/d.jpg" width="100%"/></SwiperSlide>
       
      </Swiper>
    </>
  );
}