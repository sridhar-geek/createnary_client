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
    <div className="bg-[#f8f9fb]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
