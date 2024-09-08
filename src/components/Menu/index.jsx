import Link from "next/link";
import { TbWorld } from "react-icons/tb";

const Menu = () => {
  return (
    <div className="w-full relative">
      <div
        className="relative flex lg:justify-between justify-center items-center bg-white w-full h-20 
        rounded-b-3xl before:absolute before:w-full before:h-10
        before:bottom-[-10px] before:bg-lightBlue before:rounded-b-3xl before:-z-10"
      >
        {/* logo */}
        <div className="lg:hidden">Air Conditioner</div>
        <div className="w-full hidden lg:flex justify-between">
          <ul className="gap-10 mr-10 flex">
            <li className="">
              <Link href={"#"} className="font-bold text-darkBlue">
                الرئيسية
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className="font-bold text-darkBlue">
                خدماتنا
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className="font-bold text-darkBlue">
                من نحن
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className="font-bold text-darkBlue">
                أعمالنا
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className="font-bold text-darkBlue">
                تواصل معنا
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className="font-bold text-darkBlue">
                المدونة
              </Link>
            </li>
          </ul>
          <div className="flex gap-x-20 ml-10 items-center">
            <TbWorld size={32} />
            <button className="p-3 bg-lightBlue text-white font-bold rounded-sm">
              تواصل معنا
            </button>
          </div>
        </div>
        <div className="triangle-shape-1 absolute z-10 bottom-[-40px] bg-white w-full h-10"></div>
        <div className="triangle-shape-1 absolute bottom-[-50px] bg-lightBlue w-full h-10"></div>
      </div>
    </div>
  );
};

export default Menu;
