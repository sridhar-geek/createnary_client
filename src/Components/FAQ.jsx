import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../Services/api";

const FAQItem = ({ faq, isOpen, toggleFAQ }) => {
  return (
    <div className="border-b-2 my-4 mx-10 md:mx-28 bg-glassy rounded-2xl">
      <button
        className="flex justify-between items-center w-full p-4 "
        onClick={() => toggleFAQ(faq.id)}
      >
        <span className=" font-Poppins text-xl ">{faq?.question}</span>
        <span>
          {isOpen ? <GoDash className="text-2xl font-bold" /> : <FaPlus />}
        </span>
      </button>
      {isOpen && (
        <div className=" px-4 font-Poppins pb-4 ease-in-out duration-300 ">
          <div className="border border-gray-5 mb-2"></div>
          {faq?.answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  // It stores Id of the question
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ((prevOpenFAQ) => (prevOpenFAQ === id ? null : id));
  };

  // Function to call api data from server
  const getQuestions = async () => {
    return await axiosInstance.get("/faq");
  };
  // react query function to store data in cache
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  if (isLoading) return <h1>Loading....</h1>;
  // if error occoured it shows error message
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <div className="text-center">
        <h1 className="mt-10 mb-5 headings">Frequently Asked Questions</h1>
        <p className="mb-10 para">
          Quick answer to questions you may have. Can’t find what you’re looking
          for?
          <br />
          <span className="text-primary font-semibold">
            {" "}
            Check out our full documentation
          </span>
        </p>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data?.data.Questions.map((faq) => (
            <FAQItem
              key={faq?.id}
              faq={faq}
              isOpen={openFAQ === faq.id}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </>
      )}
    </div>
  );
};

FAQItem.propTypes = {
  faq: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleFAQ: PropTypes.func.isRequired,
};

export default FAQ;
