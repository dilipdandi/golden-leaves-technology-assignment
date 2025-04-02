import Buttons from "../components/Buttons";
import Paragraph from "../components/Paragraph";
import amentiseDynamicData from "../data";
import Cards from "../components/Cards";

const Amenties = () => {
  return (
    <section className="h-auto w-full p-4 flex flex-col gap-6 md:gap-10 lg:gap-16 justify-evenly items-center bg-primaryBackground">
  <Buttons>Amenities</Buttons>
  <Paragraph className="text-center max-w-[90%] md:max-w-[70%]">
    Wellness and elegance come together at Godrej River Royale, offering more than just amenities –  
    each a testament to the exclusivity that embodies the spirit of a regal lifestyle.
  </Paragraph>
  
  <div className="flex flex-col justify-center items-center w-full">
    {Object.entries(amentiseDynamicData).map(([key, values]) => {
      const header = key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase();
      return (
        <div key={key} className="flex flex-col gap-5 items-center w-full">
          <h2 className="text-center font-thin text-xl md:text-2xl">{header}</h2>
          <div className="flex flex-wrap justify-center md:justify-around items-center gap-4 w-full">
            {values.map((element, idx) => (
              <Cards key={idx} name={element.name} img={element.img} />
            ))}
          </div>
        </div>
      );
    })}
  </div>
</section>

  );
};

export default Amenties;