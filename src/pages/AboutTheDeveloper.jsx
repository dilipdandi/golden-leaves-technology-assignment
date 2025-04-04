import Buttons from "../components/Buttons"
import Paragraph from "../components/Paragraph"
import image45 from "../../assets/About The Developer/image 45.png";


const AboutTheDeveloper = () => {
  return (
    <section className="h-auto min-h-[100vh] w-full bg-plainBackground bg-no-repeat bg-cover bg-center  max-md:bg-center  flex flex-col justify-start items-center mt-10 pt-24 px-4 sm:px-8">
    <Buttons>About The Developer</Buttons>
    <div className="text-white flex flex-col justify-center items-center text-center">
        <Paragraph>
            <strong className="text-primaryYellow font-bold text-2xl sm:text-3xl">
                Step into the legacy
            </strong>
            <strong> Uneviled by Godrej Properties</strong> at River Royale,
            where every detail reflects centuries of excellence. As one of the top
            & well-known builders of India & Pune, we take pride in crafting dreams that stand the test of time.
            River Royale is not just a project; it's an expression of visionary craftsmanship,
            showcasing our commitment to pioneering luxury in the realm of real estate.
        </Paragraph>
    </div>
    <p className="cinzel text-primaryYellow text-center mt-12 sm:mt-24 text-5xl max-md:text-3xl font-light">FROM THE MAKERS OF</p>
    <div className="flex flex-col justify-center items-center relative w-full">
        <img className="w-[90%] sm:w-[70%] h-auto mt-10 sm:mt-20 border-4 sm:border-8" src={image45} alt="img" />
        <p className="cinzel bg-primaryYellow text-2xl max-md:text-[12px] absolute w-[85%] sm:w-[65%] text-black text-center bottom-1 sm:bottom-2 font-light px-2 py-1">GODREJ AVENUE ELEVEN, MAHALAXMI, MUMBAI</p>
    </div>
</section>
  )
}

export default AboutTheDeveloper
