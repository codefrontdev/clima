"use client";
import Title from "../comp/Title";
import { Autoplay, Navigation, Pagination, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

const Blog = () => {
  return (
    <div className="lg:mx-20 mx-4 gap-10 flex flex-col items-center py-20">
      <Title text={"المدونة"} className={"text-3xl after:w-[60%]"} />
      {/* content */}
      <div className="w-full flex flex-wrap justify-center gap-5">
        <Swiper
          centeredSlides={true}
          slidesPerView={3}
          breakpoints={{
            // 1020: {
            //   slidesPerView: 2.,
            //   spaceBetween: 15,
            // },
            900: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          spaceBetween={20}
          // pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          centeredSlidesBounds={true}
          loop={true}
        >
          {[1, 2, 3, 4].map((_, i) => {
            return (
              <SwiperSlide key={i}>
                <Card num={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <Card />
              <Card />
              <Card />
              <Card /> */}
      </div>
    </div>
  );
};

export default Blog;
