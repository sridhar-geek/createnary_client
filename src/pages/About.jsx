import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
// Imports from another files
import Card from "../Components/Card";
import { axiosInstance } from "../Services/api";

const About = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);   // to know the current screen size

  useEffect(() => {
    // Update screenWidth on window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const breakPoint = 768;   
  // Function to call api data from server
  const getData = async () => {
    return await axiosInstance.get("/about");
  };
  // react query function to store data in cache
  const { data, error, isError } = useQuery({
    queryKey: ["text-images"],
    queryFn: getData,
  });

  // if error occoured it shows error message
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <div className="flex flex-col md:flex-row mx-20 gap-10 ">
        {/* Left box starts */}
        <div className="mt-0 md:mt-40 flex-auto">
          <h1 className="headings mb-10">
            GetSet Yo handholds you at every step of the way
          </h1>
          <p className="para mb-10">
            You focus on helping your friends and family, we take care of
            everything else.
          </p>
          <button className="btn">Get Started</button>
        </div>
        {/* Left box end */}
        <div className="flex-auto">
          {/* displaying cards based on screen size */}
          {data?.data.map((ele, index) => (
            <div key={ele.id}>
              {screenWidth <= breakPoint ? (
                <Card ele={ele} index={index} />
              ) : (
                <Card ele={data?.data[0]} index={index} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
