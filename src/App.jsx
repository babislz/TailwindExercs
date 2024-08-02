import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-white">
      <div className="w-screen h-14 bg-blue-950 text-white">
        {/* Header */}
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="flex w-screen h-4/5 justify-center gap-10">
          <div className="flex flex-col justify-center items-center w-80 h-2/4 border-solid border-2 border-black rounded-xl gap-5">
          <img className="object-cover w-36 h-50" src="/public/javinha.svg" alt="" />
          <div className="h-24 mt-6 mb-2">
            <h2 className="font-pt-sans font-semibold text-lg">JAVA</h2>
            <button className="bg-cyan-900 p-3 rounded-md font-bold text-white">Show-me more</button>
          </div>
          {/* Card */}
        </div>
        <div className="flex flex-col justify-center items-center w-80 h-2/4 border-solid border-2 border-black rounded-xl gap-5">
          <img className="object-cover w-36 h-50" src="/public/pythonzinho.svg" alt="" />
          <div className="h-24 mt-6 mb-2">
            <h2 className="font-pt-sans font-semibold text-lg">PYTHON</h2>
            <button className="bg-cyan-900 p-3 rounded-md font-bold text-white">Show-me more</button>
          </div>
          {/* Card */}
        </div>
        <div className="flex flex-col justify-center items-center w-80 h-2/4 border-solid border-2 border-black rounded-xl gap-5">
          <img className="object-cover w-36 h-50" src="/public/c++zinho.svg" alt="" />
          <div className="h-24 mt-6 mb-2">
            <h2 className="font-pt-sans font-semibold text-lg">C++</h2>
            <button className="bg-cyan-900 p-3 rounded-md font-bold text-white">Show-me more</button>
          </div>
          {/* Card */}
        </div>
        </div>
        
      </div>
      <div className="w-screen h-14 bg-blue-950 text-white">
        {/* Footer */}
      </div>
    </div>
  );
}

export default App;
