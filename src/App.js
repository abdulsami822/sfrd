import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./Components/HomePage/index.js";
import ServicesPage from "./Components/ServicesPage/index.js";
import GetInvolvedPage from "./Components/GetInvolvedPage/index.js";
import FaqsPage from "./Components/FaqsPage/index.js";
import AboutUsPage from "./Components/AboutUsPage/index.js";
import ContactUsPage from "./Components/ContactUsPage/index.js";
import Navbar from "./Components/Navbar/index.js";
import Footer from "./Components/Footer/index.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/getinvolved" element={<GetInvolvedPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
