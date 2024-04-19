import Card from "../Components/Card"
import Header from "../Components/Header"

const About = () => {
  const arr = [1,2,3,4];
  return (
    <div>
      <Header />
      {arr.map(ele => (
        <div key={ele}>
          <Card />
        </div>

      ))}
    </div>
  )
}

export default About