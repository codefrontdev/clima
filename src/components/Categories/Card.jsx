import Link from "next/link";
import { TfiArrowTopLeft } from "react-icons/tfi";

const Card = ({ title, disc }) => {
  return (
    <div className="w-[245px] rounded-lg shadow-[0_0_8px] gap-5 shadow-gray-400 flex flex-col items-center p-5">
      <div className="w-2 h-2 p-10 shadow-[0_0_8px] shadow-gray-400 rounded-full"></div>
      <h2 className="text-darkBlue font-bold">{title}</h2>
      <p className="font-semibold text-center text-gray-default text-[14px]">
        {disc}
      </p>
      <Link
        href={"#"}
        className="flex font-semibold gap-2 mt-10 text-lightBlue"
      >
        المزيد
        <TfiArrowTopLeft size={20} />
      </Link>
    </div>
  );
};

export default Card;
