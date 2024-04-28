import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Imports from another files
import HeroComponent from "../Components/HeroComponent";
import FAQ from "../Components/FAQ";

const Home = () => {
  return (
    <main>
      <HeroComponent />
      <div className="text-center bg-primary">
        <h3 className="headings mb-5 text-white">Your audience wants links</h3>

        <p className="para text-white font-light mb-5">
          Made it easy for them by linking products to every post and video
        </p>
        <div className="flex justify-between items-center">
          <MdKeyboardArrowLeft className="arrow" />
          <img
            src="/group-300@2x.png"
            alt="group"
            className="w-5/6 items-center"
          />
          <MdKeyboardArrowRight className="arrow" />
        </div>
        <button className="btn bg-white text-primary">Try for Free</button>
      </div>
      {/* Frequently asked questions section */}
     <FAQ />
    </main>
  );
};

export default Home;
