import godrejLogo from "../../assets/Godrej Logo.png";
import Paragraph from "../components/Paragraph";
import qrCode from "../../assets/Gallery/QR Code.png";

const Information = () => {
  return (
    <section className="h-[100vh] w-full bg-plainBackground bg-no-repeat bg-cover bg-center relative">
  <div className="flex flex-col justify-center items-center pt-10 max-md:pt-6">
    <img
      className="w-[30%] max-md:w-[100%] max-md:mb-4"
      src={godrejLogo}
      alt="logo"
    />
    <div className="text-white mx-10 max-md:mx-4 max-md:text-center">
      <Paragraph>
        Rest easy with Godrej River Royale – a RERA-registered project{" "}
        <strong className="text-primaryYellow">
          (RERA number P52100052957)
        </strong>{" "}
        that adheres to the highest standards of accountability and
        transparency.
      </Paragraph>
    </div>
  </div>

  <div className="flex flex-row mt-12 px-10 text-white max-md:flex-col max-md:items-center max-md:mt-8 max-md:px-4">
    <img
      className="w-36 h-36 max-md:w-24 max-md:h-24"
      src={qrCode}
      alt="QR"
    />
    <div className="flex flex-col justify-start ml-4 max-md:ml-0 max-md:mt-4 max-md:text-center">
      <strong className="mt-2 text-2xl px-4 max-md:px-0 max-md:text-lg">
        DISCLAIMER
      </strong>
      <Paragraph className="-mt-6 text-xl px-4 text-start max-md:px-0 max-md:text-base max-md:-mt-2 max-md:text-center">
        The project Godrej River Royale is registered with MahaRERA Registration
        no. P52100052957 available at
        http://maharera.mahaonline.gov.in.
      </Paragraph>
    </div>
  </div>

  <div className="absolute w-[60%] bottom-4 border-t-2 text-white left-1/2 transform -translate-x-1/2 max-md:w-[90%] max-md:text-xs max-md:px-2">
    <Paragraph className="text-sm text-center max-md:text-[10px]">
      Copyright © 2023 All Rights Reserved by Godrej Properties
    </Paragraph>
  </div>
</section>

  );
};

export default Information;
