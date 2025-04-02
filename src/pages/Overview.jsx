import Paragraph from "../components/Paragraph";
import Buttons from "../components/Buttons";

const Overview = () => {
  return (
    <section className="min-h-[100vh] w-full p-0 m-0 flex flex-col justify-evenly items-center bg-primaryBackground py-10 md:py-20 gap-8 md:gap-12">
    <Buttons>Overview</Buttons>
    <Paragraph className="text-center px-4 md:px-12 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]">
      <strong className="text-primaryYellow">
        Welcome to Godrej River Royale,
      </strong>
      crafted by Godrej Properties, recognized as one of the top developers in Pune,  
      presenting the city's first luxury apartment complex. Situated near Hinjawadi Phase 1,  
      this 4-acre riverside marvel is not just a home; it's a lifestyle beyond imagination.
    </Paragraph>
    
    <Paragraph className="text-center px-4 md:px-12 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]">
      The riverview aspect adds an enchanting touch, allowing residents to wake up to the  
      soothing melodies of the river and bask in the beauty of nature from the comfort of their homes.
    </Paragraph>

    <Paragraph className="text-center px-4 md:px-12 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]">
      Offering a selection of meticulously designed 3 and 4 BHK ultra-luxury apartments near Hinjawadi,  
      Godrej Properties presents a project that doesn't just raise the bar—it sets a new standard  
      for luxurious flats in Pune.
    </Paragraph>
  </section>
  
  );
};

export default Overview;
