function Home() {
  const linkExternal = () => {
    window.open("https://openai.com/chatgpt/", "_blank", "noopener,noreferrer");
  };

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

  return (
    <div className="flex flex-col h-screen w-screen bg-white">
      {/* Header */}
      <header className="w-full h-14 bg-blue-950 text-white flex items-center justify-center">
        <img onClick={linkExternal} className="object-cover w-12" src="/public/ChatGPT-Logo.png" alt="" />
        <h1 className="text-xl font-bold">CodePedia</h1>
        <img onClick={linkExternal} className="object-cover w-12" src="/public/ChatGPT-Logo.png" alt="" />
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 gap-20">
        <div className="flex w-full max-w-4xl justify-center gap-8 mb-8">
          <div className="flex flex-col justify-center items-center w-80 h-80 border-2 border-black rounded-xl p-4 shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              className="object-cover w-36 h-36 mb-4"
              src="/public/javinha.svg"
              alt="Java"
            />
            <div className="text-center">
              <h2 className="font-pt-sans font-semibold text-lg mb-2">JAVA</h2>
              <button
                onClick={linkExternal}
                className="bg-cyan-900 p-3 rounded-md font-bold text-white"
              >
                Show me more
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-80 h-80 border-2 border-black rounded-xl p-4 shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              className="object-cover w-36 h-36 mb-4"
              src="/public/pythonzinho.svg"
              alt="Python"
            />
            <div className="text-center">
              <h2 className="font-pt-sans font-semibold text-lg mb-2">
                PYTHON
              </h2>
              <button
                onClick={linkExternal}
                className="bg-cyan-900 p-3 rounded-md font-bold text-white"
              >
                Show me more
              </button>
            </div>
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

      {/* Footer */}
      <footer className="w-full h-14 bg-blue-950 text-white flex items-center justify-center">
        <img onClick={linkExternal} className="object-cover w-12" src="/public/ChatGPT-Logo.png" alt="" />
        <img onClick={linkExternal} className="object-cover w-12" src="/public/ChatGPT-Logo.png" alt="" />
        <img onClick={linkExternal} className="object-cover w-12" src="/public/ChatGPT-Logo.png" alt="" />
      </footer>
    </div>
  );
}

export default Home;
