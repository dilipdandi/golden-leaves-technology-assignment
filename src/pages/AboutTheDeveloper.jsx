import { useEffect, useState } from "react";
import aboutDeveloperData from "../aboutDeveloperData"; // adjust the path if needed
import Buttons from "../components/Buttons";
import Paragraph from "../components/Paragraph";

const AboutTheDeveloper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % aboutDeveloperData.length
      );
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="h-auto min-h-[100vh] w-full bg-plainBackground bg-no-repeat bg-cover bg-center max-md:bg-center flex flex-col justify-start items-center mt-10 pt-24 px-4 sm:px-8 overflow-hidden">
      <Buttons>About The Developer</Buttons>

      <div className="text-white flex flex-col justify-center items-center text-center">
        <Paragraph>
          <strong className="text-primaryYellow font-bold text-2xl sm:text-3xl">
            Step into the legacy
          </strong>{" "}
          <strong> Uneviled by Godrej Properties</strong> at River Royale, where
          every detail reflects centuries of excellence. As one of the top &
          well-known builders of India & Pune, we take pride in crafting dreams
          that stand the test of time. River Royale is not just a project; it's
          an expression of visionary craftsmanship, showcasing our commitment to
          pioneering luxury in the realm of real estate.
        </Paragraph>
      </div>

      <p className="cinzel text-primaryYellow text-center mt-12 sm:mt-24 text-5xl max-md:text-3xl font-light">
        FROM THE MAKERS OF
      </p>

      {/* Sliding Area */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            width: `${aboutDeveloperData.length * 100}%`,
            transform: `translateX(-${
              currentIndex * (100 / aboutDeveloperData.length)
            }%)`,
          }}
        >
          {aboutDeveloperData.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center items-center py-20"
              style={{ width: "20%" }}
            >
              <div className="flex flex-col justify-center items-center relative w-full ">
                <img
                  className="w-[90%] sm:w-[70%] h-auto border-4 sm:border-8"
                  src={item.image}
                  alt={`slide-${index}`}
                />
                <p className="cinzel bg-primaryYellow text-2xl max-md:text-[12px] absolute w-[85%] sm:w-[65%] text-black text-center bottom-1 sm:bottom-2 font-light px-2 uppercase">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTheDeveloper;
