"use client";
import Image from "next/image";
import Title from "../comp/Title";
// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const OurProjects = () => {

  const data = [
    "/images/clima1.jpg",
    "/images/clima2.jpg",
    "/images/clima3.jpg",
    "/images/clima4.jpg",
    "/images/clima5.jpg",
    "/images/clima6.jpg",
    "/images/clima7.jpg",
    "/images/clima8.jpg",
    "/images/clima9.jpeg",
  ];
  return (
    <div className="flex flex-col justify-center items-center m-4 lg:m-20">
      <Title text={"نماذج من اعمالنا"} className={"text-3xl after:w-[50%]"} />
      <div className="m-4 lg:m-20 w-full lg:max-w-[800px] h-[600px] rounded-xl overflow-hidden p-0 bg-red-700 relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={1}
          allowSlideNext
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Controller, Navigation, Pagination]}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[600px]">

              <Image
                className="object-cover"
                src={item}
                alt="Client's Image"
                fill
                />
                </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev p-7 bg-[#f8f8f8b7] rounded-full"></div>
        <div className="swiper-button-next p-7 bg-[#f8f8f8b7] rounded-full"></div>
      </div>
    </div>
  );
};

export default OurProjects;
