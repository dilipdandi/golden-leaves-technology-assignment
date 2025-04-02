import Buttons from "../components/Buttons";
import GalleryImage from "../components/GalleryImage";


const Gallery = () =>{
    return(
        <section className="min-h-[100vh] w-full px-4 flex flex-col justify-evenly items-center mt-12 bg-primaryBackground gap-8 md:gap-12">
            <Buttons>Gallery</Buttons>
            <GalleryImage />
        </section>

    )
}

export default Gallery;