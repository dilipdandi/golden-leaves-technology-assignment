import hero2 from "../../assets/Gallery/Hero2.jpg";
import logo from "../../assets/Logo.png";
import Buttons from "../components/Buttons";
import Paragraph from "../components/Paragraph";

const Hero = () => {
  return (
<section className="h-screen w-full max-md:w-[100vw] p-0 m-0 bg-hero bg-no-repeat bg-cover bg-center">
  <div className="max-sm:flex hidden w-full h-full bg-no-repeat bg-cover bg-center relative  ">
    <img src={hero2} alt="HeroImg" />
    <div className="absolute top-16 w-[full] px-10 items-center ">
    <img src={logo} alt="Logo" />
    <h2 className="text-center pt-2 cinzel-decorative-regular">Elegante - Exclusivo <strong className="text-primaryYellow">- Extraordinário</strong></h2>
    <div className="flex flex-col -mt-12">
    <Paragraph>Riverview Luxury Apartment complex</Paragraph>
    </div>
    <div className="flex justify-center mt-4">
      <p className="inline-block border-2 border-black rounded-md text-center py-2 uppercase font-semibold max-md:text-[12px]">
        Exclusive 3BHK (1688 sq.ft. - ₹2.5 Cr) & 4BHK (2304 sq.ft. - ₹3.5 Cr) palatial estates.
      </p>
    </div>
    <div className="flex justify-center -mt-2 ">
      <Paragraph className="cinzel font-extrabold">Baner - hinjawadi road, pune near hinjawadi, phase - 1</Paragraph>
    </div>
    </div>
    <div className="absolute bottom-0 lef-0 m-8">
    <button className="bg-white text-black p-2 rounded-lg font-semibold">Download Broucher</button>
    </div>
  </div>
</section>
  );
};

export default Hero;
