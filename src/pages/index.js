import Head from 'next/head';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Home() {
  const [titleArray, setTitleArray] = useState(["A1", "A2", "A3"])
  const [selectedTitle, setSelectedTitle] = useState("A1")
  const handleNextButtonClick = () => {
    if (selectedTitle === "A1") {
      setSelectedTitle("A2")

    }
    if (selectedTitle === "A2") {
      setSelectedTitle("A3")

    }
    if (selectedTitle === "A3") {
      setSelectedTitle("A1")

    }
  };

  const handlePrevButtonClick = () => {
    if (selectedTitle === "A1") {
      setSelectedTitle("A3")

    }
    if (selectedTitle === "A2") {
      setSelectedTitle("A1")

    }
    if (selectedTitle === "A3") {
      setSelectedTitle("A2")

    }
  };
  return (
    <div className='relative'>
      <Head><title>{selectedTitle}</title></Head>
      <Swiper navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }} modules={[Navigation]} >
        {titleArray.map((element, index) => (
          <SwiperSlide key={index}><div className='h-[100px] flex justify-center items-center bg-white text-dark font-[800] text-[32px]'>{element}</div></SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next absolute right-0" onClick={handleNextButtonClick}></div>
      <div className="swiper-button-prev absolute left-0" onClick={handlePrevButtonClick}></div>
    </div>
  );
}