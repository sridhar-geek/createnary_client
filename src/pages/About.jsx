import Card from "../Components/Card";
import Header from "../Components/Header";

const About = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row mx-20 gap-10 ">
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
        <div className="flex-auto">

        {arr.map((ele) => (
          <div key={ele}>
            <Card ele= {ele}/>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default About;
