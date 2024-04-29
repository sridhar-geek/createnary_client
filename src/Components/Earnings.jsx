import { useState } from "react";

useState
const Earnings = () => {
    const [progress, setProgress] = useState(10);

    // Update the progress value (this could be tied to an event or state change)
    const updateProgress = (newValue) => {
      setProgress(newValue);
    };
  return (
    <div className="m-10">
      <h3 className="headings md:text-center  font-semibold mb-2 md:mb-10">
        {" "}
        ESTIMATE EARNING POTENTIAL
      </h3>
      <div className="flex flex-col md:flex-row md:items-center justify-evenly">
        {/* combination div for select tag and progress bar */}
        <div className="flex flex-col gap-6 ">
          <span className="questions">What kind of influencer are you?</span>
          {/* select tag */}
          <div>
            <select
              name="cars"
              id="cars"
              className=" border-2 w-full px-3 py-1 rounded-xl"
            >
              <option value="Influencer">Lifestyle Influencer</option>
              <option value="Influencer">Fitness and Welness Influencer</option>
              <option value="Influencer">Gaming Influencer</option>
              <option value="Influencer">Tech Influencer</option>
              <option value="Influencer">Beauty Influencer</option>
            </select>
          </div>
          {/* Progress bar starts*/}
          <span className="questions ">How many followers do you have?</span>
          <div className="text-primary">
            <input
              type="range"
              min="10"
              max="1000"
              step="10"
              value={progress}
              onChange={(e) => updateProgress(parseInt(e.target.value, 10))}
              className="w-full"
            />
          </div>
          <span className="questions">
            How many products do you list monthly?
          </span>
          <div>
            <div className="p-4">
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={progress}
                onChange={(e) => updateProgress(parseInt(e.target.value, 10))}
                className="w-full mt-4"
              />
            </div>{" "}
          </div>
          {/* Progress bar ends*/}
        </div>
        {/* calculate button for small screens */}
        <div className="text-center">
          <button className="text-3xl md:hidden">Calculate</button>
        </div>
        {/* monthly and early earnings starts */}
        <div className="md:mt-28 flex flex-row md:flex-col gap-8 items-center justify-around">
          <div>
            <h3>Monthly earings</h3>
            <h2>₹ 2333,000</h2>
          </div>
          <div>
            <h3>Yearly earings</h3>
            <h2>₹ 2333,000</h2>
          </div>
        </div>
        {/* monthly and early earnings starts */}
      </div>
      {/* calculate button for large screens */}
      <div className="flex justify-center">
        <button className="text-3xl hidden md:block">Calculate</button>
      </div>
    </div>
  );
};

export default Earnings;
