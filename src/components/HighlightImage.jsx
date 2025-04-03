import birds from "../../assets/Birds.png";
import sky from "../../assets/Sky.png";

const HighlightImage = () => {
  return (
    <div className="bg-highlight bg-no-repeat bg-cover bg-bottom w-[80%] max-md:w-full h-[602px] max-md:h-auto relative rounded-full flex justify-center items-center">
    <div className="h-[95%] w-[98%] border border-[#fff] rounded-full"></div>
    <img className="absolute right-48 -top-24" src={birds} alt="birds" />
    <img className="absolute right-56 -top-10 opacity-40" src={sky} alt="birds" />
  </div>

  );
};

export default HighlightImage;
