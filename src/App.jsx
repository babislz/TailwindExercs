import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/contact';
import Infos from './pages/info';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/infos" element={<Infos />} />
        {/* <Route path="/produto/:id" element={<ProdutoDetalhes />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
