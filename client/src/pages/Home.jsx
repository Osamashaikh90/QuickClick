// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { styled } from "styled-components";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeaturedProducts from "../components/product/FeaturedProducts";
const Home = () => {
  const data = {
    name: "QickClick",
  };
  const Home = styled.section``;
  return (
    <>
      <Home>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/images/slider4.jpg"
              style={{ width: "100%", height: "400px" }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/slider2.jpg"
              style={{ width: "100%", height: "400px" }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/slider3.jpg"
              style={{ width: "100%", height: "400px" }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/slider.jpg"
              style={{ width: "100%", height: "400px" }}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <HeroSection myData={data.name} imgsrc="/images/3d.png" top="0rem" />
        <FeaturedProducts />
        <Services />
        <Trusted />
      </Home>
    </>
  );
};

export default Home;
