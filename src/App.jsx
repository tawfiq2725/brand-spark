import Home from "./pages/Home/Home";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import ContactForm from "./pages/Contact/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamPage from "./pages/About/TeamPage";
import ServicesCards from "./components/Service/ServicesCards";
import Portfolio from "./pages/Portfolio/Portfolio";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<TeamPage />} />
          <Route path="/services" element={<ServicesCards />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
