import Hero from "./Hero";
import Overview from "./Overview";
import Highlights from "./Highlights";
import Amenties from "./Amenties";
import Gallery from "./Gallery";
import Layout from "./Layout";
import LocationPage from "./LocationPage";
import AboutTheDeveloper from "./AboutTheDeveloper";
import Contact from "./Contact";
import Information from "./Information";
import HighlightSmallScreenImage from "../components/HighlightSmallScreenImage";

const Homepage = () => {
  return (
    <section className="h-auto flex flex-col items-center m-0 p-0 bg-primaryBackground relative">
      <Hero />
      <Overview />
      <Highlights />
      <HighlightSmallScreenImage />
      <Amenties />
      <Gallery />
      <Layout />
      <LocationPage />
      <AboutTheDeveloper />
      <Contact />
      <Information />
      <button className="py-4 px-5 fixed rounded-full right-2 bottom-2 bg-[#c8c8c899] z-50 hidden max-md:block">
        <i className="fa-solid fa-arrow-up text-[20px]"></i>
      </button>
    </section>
  );
};

export default Homepage;