const Card = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-80 h-80 border-2 border-black rounded-xl p-4 shadow-xl transform transition-transform duration-300 hover:scale-105">
        <img
          className="object-cover w-36 h-36 mb-4"
          src="/public/javinha.svg"
          alt=""
        />
        <div className="text-center">
          <h2 className="font-pt-sans font-semibold text-lg mb-2">{props.name}</h2>
          <button className="bg-cyan-900 p-3 rounded-md font-bold text-white">
            Show me more
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
