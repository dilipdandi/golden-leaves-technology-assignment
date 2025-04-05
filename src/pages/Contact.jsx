import Input from "../components/Input";
import highlightImage from "../../assets/Highlights Image.png";
import Buttons from "../components/Buttons";
import Paragraph from "../components/Paragraph";

const Contact = () => {
  return (
    <section className="h-auto w-screen bg-plainBackground bg-no-repeat bg-cover bg-center text-center">
      <div className="w-full h-auto relative flex flex-col items-center">
        <div className="h-screen w-screen bg-highlight relative flex flex-col justify-center items-center">
          <div className="absolute inset-0 bg-black opacity-50 z-0" />

          <div className="relative z-10 flex flex-col items-center w-full">
            <Buttons>Contact Us</Buttons>

            <div className="max-md:flex hidden pt-10">
              <strong className="cinzel w-full text-white flex flex-col text-center font-light text-2xl pt-2">
                React Out To Us
              </strong>
            </div>

            <Paragraph className="w-[90%] text-white">
              Feel free to get in touch with us at Godrej River Royale. Whether
              you have questions, want to schedule a site visit, or need more
              information, our dedicated team is here to assist you. Your dream
              home journey begins with a simple call.
            </Paragraph>

            <div className="w-[60%] max-md:w-[90%]">
              <div className="flex justify-between max-md:justify-center gap-8 mt-16">
                <Input
                  placeholder="Name"
                  type="text"
                  className="w-[50%] max-w-sm max-md:w-[100%]"
                />
                <Input
                  placeholder="Contact"
                  type="tel"
                  className="w-[50%] max-w-sm max-md:w-[100%]"
                />
              </div>
              <div className="flex flex-row justify-center items-center mt-8">
                <Input
                  placeholder="Email"
                  type="email"
                  className="w-full max-w-[100vw]"
                />
              </div>
            </div>

            <div className="w-[90%] gap-2 flex justify-center items-center mt-5">
              <input
                id="link-checkbox"
                type="checkbox"
                className="w-5 h-5 text-gray-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="link-checkbox"
                className="max-md:text-[10px] font-semibold text-[#c1bebe]"
              >
                I would like to receive the latest property updates & promotions
              </label>
            </div>

            <button className="px-16 py-4 bg-primaryYellow rounded-[4px] uppercase mt-8 font-semibold">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
