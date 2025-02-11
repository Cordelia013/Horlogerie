import { useState } from "react";
import Carousel from "./../components/Carousel";

// Liste des images du carrousel
const images = [
  "/assets/image-01.png",
  "/assets/image-02.png",
  "/assets/image-03.png",
  "/assets/image-04.png",
  "/assets/image-05.png",
  "/assets/image-06.png",
];

function TechnicalSection() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div
      className="relative w-full  bg-primary flex "
      id="technical-section -z-10"
    >
      {/* Zone gauche : Image sélectionnée */}
      <div className="zoneLeft w-6/12  flex items-center justify-center">
        <img
          src={selectedImage}
          alt="Selected Watch"
          className="h-%] w-full object-contain"
        />
      </div>

      {/* Zone droite : Carrousel */} 
      <div className="zoneRight w-6/12 bg-secondary flex flex-row justify-center items-end gap-2 p-1 z-10 2xl:h-fill">
        <Carousel />

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`watch-${index}`}
            className={`w-1/6 h-[140px] object-cover cursor-pointer transition-opacity duration-300 
              ${selectedImage === img ? "opacity-100" : "opacity-35"}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default TechnicalSection;
