import image5 from "../../public/image5.png";
import image6 from "../../public/image6.png";
import image8 from "../../public/image8.png";
import { useState } from "react";
const images = [image5, image6, image8];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="overflow-x-hidden w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentIndex
                ? "block absolute inset-0 object-cover w-full h-full"
                : "hidden absolute inset-0 object-cover w-full h-full"
            }
          >
            <img
              src={image}
              alt='logo'
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between absolute inset-y-0 w-full px-4">
        <button
          type="button"
          onClick={handlePrev}
          className="text-white w-auto p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-opacity-75 rounded-full bg-gray-900"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 10 10"
          >
            <path d="M7.777 5l-2.79-2.79-1.414 1.414 2.79 2.79-1.414 1.414 1.414-1.414z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="text-white w-auto p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-opacity-75 rounded-full bg-gray-900"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 10 10"
          >
            <path d="M2.223 5l2.79-2.79 1.414 1.414-2.79 2.79 1.414 1.414-1.414-1.414z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
