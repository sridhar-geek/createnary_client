import { useState } from "react";
import {axiosInstance} from '../Services/api'
const Earnings = () => {
  const [followers, setFollowers] = useState(100);
  const [products, setProducts] = useState(20);
  const [potentialIncome, setPotentialIncome] = useState(110000);
  // keep track of followers
  const updateFollowers = (newValue) => {
    setFollowers(newValue);
  };
  // keep track of products
  const updateProducts = (newValue) => {
    setProducts(newValue);
  };

  const formaterFun = (number) => {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return formatter.format(number);
  }

  // send post request to server and get Potential Income
  const calculateIncome = async (e) => {
    e.preventDefault();
    const data = { followers, products };
    const income = await axiosInstance.post("/calculate", data);
    console.log(income.data)
    setPotentialIncome(income.data)
  };
  return (
    <div className="m-10">
      <h3 className="headings md:text-center  font-semibold mb-2 md:mb-10">
        {" "}
        ESTIMATE EARNING POTENTIAL
      </h3>
      <div className="flex flex-col md:flex-row md:items-center justify-evenly">
        {/* combination div for select tag and progress bar */}
        <div className="flex flex-col gap-6  ">
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
          <div className="p-4">
            <input
              type="range"
              min="10"
              max="1000"
              step="10"
              value={followers}
              onChange={(e) => updateFollowers(parseInt(e.target.value, 10))}
              className="w-full"
            />
          </div>
          <div className="follower_products">{`${followers}K`}</div>
          <span className="questions">
            How many products do you list monthly?
          </span>
          <div className="p-4">
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={products}
              onChange={(e) => updateProducts(parseInt(e.target.value, 10))}
              className="w-full "
            />
          </div>{" "}
          {/* Progress bar ends*/}
          <div className="follower_products rounded-2xl">{products}</div>
        </div>
        {/* calculate button for small screens */}
        <div className="text-center">
          <button onClick={calculateIncome} className="btn md:hidden mt-6">
            Calculate
          </button>
        </div>
        {/* monthly and early earnings starts */}
        <div className="md:mt-28 flex flex-row md:flex-col gap-8 items-center justify-around">
          <div className="flex items-center flex-col">
            <h3 className="headings">Monthly Earings</h3>
            <h2>{formaterFun(potentialIncome)}</h2>
          </div>
          <div className="flex items-center flex-col">
            <h3 className="headings">Yearly Earings</h3>
            <h2>{formaterFun(potentialIncome * 12)}</h2>
          </div>
        </div>
        {/* monthly and early earnings starts */}
      </div>
      {/* calculate button for large screens */}
      <div className="flex justify-center">
        <button onClick={calculateIncome} className="btn hidden md:block">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Earnings;
