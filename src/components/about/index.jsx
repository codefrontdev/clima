import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Title from "../comp/Title";

const About = () => {
  return (
    <div className="lg:m-20 m-4">
      <div className="flex mb-20 flex-col-reverse lg:flex-row-reverse gap-10">
        {/* left  */}
        <div className="flex-1 flex gap-10 flex-col pl-5">
          <Title text={"من نحن"} className={"after:w-[80%]"} />
          <p className=" text-darkBlue font-bold tracking-widest leading-loose text-[17px]">
            تاسست بيوت التنفيذ لتغطية حاجة السوق لشركات احترافية في مجال أنظمة
            التكييف و التبريد. حيث قامت على أسس ثابتة و معايير عالمية و على مبدأ
            الاحسان في العمل لتقديم تجربة فريدة و خدمة متميزة لعملائها
          </p>
          <div className="flex flex-col">
            <span className="flex items-center gap-3 text-gray-dark">
              <IoMdCheckmarkCircleOutline className="text-lightBlue" />
              اسس ثابة و معايير عالمية
            </span>
            <span className="flex items-center gap-3 text-gray-dark">
              <IoMdCheckmarkCircleOutline className="text-lightBlue" />
              تقدم تجربة فريدة
            </span>
            <span className="flex items-center gap-3 text-gray-dark">
              <IoMdCheckmarkCircleOutline className="text-lightBlue" />
              تقدم خدمة متميزة لعملائها
            </span>
          </div>
          <Link
            href={"#"}
            className="py-2 px-8 w-max bg-lightBlue text-white font-bold rounded-md"
          >
            المزيد
          </Link>
        </div>
        {/* right */}
        <div className="lg:flex-1 w-full flex flex-col-reverse gap-5 h-[80vh]">
          <div className="lg:flex-1 flex lg:flex-col gap-5">
            <div className="relative w-full h-full">
              <Image src={"/images/clima9.jpg"} fill className="" />
            </div>
            <div className="w-full  flex items-center justify-center bg-gradient-to-tr from-[#376d7e] to-[#32c6fc]">
              <h4 className="font-semibold text-white text-xl flex flex-col items-center justify-center text-center gap-5">
                متميزون لاكثر من
                <span className="bg-white w-max py-2 px-10 text-lightBlue text-4xl">
                  15+
                </span>
                في المجال
              </h4>
            </div>
          </div>
          <div className="lg:flex-1 relative h-1/2 w-full">
            <Image src={"/images/clima4.jpg"} fill className="w-full h-full" />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="grid lg:grid-cols-3 grid-cols-2 justify-between gap-10 ">
        <div className=" h-20 bg-blue-50 flex items-center justify-center border-dashed border-4 border-lightBlue">
          <h3 className="text-darkBlue font-semibold">ضمان سنة على التركيب</h3>
        </div>
        <div className=" h-20 bg-blue-50 flex items-center justify-center border-dashed border-4 border-lightBlue">
          <h3 className="text-darkBlue font-semibold">ضمان سنتين من الوكيل</h3>
        </div>
        <div className=" col-span-2 h-20 bg-blue-50 flex items-center justify-center border-dashed border-4 border-lightBlue">
          <h3 className="text-darkBlue font-semibold">
            ضمان 5 سنوات للكومبرسور من الوكيل
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
