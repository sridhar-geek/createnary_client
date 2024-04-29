// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Imports from another files
import HeroComponent from "../Components/HeroComponent";
import FAQ from "../Components/FAQ";
import Slider from "../Components/Slider";
import Earnings from '../Components/Earnings'
const Home = () => {
  return (
    <main>
      <HeroComponent />
     <Slider />
     <Earnings />
     <FAQ />
    </main>
  );
};

export default Home;
