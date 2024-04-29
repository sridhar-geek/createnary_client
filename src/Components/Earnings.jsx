import Progress from "./ProgressBar";

const Earnings = () => {
  return (
    <div className="m-10">
      <h3 className="headings md:text-center  font-bold mb-5">
        {" "}
        ESTIMATE EARNING POTENTIAL
      </h3>
      <div className="flex bg-[#f8f9fb] flex-col md:flex-row md:items-center justify-evenly">
        {/* select tag and progress bar */}
        <div className="flex flex-col gap-4 ">
          <span className=" font-Poppins font-bold text-xl ">
            What kind of influencer are you?
          </span>
          <div>
            <select
              name="cars"
              id="cars"
              className=" border-2 w-full px-3 py-1 rounded-xl"
            >
              <option value="Influencer">Lifestyle Influencer</option>
              <option value="Influencer">
                Fitness and Welness Influencer
              </option>
              <option value="Influencer">
                Gaming Influencer
              </option>
              <option value="Influencer">Tech Influencer</option>
              <option value="Influencer">
                Beauty Influencer
              </option>
            </select>
          </div>
            <div>
<Progress />
            </div>
        </div>
        <div className="md:mt-28">
          <div>Monthly earings</div>
          <div>Monthly earings</div>
        </div>
      </div>
    </div>
  );
}

export default Earnings