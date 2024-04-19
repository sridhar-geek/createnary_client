import HeroComponent from "../Components/HeroComponent";
import Header from "../Components/Header";
// import

const Home = () => {
  return (
    <main>
      <div className="overflow-hidden  relative">
        <img src="/background.png" alt="" />
        <div className="absolute top-0 left-0 right-0 z-10">
          <Header />
        </div>
        <div className="absolute top-60 left-0 right-0">
          <HeroComponent />
        </div>
      </div>
    </main>
  );
};

export default Home;
