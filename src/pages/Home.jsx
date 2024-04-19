import HeroComponent from "../Components/HeroComponent";
import Header from "../Components/Header";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <main>
      <div className="overflow  relative">
        <img src="/background.png" alt="" />
        <div className="absolute top-0 left-0 right-0 ">
          <Header />
        </div>
        <div className=" absolute top-40 left-0 right-0">
          <HeroComponent />
        </div>
      </div>
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
    </main>
  );
};

export default Home;
