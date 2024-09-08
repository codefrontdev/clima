import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-darkBlue dark:bg-gray-900 w-full flex justify-between p-10 text-white">
      {/* logo and social media */}
      <div className="flex gap-5 justify-between items-center py-8 px-12">
        <div className="flex flex-col gap-5">
          {/* Logo Image */}
          <h3>Air Conditioner</h3>
          <p className="text-gray-default text-[12px] font-semibold">
            هذا النص هم مثال لنص يمكن أن يستبدل في نفس المساحة . لقد تم توليد
            هذا النص من مولد النص العربي
          </p>
          {/* social media */}
          <div className="flex gap-2">
            <span className="rounded-full border-2 border-[white] p-1 cursor-pointer">
              <TiSocialFacebook size={20} color="white" />
            </span>
            <span className="rounded-full border-2 border-[white] p-1 cursor-pointer">
              <TiSocialLinkedin size={20} color="white" />
            </span>
            <span className="rounded-full border-2 border-[white] p-1 cursor-pointer">
              <TiSocialInstagram size={20} color="white" />
            </span>
            <span className="rounded-full border-2 border-[white] p-1 cursor-pointer">
              <TiSocialTwitter size={20} color="white" />
            </span>
          </div>
        </div>
      </div>
      {/* important links */}
      <div className="max-w-[250px] w-full">
        <h3 className="py-5 text-xl font-bold">روابط مهمة</h3>
        <ul className="list-disc text-sm flex flex-col gap-4 mx-5">
          <li className="">
            <Link href={"#"}>من نحن</Link>
          </li>
          <li>
            <Link href={"#"}>سياسة الخصوصية</Link>
          </li>
          <li>
            <Link href={"#"}>شروط الاستخدام</Link>
          </li>
          <li>
            <Link href={"#"}>سياية الاستبدال</Link>
          </li>
        </ul>
      </div>
      {/* about company */}
      <div className="max-w-[250px] w-full">
        <h3 className="py-5 text-xl font-bold">عن الشركة</h3>
        <ul className="list-disc text-sm flex flex-col gap-4 mx-5">
          <li>
            <Link href={"#"}>عن الشركة</Link>
          </li>
          <li>
            <Link href={"#"}>مسؤوليتنا</Link>
          </li>
          <li>
            <Link href={"#"}>الفروع</Link>
          </li>
          <li>
            <Link href={"#"}>علاقات المستثمرين</Link>
          </li>
          <li>
            <Link href={"#"}>المركز الاعلامي</Link>
          </li>
        </ul>
      </div>
      {/* help */}
      <div className="max-w-[250px] w-full">
        <h3 className="py-5 text-xl font-bold">المساعدة</h3>
        <ul className="list-disc text-sm flex flex-col gap-4 mx-5">
          <li>
            <Link href={"#"}>مركز المساعدة</Link>
          </li>

          <li>
            <Link href={"#"}>اتصل بنا</Link>
          </li>

          <li>
            <Link href={"#"}>كيفية عمل طلب شراء</Link>
          </li>

          <li>
            <Link href={"#"}>طرق الدفع</Link>
          </li>

          <li>
            <Link href={"#"}>سياسة الشحن</Link>
          </li>

          <li>
            <Link href={"#"}>سياسة الاسترجاع والاسترداد</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
