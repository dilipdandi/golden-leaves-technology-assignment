import image from "../../assets/Image.png"

const GalleryImage =()=>{
    return(
        <div className="bg-no-repeat bg-cover bg-bottom w-full md:w-[80%] h-auto min-h-[400px] md:h-[600px] flex justify-center items-center my-10 md:my-20">
            <img className="max-w-full h-auto" src={image} alt="galleryImage" />
        </div>

    )
}

export default GalleryImage;