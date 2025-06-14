// App.tsx
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurServicesPage from './pages/OurServicesPage';
import ImpactPage from './pages/ImpactPage'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<OurServicesPage />} />
      <Route path="/impact" element={<ImpactPage />} /> 
    </Routes>
  );
}

export default App;
