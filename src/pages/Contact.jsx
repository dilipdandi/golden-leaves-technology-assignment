import  Input  from "../components/Input"
import highlightImage from "../../assets/Highlights Image.png"
import Buttons from "../components/Buttons"
import Paragraph from "../components/Paragraph"

const Contact = () => {
  return (
    <section className="h-[100vh] w-full bg-plainBackground bg-no-repeat bg-cover bg-center text-center pt-24">
        <div className="w-full h-auto relative">
            <img className="w-full h-auto" src={highlightImage} alt="bgImg"/>
            <div className="absolute top-4 left-1/2 transform  -translate-x-1/2 mt-10">
            <Buttons>Contact Us</Buttons>
            <Paragraph className="w-full text-white flex flex-col justify-center items-center text-center text-lg">Feel free to get in touch with us at Godrej River Royale. 
            Whether you have questions, want to schedule a site visit, or need more information,
            our dedicated team is here to assist you. Your dream home journey begins with a simple call.
            </Paragraph>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-20 ">
            <Input placeholder="Name" type="text" className="w-fit max-w-sm uppe" />
            <Input placeholder="Contact" type="tel" className="w-fit max-w-sm" />
          </div>
          <div className="flex flex-row justify-center items-center mt-8">
            <Input placeholder="Email" type="email" className="w-full max-w-[100vw]" />
          </div>

          <div className="flex justify-center items-center mt-5">
          <input id="link-checkbox" type="checkbox" value="" className="w-5 h-5 text-gray-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
         <label for="link-checkbox" className="mx-2 text-sm font-semibold  text-gray-900 dark:text-gray-300">I would like to receive the latest property updates & promotions
         </label>
       </div>
       <button className="px-16 py-4 bg-primaryYellow rounded-[4px] uppercase mt-8 font-semibold">SUBMIT</button>
      </div>
    </div>
    </section>
  )
}

export default Contact
