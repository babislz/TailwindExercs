import { Link } from 'react-router-dom';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Card from '../../components/Card';

function Home() {
  const mostrarErro = () => {
    alert("Ocorreu um erro!");
  };

  const mostrarSucesso = () => {
    alert("Operação realizada com sucesso!");
  };

  const linguagens = [
    { id: 1, name: 'Java', image: '/produto1.jpg', description: 'Descrição do Produto 1' },
    { id: 2, name: 'Python', image: '/produto2.jpg', description: 'Descrição do Produto 2' },
    { id: 3, name: 'JavaScript', image: '/produto3.jpg', description: 'Descrição do Produto 3' },
    { id: 4, name: 'C++', image: '/produto4.jpg', description: 'Descrição do Produto 4' },
    { id: 5, name: 'Ruby', image: '/produto5.jpg', description: 'Descrição do Produto 5' },
    { id: 6, name: 'Go', image: '/produto6.jpg', description: 'Descrição do Produto 6' },
  ];

  return (
      <>
        <Navbar />
        {/* Main content */}
        <main className="flex-grow flex flex-col items-center justify-center p-4 gap-20">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="grid lg:grid-cols-4 gap-4">
                {linguagens.map(linguagem => (
                  <Link to={`/linguagem/${linguagem.id}`} key={linguagem.id}>
                    <Card 
                      name={linguagem.name}
                      image={linguagem.image}
                    />
                  </Link>
                ))}
              </div>
          </div>

          {/* Table */}
          <div className="w-full max-w-4xl overflow-x-auto">
            <table className="w-full border-collapse border-2 border-gray-300">
              <thead className="bg-gray-100">
                <tr className="bg-blue-950 text-white">
                  <th className="border-2 p-2">ID</th>
                  <th className="border-2 p-2">Name</th>
                </tr>
              </thead>
              <tbody>
                {linguagens.map((row) => (
                  <tr key={row.id}>
                    <td className="border-2 p-2 text-center">{row.id}</td>
                    <td className="border-2 p-2">{row.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-row gap-10">
            <button
              onClick={mostrarErro}
              className="p-4 px-10 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Erro
            </button>
            <button
              onClick={mostrarSucesso}
              className="p-4 px-10 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sucesso
            </button>    
          </div>
        </main>
        <Footer />
      </>
      
  );
}

export default Home;
