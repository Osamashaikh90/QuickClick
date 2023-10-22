// import React from 'react'
import HeroSection from "../Components/HeroSection";
// import { useProductContext } from "./context/productContext";

const About = () => {
  // const { myName } = useProductContext;
  // console.log(myName);
  const data = {
    name: "QuickClick E-Commerce",
  };
  return (
    <>
      {/* {myName} */}
      <HeroSection
        myData={data.name}
        imgsrc="/images/fashion.jpg"
        top="10rem"
      />
    </>
  );
};

export default About;
