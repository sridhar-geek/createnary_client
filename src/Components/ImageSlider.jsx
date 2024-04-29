import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image5 from "../../public/image5.png";
import image6 from "../../public/image6.png";
import image8 from "../../public/image8.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
    const images = [image5, image6, image8];
  return (
   <Carousel
     swipeable={true}
     draggable={true}
     showDots={false}
     autoPlay={true}
     responsive={responsive}
     infinite={false}
     autoPlaySpeed={1000}
     keyBoardControl={true}
     transitionDuration={500}
     containerClass="carousel-container"
     dotListClass="custom-dot-list-style"
     itemClass="carousel-item-padding-40-px"
   >
     {images.map((image, index) => (
      <div key={index} className="w-2/3  mx-auto">
        <img  src={image} alt="group" className="w-full" />
      </div>
     ))}
   </Carousel>
  )
}
const ImageSlider = () => {
      const handleClick = () => {};
  return (
    <div className="text-center bg-primary p-3">
      <div>
        <h3 className="headings mb-5 text-white">Your audience wants links</h3>
        <p className="para text-white font-light mb-5">
          Made it easy for them by linking products to every post and video
        </p>
        <Slider />
        <button className="btn bg-white text-primary">Try for Free</button>
      </div>

    </div>
  );
};

export default ImageSlider;
