import Buttons from '../components/Buttons'
import Paragraph from '../components/Paragraph';
import locationMap from "../../assets/Location Map.png";

const LocationPage = () => {
  return (  
    <section className="h-auto min-h-[100vh] w-full p-4 flex flex-col justify-evenly items-center text-center">
  <Buttons>Location</Buttons>
  <Paragraph className="max-w-[90%] md:max-w-[70%]">
    Godrej River Royale is strategically nestled along the Baner-Hinjawadi Road,
    offering serenity and proximity to the bustling Hinjawadi Phase 1.
    This prime riverside location is not just an address; it's a testament to
    strategic tranquility, where residents can embrace the beauty of nature while
    staying seamlessly connected to Pune's IT hub.
    Moreover, its proximity to the Pune-Mumbai Expressway adds another layer of
    convenience, connecting you seamlessly to major cities.
  </Paragraph>
  <div className="w-full flex justify-center md:justify-end pt-8">
    <img className="w-full max-w-[90%] md:max-w-[800px] h-auto" src={locationMap} alt="Map" />
  </div>
</section>

  )
}

export default LocationPage;
