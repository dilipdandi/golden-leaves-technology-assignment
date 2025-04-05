import group58 from "../../assets/Group 58.png";
import group59 from "../../assets/Group 59.png";

const Layout = () => {
  return (
<section className="h-screen w-screen bg-plainBackground bg-no-repeat bg-cover bg-center flex justify-center items-center">
  <div className="flex flex-col md:flex-row gap-10 md:gap-24 lg:gap-36 justify-center items-center w-full">
    <div className="flex flex-col items-center gap-6">
      <img className="w-full max-w-[90%] md:max-w-[400px]" src={group58} alt="layoutImg1" />
      <p className="text-white font-bold text-xl md:text-2xl uppercase text-center">3 BHK Unit Layout</p>
    </div>
    <div className="flex flex-col items-center gap-6">
      <img className="w-full max-w-[90%] md:max-w-[400px]" src={group59} alt="layoutImg2" />
      <p className="text-white font-bold text-xl md:text-2xl uppercase text-center">4 BHK Unit Layout</p>
    </div>
  </div>
</section>

  )
}
export default Layout
