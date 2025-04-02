import Buttons from "../components/Buttons";
import Paragraph from "../components/Paragraph";
import HighlightImage from "../components/HighlightImage";

const Highlights = () => {
  return (
    <section className="h-auto w-full p-0 m-0 flex flex-col justify-evenly items-center py-14 gap-16 md:gap-[6rem] bg-primaryBackground">
  <Buttons>Highlights</Buttons>
  
  <Paragraph className="text-center px-4 md:px-12 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]">
    At Godrej River Royale, we believe in elevating comfort to an art form.  
    Our Space Max Homes redefine spacious living in the micro-market, ensuring that every square foot  
    is an expression of comfort and opulence.
  </Paragraph>
  
  <div className="w-full flex justify-center">
    <HighlightImage className="max-w-full md:max-w-[80%] lg:max-w-[60%]"/>
  </div>

  <Paragraph className="text-center px-4 md:px-12 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]">
    Our XXL homes redefine opulence, offering 3 BHK luxury apartments spanning 1688 sq.ft. and  
    4 BHK luxury apartments extending to 2304 sq.ft. The 11ft floor-to-floor height creates an ambiance  
    of grandeur, and spacious balconies provide panoramic views, ensuring every moment spent at these  
    elegant apartments is a moment of pure luxury. These ultimate comfort zones are Vastu compliant,  
    ensuring harmony in every corner. The facade, reaching an awe-inspiring 140+ meters in height,  
    stands as a testament to the architectural brilliance that defines Godrej River Royale.
  </Paragraph>

  <Paragraph className="text-center px-4 md:px-12 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]">
    Experience opulent living in premium apartments at Godrej River Royale,  
    the new launch from the best builder in Pune.
  </Paragraph>
</section>

  );
};

export default Highlights;
