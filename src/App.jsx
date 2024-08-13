import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/contact';
// import Contato from './pages/Contato';
// import Produtos from './pages/Produtos';
// import Sobre from './pages/Sobre';
// import ProdutoDetalhes from './pages/ProdutoDetalhes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produto/:id" element={<ProdutoDetalhes />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
