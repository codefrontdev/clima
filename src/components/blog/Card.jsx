import Image from "next/image";
import { TfiArrowTopLeft } from "react-icons/tfi";

const Card = ({ num }) => {
  console.log(num)
  return (
    <div className="max-w-[300px] w-full flex flex-col gap-3">
      <div className="relative w-full h-[180px]">
        <Image src="/image/clima3.jpg" alt="" className="w-full h-full" fill />
      </div>
      <span className="text-darkBlue font-semibold">{num} يناير . محمد احمد</span>
      <h3 className="font-black text-darkBlue flex justify-between">
        التكييف المركزي ام التكييف المخفي؟
        <TfiArrowTopLeft className="text-lightBlue " size={20} />
      </h3>
      <p className="text-gray-default text-[12px] font-semibold">
        هذا النص هم مثال لنص يمكن أن يستبدل في نفس المساحة . لقد تم توليد هذا
        النص من مولد النص العربي
      </p>
    </div>
  );
};

export default Card;
