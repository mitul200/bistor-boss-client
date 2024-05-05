/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// import slide1 from "../../../assets/home/slide1";
// import slide2 from "../../../assets/home/slide2";
// import slide3 from "../../../assets/home/slide3";
// import slide4 from "../../../assets/home/slide4";
// import slide5 from "../../../assets/home/slide5";

import slide1 from "../../..//assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import img6 from "../../../assets/home/06.png";

const Categry = () => {
  return (
    <section>
      <SectionTitle
        heading={"---From 11:00am to 10:00pm---"}
        subHeading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="text-3xl uppercase font-semibold text-white -mt-16 text-center ">
            {" "}
            salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-3xl uppercase font-semibold text-white -mt-16 text-center ">
            {" "}
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-3xl uppercase font-semibold text-white -mt-16 text-center ">
            {" "}
            soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-3xl uppercase font-semibold text-white -mt-16 text-center ">
            {" "}
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-3xl uppercase font-semibold text-white -mt-16 text-center ">
            {" "}
            Salads
          </h2>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Categry;
