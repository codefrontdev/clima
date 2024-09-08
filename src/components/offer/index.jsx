import React from "react";
import Title from "../comp/Title";
import Image from "next/image";
import { TbAirConditioning } from "react-icons/tb";
import { WiSnowflakeCold } from "react-icons/wi";

const Offer = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4 lg:m-20">
      {/* title */}
      <Title text={"ماذا نقدم"} className={"text-3xl after:w-[50%]"} />
      {/* content */}
      <div className="flex my-10 flex-col md:flex-row">
        {/* left */}
        <div className="flex-1">
          <Image src={""} alt="offer" />
        </div>
        {/* right */}
        <div className="flex-1 flex flex-wrap gap-y-10">
          <h3 className="flex gap-x-4 items-center md:w-1/2 w-full font-semibold text-darkBlue">
            <div className="p-2 text-lightBlue rounded-full border-2 border-lightBlue">
              <TbAirConditioning size={32} />
            </div>
            مخطط التأسيس و أعمال التكييف
          </h3>
          <h3 className="flex gap-x-4 items-center md:w-1/2 w-full font-semibold text-darkBlue">
            <div className="p-2 text-lightBlue rounded-full border-2 border-lightBlue">
              <WiSnowflakeCold size={40} />
            </div>
            بناء مخطط التكييف
          </h3>
          <h3 className="flex gap-x-4 items-center md:w-1/2 w-full font-semibold text-darkBlue">
            <div className="p-2 text-lightBlue rounded-full border-2 border-lightBlue">
              <TbAirConditioning size={32} />
            </div>
            الاشراف على المشاريع القائمة
          </h3>
          <h3 className="flex gap-x-4 items-center md:w-1/2 w-full font-semibold text-darkBlue">
            <div className="p-2 text-lightBlue rounded-full border-2 border-lightBlue">
              <WiSnowflakeCold size={40} />
            </div>
            توريد وتركيب فس وقت قصير
          </h3>
          <h3 className="flex gap-x-4 items-center md:w-1/2 w-full font-semibold text-darkBlue">
            <div className="p-2 text-lightBlue rounded-full border-2 border-lightBlue">
              <TbAirConditioning size={32} />
            </div>
            دراسة المشاريع و تنفيذها
          </h3>
          <h3 className="flex gap-x-4 items-center md:w-1/2 w-full font-semibold text-darkBlue">
            <div className="p-2 text-lightBlue rounded-full border-2 border-lightBlue">
              <WiSnowflakeCold size={40} />
            </div>
            حساب التكاليف ودفعات منطقية وسهلة
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full justify-between gap-10 my-10">
        <div className="h-48 flex flex-col justify-center items-center bg-blue-100">
          <span className="text-lightBlue font-black text-4xl">10</span>
          <h3 className="font-bold text-darkBlue">مساعد فني </h3>
        </div>
        <div className="h-48 flex flex-col justify-center items-center bg-blue-100">
          <span className="text-lightBlue font-black text-4xl">15</span>
          <h3 className="font-bold text-darkBlue">فني مدرب</h3>
        </div>
        <div className="h-48 flex flex-col justify-center items-center bg-blue-100">
          <span className="text-lightBlue font-black text-4xl">5</span>
          <h3 className="font-bold text-darkBlue">مشرف صيانة</h3>
        </div>
        <div className="h-48 flex flex-col justify-center items-center bg-blue-100">
          <span className="text-lightBlue font-black text-4xl">5</span>
          <h3 className="font-bold text-darkBlue">مهندسين صيانة</h3>
        </div>
      </div>
    </div>
  );
};

export default Offer;
