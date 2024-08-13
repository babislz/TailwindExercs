import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Infos = () => {
  return (
    <>
      <Navbar />
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Sobre o Site</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">O que fazemos?</h2>
          <p className="text-lg mb-4">
            Bem-vindo ao nosso site, uma plataforma dedicada a fornecer
            informações abrangentes sobre linguagens de programação. Nosso
            objetivo é ajudar desenvolvedores de todos os níveis a encontrar
            recursos, aprender novas linguagens e aprimorar suas habilidades.
          </p>
          <p className="text-lg mb-4">
            Oferecemos uma variedade de recursos, incluindo tutoriais
            interativos, comparações entre diferentes linguagens e artigos sobre
            as últimas tendências e melhores práticas de programação.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Funcionalidades do Site
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li className="text-lg mb-2">
              <strong>Guias de Aprendizado:</strong> Explore tutoriais e guias
              detalhados para aprender sobre diversas linguagens de programação,
              desde as mais populares até as emergentes.
            </li>
            <li className="text-lg mb-2">
              <strong>Comparações de Linguagens:</strong> Compare diferentes
              linguagens de programação para entender qual delas é mais adequada
              para suas necessidades e projetos.
            </li>
            <li className="text-lg mb-2">
              <strong>Artigos e Dicas:</strong> Leia artigos sobre tendências
              atuais, dicas de programação e melhores práticas para aprimorar
              suas habilidades.
            </li>
            <li className="text-lg mb-2">
              <strong>Comunidade e Suporte:</strong> Participe de fóruns e
              discussões para tirar dúvidas e compartilhar conhecimentos com
              outros desenvolvedores.
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Infos;