// import { useQuery } from "@tanstack/react-query";
import image5 from "../../public/image5.png";
import image6 from "../../public/image6.png";
import image8 from "../../public/image8.png";
import { useState } from "react";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md'

const Slider = () => {
  const images = [image5, image6, image8];
  // // Function to call api data from server
  // const getData = async () => {
  //   return await axiosInstance.get("/about");
  // };
  // // react query function to store data in cache
  // const { data, error, isError } = useQuery({
  //   queryKey: ["text-images"],
  //   queryFn: getData,
  // });

  // // if error occoured it shows error message
  // if (isError) return <p>{error.message}</p>;
    const handleClick = () => {

    }

  return (
    <div className="text-center bg-primary p-3">
      <div>
        <h3 className="headings mb-5 text-white">Your audience wants links</h3>
        <p className="para text-white font-light mb-5">
          Made it easy for them by linking products to every post and video
        </p>
        <div className="flex justify-between items-center">
          <button onClick={handleClick}>
          <MdKeyboardArrowLeft className="arrow" />
          </button>
          {images.map((image, index) => (
            <img key={index} src={image} alt="group" className="w-96  items-center" />
          ))}
          <button onClick={handleClick}>
          <MdKeyboardArrowRight className="arrow" />
          </button>
        </div>
        <button className="btn bg-white text-primary">Try for Free</button>
      </div>
    </div>
  );
};

export default Slider;
