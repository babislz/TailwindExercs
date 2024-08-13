import { Link } from 'react-router-dom';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Card from '../../components/Card';

function Home() {
  const data = [
    { id: 1, name: "Java" },
    { id: 2, name: "Python" },
  ];

  const mostrarErro = () => {
    alert("Ocorreu um erro!");
  };

  const mostrarSucesso = () => {
    alert("Operação realizada com sucesso!");
  };

  const linguagens = [
    { id: 1, name: 'C#', image: '/produto1.jpg', price: 'R$ 100', description: 'Descrição do Produto 1' },
    { id: 2, name: 'C++', image: '/produto2.jpg', price: 'R$ 200', description: 'Descrição do Produto 2' },
    { id: 3, name: 'Pamella', image: '/produto3.jpg', price: 'R$ 300', description: 'Descrição do Produto 3' },
  ];

  return (
    <body className="flex flex-col h-screen w-screen bg-white">
      <Navbar />
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 gap-20">
        <div className="flex gap-10">
          {linguagens.map(linguagens => (
              <Link to={`/linguagem/${linguagens.id}`} key={linguagens.id}>
                <Card 
                  key={linguagens.id}
                  name={linguagens.name}
                />
              </Link>
            ))}
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
              {data.map((row) => (
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
    </body>
  );
}

export default Home;