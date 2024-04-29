// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Imports from another files
import HeroComponent from "../Components/HeroComponent";
import FAQ from "../Components/FAQ";
import Slider from "../Components/Slider";
import Earnings from '../Components/Earnings'
import ImageSlider from "../Components/ImageSlider";
const Home = () => {
  return (
    <main>
      <HeroComponent />
      <ImageSlider />
     {/* <Slider /> */}
     <Earnings />
     <FAQ />
    </main>
  );
};

export default Home;
