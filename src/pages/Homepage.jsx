import Hero from "./Hero";
import Overview from "./Overview";
import Highlights from "./Highlights";
import Amenties from "./Amenties";
import Gallery from "./Gallery";
import Layout from "./Layout";
import LocationPage from "./LocationPage";

const Homepage = () => {
  return (
    <section className="h-auto m-0 p-0 bg-primaryBackground">
      <Hero />
      <Overview />
      <Highlights />
      <Amenties />
      <Gallery />
      <Layout />
      <LocationPage />
    </section>
  );
};

export default Homepage;
