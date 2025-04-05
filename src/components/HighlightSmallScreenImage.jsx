import birds from "../../assets/Birds.png";
import sky from "../../assets/Sky.png";

const HighlightSmallScreenImage = () => {
  return (
    <div className="w-[90%] h-[200px] hidden bg-highlight bg-cover bg-bottom rounded-full relative max-md:flex justify-center items-center p-2">
      <div className="h-[100%] w-[100%] rounded-full border-1 border border-white "></div>
      <img
        src={birds}
        alt="birds"
        className="absolute -top-8 right-14 w-[30%] z-10 "
      />
      <img
        src={sky}
        alt="sky"
        className="absolute -top-5 right-5 w-[50%] opacity-70"
      />
    </div>
  );
};

export default HighlightSmallScreenImage;
