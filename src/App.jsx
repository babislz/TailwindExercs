import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/contact';
import Infos from './pages/info';
import LanguageDetailPage from './pages/details';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/linguagem/:id" element={<LanguageDetailPage />} />
      </Routes>
    </Router>
  );
}
