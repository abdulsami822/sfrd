import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./Components/HomePage";
import ServicesPage from "./Components/ServicesPage";
import GetInvolvedPage from "./Components/GetInvolvedPage";
import FaqsPage from "./Components/FaqsPage";
import AboutUsPage from "./Components/AboutUsPage";
import ContactUsPage from "./Components/ContactUsPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
