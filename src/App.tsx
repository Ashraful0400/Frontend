import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurServicesPage from './pages/OurServicesPage';
import ContactUsPage from './pages/ContactUsPage'; // assuming you added this

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<OurServicesPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      
      {/* Optional: make homepage default */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
