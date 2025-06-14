// App.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurServicesPage from './pages/OurServicesPage';
import ImpactPage from './pages/ImpactPage'; 
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<OurServicesPage />} />
      <Route path="/impact" element={<ImpactPage />} /> 
      <Route path="/contact" element={<ContactUsPage />} />
      
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
