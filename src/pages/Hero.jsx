import { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import Paragraph from "../components/Paragraph";

import hero from "../../assets/Hero Section image.png";
import hero2 from "../../assets/Gallery/image.jpg";
import hero3 from "../../assets/Gallery/image 42.png";

const images = [hero, hero2, hero3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(true);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  function toggleNavbar() {
    setIsClicked((prev) => !prev);
  }

  return (
    <section className="h-screen w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {!isClicked && (
        <div
          className={`absolute top-[25%] right-0 bg-black text-white w-full z-20`}
        >
          <header className="w-full">
            <nav className="py-10 font-semibold flex flex-col gap-4 text-xl justify-center items-center uppercase">
              <a className="px-2 w-[80%] border-b-2 text-center" href="#">
                Home
              </a>
              <a className="px-2 w-[80%] border-b-2 text-center" href="#">
                Overview
              </a>
              <a className="px-2 w-[80%] border-b-2 text-center" href="#">
                Highlights
              </a>
              <a className="px-2 w-[80%] border-b-2 text-center" href="#">
                Amenties
              </a>
              <a className="px-2 w-[80%] border-b-2 text-center" href="#">
                Location
              </a>
              <a className="px-2 w-[80%] border-b-2 text-center" href="#">
                Contact US
              </a>
            </nav>
          </header>
        </div>
      )}

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 flex justify-center items-center">
        <div className="absolute top-10 w-full px-10 text-white flex flex-col justify-center items-center">
          <div className="w-full flex max-md:justify-end justify-between items-center">
            <img src={logo} alt="Logo" className="max-md:hidden w-[30%]" />
            <button
              onClick={toggleNavbar}
              className=" z-50 max-md:block hidden text-[24px] text-black"
            >
              {isClicked ? (
                <i className="fa-solid fa-bars"></i>
              ) : (
                <i className="fa-solid fa-xmark"></i>
              )}
            </button>
            <nav className="py-10 font-semibold flex justify-between items-center uppercase max-md:hidden text-black">
              <a className="px-2" href="#">
                Home
              </a>
              <a className="px-2" href="#">
                Overview
              </a>
              <a className="px-2" href="#">
                Highlights
              </a>
              <a className="px-2" href="#">
                Amenties
              </a>
              <a className="px-2" href="#">
                Location
              </a>
              <a className="px-2" href="#">
                Contact US
              </a>
            </nav>
          </div>
          <img src={logo} alt="Logo" className="max-md:block hidden" />
          <Paragraph className="text-center text-black font-cinzel font-[400] text-[25px]">
            Elegante - Exclusivo
            <strong className="text-primaryYellow font-cinzel">
              - Extraordinário
            </strong>
          </Paragraph>
          <Paragraph className="text-black cinzel">
            Riverview Luxury Apartment complex
          </Paragraph>
          <div className="flex justify-center">
            <p className="border-2 border-black text-black rounded-md text-center uppercase font-semibold max-md:text-[12px] p-2">
              Exclusive 3BHK (1688 sq.ft. - ₹2.5 Cr) & 4BHK (2304 sq.ft. - ₹3.5
              Cr) palatial estates.
            </p>
          </div>
          <div className="flex justify-center -mt-2">
            <Paragraph className="cinzel font-extrabold text-black">
              Baner - hinjawadi road, pune near hinjawadi, phase - 1
            </Paragraph>
          </div>
          <div className="w-full flex justify-start items-start max-md:hidden">
            <button className="bg-white text-black p-2 rounded-lg font-bold uppercase">
              Download Broucher
            </button>
          </div>
        </div>
        <div className="w-full hidden max-md:flex justify-start items-start max-lg:justify-start max-lg:items-center max-md:absolute max-md:bottom-8 max-md:left-4">
          <button className="bg-white text-black p-2 rounded-lg font-bold uppercase">
            Download Broucher
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;