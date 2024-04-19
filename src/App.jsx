import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
      <Footer />
    </>
  );
}
export default App;
