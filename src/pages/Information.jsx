import godrejLogo from "../../assets/Godrej Logo.png";
import Paragraph from "../components/Paragraph";
import qrCode from "../../assets/Gallery/QR Code.png";

const Information = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-around items-center bg-plainBackground bg-no-repeat bg-cover bg-center relative">
      <div className="flex flex-col justify-center items-center">
        <img className="w-[30%] max-md:w-[100%]" src={godrejLogo} alt="logo" />
        <div className="w-[90%] text-center text-white max-md:text-center">
          <Paragraph className="w-full">
            Rest easy with Godrej River Royale – a RERA-registered project{" "}
            <strong className="text-primaryYellow">
              (RERA number P52100052957)
            </strong>{" "}
            that adheres to the highest standards of accountability and
            transparency.
          </Paragraph>
        </div>
      </div>

      <div className="flex flex-row px-20 w-full text-white max-md:flex-col max-md:items-center max-md:px-4">
        <img
          className="w-36 h-36 max-md:w-24 max-md:h-24"
          src={qrCode}
          alt="QR"
        />
        <div className="flex flex-col justify-start max-md:text-center">
          <strong className="text-2xl px-4 max-md:px-0 max-md:text-lg">
            DISCLAIMER
          </strong>
          <Paragraph className=" text-xl px-4 text-start max-md:px-0 max-md:text-base max-md:text-center">
            The project Godrej River Royale is registered with MahaRERA
            Registration no. P52100052957 available at
            http://maharera.mahaonline.gov.in.
          </Paragraph>
        </div>
      </div>

      <div className=" w-full flex flex-col justify-center items-center text-white ">
        <hr className="bg-white w-[50%] max-md:w-[90%]" />
        <Paragraph className="text-sm max-sm:text-[8px] max-sm:w-[80%]">
          Copyright © 2023 All Rights Reserved by Godrej Properties
        </Paragraph>
      </div>
    </section>
  );
};

export default Information;
