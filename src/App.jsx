import Home from "./pages/Home/Home";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import ContactForm from "./pages/Contact/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
