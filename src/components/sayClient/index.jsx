"use client";
import Title from "../comp/Title";
// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { TbVectorTriangle } from "react-icons/tb";

const SayClient = () => {
  const data = [
    {
      id: 1,
      src: "/images/client1.jpg",
      username: "ابو طلال",
      address: "السعودية",
      comment:
        "حياكم الله , تجربة جيدة و الخدمة كانت رائعة التكييفات ذات جودة جيدة و خدمة العملاء جيدة سوف سوف اكرر التجربة مرة اخرى حياكم الله,  تجربة جيدة و الخدمة كانت رائعة التكييفات ذات جودة جيدة و خدمة العملاء جيدة سوف سوف اكرر التجربة مرة اخرى حياكم الله, ",
      rating: 5,
    },
    {
      id: 2,
      src: "/images/client2.jpg",
      username: "ابو طلال",
      address: "السعودية",
      comment:
        "حياكم الله , تجربة جيدة و الخدمة كانت رائعة التكييفات ذات جودة جيدة و خدمة العملاء جيدة سوف سوف اكرر التجربة مرة اخرى حياكم الله,  تجربة جيدة و الخدمة كانت رائعة التكييفات ذات جودة جيدة و خدمة العملاء جيدة سوف سوف اكرر التجربة مرة اخرى حياكم الله, ",
      rating: 3,
    },
    {
      id: 3,
      src: "/images/client3.jpg",
      username: "ابو طلال",
      address: "السعودية",
      comment:
        "حياكم الله , تجربة جيدة و الخدمة كانت رائعة التكييفات ذات جودة جيدة و خدمة العملاء جيدة سوف سوف اكرر التجربة مرة اخرى حياكم الله,  تجربة جيدة و الخدمة كانت رائعة التكييفات ذات جودة جيدة و خدمة العملاء جيدة سوف سوف اكرر التجربة مرة اخرى حياكم الله, ",
      rating: 2,
    },
    {
      id: 4,
      src: "/images/client4.jpg",
      username: "ابو طلال",
      address: "السعودية",
      comment:
        "حياكم الله , تجربة جيدة و الخدمة كانت رائعة التكييفات ذات جودة جيدة و خدمة العملاء جيدة سوف سوف اكرر التجربة مرة اخرى حياكم الله,  تجربة جيدة و الخدمة كانت رائعة التكييفات ذات جودة جيدة و خدمة العملاء جيدة سوف سوف اكرر التجربة مرة اخرى حياكم الله, ",
      rating: 5,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center  py-10 bg-blue-50">
      <Title
        text={"ماذا قال عملائنا عنا"}
        className={"text-3xl after:w-[50%]"}
      />

      <div className="w-full md:p-0 p-8 rounded-xl relative flex items-center justify-center">
        <Swiper
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            1020: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
          
          }}
          spaceBetween={20}
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          navigation={window.innerWidth < 768}
          centeredSlidesBounds={true}
          modules={[Autoplay, Controller, Navigation, Pagination]}
        >
          {data.map((item, i) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => {
                console.log(isActive);
                return (
                  <div
                    className={`${
                      isActive ? " p-10 " : "p-5 gap-5"
                    } md:mx-0 mx-1 rounded-md shadow-[0_1px_5px_1px] bg-white shadow-slate-400 my-10 flex  flex-col`}
                  >
                    <div className={`${isActive ? "mb-5" : ""} flex gap-3`}>
                      <Image
                        className=" object-cover rounded-full bg-green-300"
                        src={item.src}
                        alt="Client's Image"
                        width={50}
                        height={50}
                      />
                      <div className="">
                        <h3 className="font-bold">{item.username}</h3>
                        <span className="text-[12px] text-gray-400 font-semibold">
                          {item.address}
                        </span>
                      </div>
                    </div>
                    <p
                      className={`${
                        isActive ? "font-medium  text-[15.7px]" : "font-normal"
                      }  text-gray-400`}
                    >
                      {item.comment}
                    </p>
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SayClient;
