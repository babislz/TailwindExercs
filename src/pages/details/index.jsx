import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock de dados
const mockData = [
  { id: 1, name: 'Java', image: '/produto1.jpg', price: 'R$ 100', description: 'Descrição do Produto 1' },
  // Adicione mais dados aqui conforme necessário
];

const LanguageDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useState(null);
  
  useEffect(() => {
    const foundLanguage = mockData.find(l => l.id === parseInt(id));
    if (foundLanguage) {
      setLanguage(foundLanguage);
    } else {
      navigate('/'); // Redireciona para a página inicial se a linguagem não for encontrada
    }
  }, [id, navigate]);

  if (!language) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-gray-200 rounded">Voltar</button>
      <div className="max-w-lg mx-auto border border-gray-300 p-6 rounded-lg shadow-lg bg-white">
        <img src={language.image} alt={language.name} className="w-full h-64 object-cover rounded-md mb-4" />
        <h1 className="text-2xl font-bold mb-2">{language.name}</h1>
        <p className="text-gray-700 mb-2">Preço: {language.price}</p>
        <p className="text-gray-700">{language.description}</p>
      </div>
    </div>
  );
};

export default LanguageDetailPage;
