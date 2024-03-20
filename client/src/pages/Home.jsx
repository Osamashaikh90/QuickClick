// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper";
import { styled } from "styled-components";
import HeroSection from "../Components/HeroSection";
import Services from "../Components/Services";
import Trusted from "../Components/Trusted";
import FeaturedProducts from "../Components/product/FeaturedProducts";

import useFetch from "../hooks/useFetch";
const Home = () => {
  const [{apiData}] = useFetch()
  const data = {
    name: "QuickClick",
  };
  const Home = styled.section`
  .username{
  position: absolute;
  text-transform: capitalize;
  left: 10%;
  top: 60%;
  
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  font-family: "Merriweather", serif;
  font-weight: bold;
  /* color: #006b65; */
  color: #5356FF;
  font-size: 4rem;
  text-shadow: 2px 2px 6px #378CE7;

}
.mySwiper{
border-radius: 8px;
}
  `;
  return (
    <>
      <Home>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={1000}
          autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/images/slider4.jpg"
              style={{ width: "100%", height: "400px" ,position:"relative"}}
              alt=""
            />
            <span className="username">Welcome {apiData?.firstname || apiData?.username}</span>
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
              src="/images/fashion.jpg"
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
