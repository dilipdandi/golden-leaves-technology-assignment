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
    <section className="h-auto w-screen flex flex-col items-center m-0 p-0 bg-primaryBackground ">
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
    </section>
  );
};

export default Homepage;
