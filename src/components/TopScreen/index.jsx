import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";

const TopScreen = () => {
  return (
    <div className="w-full hidden lg:flex  justify-between items-center pb-10 px-10">
      {/* logo */}
      <div className="">Air Conditioner</div>
      {/* contact tel */}
      <div className="flex items-center gap-5">
        <BsFillTelephoneFill className="transform rotate-[250deg]" />
        <div className="cursor-pointer">
          <h3 className="font-bold text-lightBlue">تواصل معنا</h3>
          <p>021-12345678</p>
        </div>
      </div>
      {/* social media */}
      <div className="flex gap-2">
        <span className="rounded-full border-2 border-[#949494] p-1 cursor-pointer">
          <TiSocialFacebook size={20} color="#949494" />
        </span>
        <span className="rounded-full border-2 border-[#949494] p-1 cursor-pointer">
          <TiSocialLinkedin size={20} color="#949494" />
        </span>
        <span className="rounded-full border-2 border-[#949494] p-1 cursor-pointer">
          <TiSocialInstagram size={20} color="#949494" />
        </span>
        <span className="rounded-full border-2 border-[#949494] p-1 cursor-pointer">
          <TiSocialTwitter size={20} color="#949494" />
        </span>
      </div>
    </div>
  );
};

export default TopScreen;
