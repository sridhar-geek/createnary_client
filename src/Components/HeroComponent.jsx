

const FrameComponent4 = () => {

  return (
    <div className="flex flex-col md:flex-row justify-between z-10 mx-10">
      <div className="flex-1">
        <h1 className="mb-10 text-3xl headings">Welcome To India's First <br /> Creator's MarketPlace</h1>
        <h3 className="mb-10">Create your first E-store @ Zero Cost</h3>
        <p className="mb-10 para">Empower your creativity with Createnary. Showcase,sell, and connect witha global audience effortlessly, turn your products into profits.</p>
        <button className="btn">Get Started</button>
      </div>
      <div className="flex-none">
        <img src="/mobilePhones.png" alt="mobile phones" className="h-96 w-52" />
      </div>
    </div>
  );
};

export default FrameComponent4;
