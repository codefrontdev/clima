const Hero = () => {
  return (
    <div
      className="relative -top-10 flex items-center  bg-[url('/images/hero2.jpeg')] bg-no-repeat bg-cover w-full h-[80vh] -z-20 after:absolute after:w-full after:h-full
   after:bg-[#083747c0] after:z-0"
    >
      <div className="absolute z-10 w-1/2 mr-16">
        <h2 className="text-[#e1e4e7] font-bold text-heading1">
          بيوت التنفيذ <span>لأعمال</span> التكييف
        </h2>
        <p className="text-[#7c8c91] font-bold text-paragraph2 line-clamp-2">
          خبراء التكييف بالمملكة منذ30 عاما نخطو بخطى ثابته لنواكب التطور
          العمراني المستمر و المتسارع الذي تعيشه مملكتنا الحبيبة
        </p>
        <button></button>
      </div>
    </div>
  );
};

export default Hero;
