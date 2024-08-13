import { Link } from 'react-router-dom';

const Navbar = () => {
    const linkExternal = () => {
        window.open("https://openai.com/chatgpt/", "_blank", "noopener,noreferrer");
    };

    return(
        <>
            {/* Header */}
            <header className="w-full h-14 bg-blue-950 text-white flex items-center">
                <img onClick={linkExternal} className="object-cover w-12 ml-4" src="/public/ChatGPT-Logo.png" alt="logo" />
                
                <div className="flex-auto flex justify-center">
                    <h1 className="text-xl font-bold text-center">CodePedia</h1>
                </div>
                
                <div className="flex gap-3 mr-4">
                    <Link to="/">
                        <img
                            className="object-cover w-8"
                            src="/botao-home.png"
                            alt="home-image"
                        />
                    </Link>
                    <Link to="/contact">
                        <img 
                            className="object-cover w-8" 
                            src="/public/receptor.png" 
                            alt="contact-image" 
                        />
                    </Link>
                    <Link to="/infos">
                        <img 
                            className="object-cover w-8" 
                            src="/public/sobre-nos.png" 
                            alt="about-image" 
                        />
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Navbar;