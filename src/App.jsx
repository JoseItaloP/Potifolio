import React from "react";
import Note from "./assets/Notebook.png";
import Phone from "./assets/Phone.png";
import Mnote from "./assets/MovieesNoteBook.png"
import Mphone from "./assets/MovieeesPhone.png";
import GitHub from "./assets/GitHub.jsx";
import Linkedin from "./assets/Linkedin.jsx";
import { GrDocumentPdf } from "react-icons/gr";
import Curriculo from "./assets/Curriculo.pdf";
import "./App.css";

function App() {
  function hamdleCopyEmail() {
    const email = "jose_italo_pf021@hotmail.com";
    navigator.clipboard.writeText(email);
  }

  return (
    <>
      <section className="FaceDiv">

        <div className="ElementsFace">
          <h3 className="Fh3 transitions">Oi, me chamo José Italo, e eu sou um</h3>
          <h1 className="Fh1 transitions">Desenvolvedor</h1>
          <div className="Divider">
            <h1 className="Sh1 transitions">FrontEnd</h1>

            <p className="AboutMe transitions">
              Após estudar Design por 2 anos, migrei para a área de tecnologia
              em desenvolvimento Web trabalhando como freelancer usando{" "}
              <strong>React</strong> e <strong>JavaScript</strong>, além das
              funcionalidades mais básicas como <strong>Html</strong> e{" "}
              <strong>Css</strong>.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="MainDiv SlideInBot">
        <div className="Bestes Drop">Meus melhores projetos</div>
        <article className="Grid">
          <div className="Project">
            <h1 className="Drop4 ProjectTittle">Do You Know a System?</h1>
            <div className="Imgs Drop3">
              <img
                src={Note}
                alt="Exemplo de projeto DKS em um Notebook."
                className="NoteB"
              />
              <img
                src={Phone}
                alt="Exemplo de projeto DKS em um Celular."
                className="Phone"
              />
            </div>
            <p className="ProjectText Drop2">
              DKS é um fórum aperto para discutições sobre sistemas de RPG,
              regras, debates sobre temas diversos e mais! Criado usando{" "}
              <strong>React</strong>, o usuário consegue criar uma conta, posts
              com imagens e escrever comentários, que ficam armazenados no banco
              de dados do <strong>FireBase</strong>.
            </p>
            <button className="Butto slowMotion  Drop2" >
              <a
                href="https://joseitalop.github.io/DKS/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projeto
              </a>
            </button>
          </div>
          <div className="Project">
            <h1 className="Drop4 ProjectTittle">Movieees</h1>
            <div className="Imgs Drop3">
              <img
                src={Mnote}
                alt="Exemplo de projeto Moviees em um Notebook."
                className="NoteB"
              />
              <img
                src={Mphone}
                alt="Exemplo de projeto Moviees em um Celular."
                className="Phone"
              />
            </div>
            <p className="ProjectText Drop2">
              Movieees é feito para você pesquisar os melhores e mais populares filmes e series de tv da atualidade ou de todos os tempos.
              Usando <strong>React</strong>, <strong>TypeScript</strong> e <strong>Tailwind</strong>, junto da Api do The Movie DB, Movieees entrega um site fluido e responsivo, podendo ser acessado em qualquer plataforma.
            </p>
            <button className="Butto slowMotion  Drop2" >
              <a
                href="https://movieees-sigma.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projeto
              </a>
            </button>
          </div>
        </article>
      </section>
      <section className="FootDiv SlidFooter">
        <h1 className="Contato Drop5">Quer entrar em contato?</h1>
        <h3 className="Drop5">Me encontre pelo:</h3>
        <div className="LinksBox">
          <ul>
            <li>
              <abbr title="Meu Linkedin">
                <a href="https://www.linkedin.com/in/josé-italo/" target="_blank" rel="noopener noreferrer" className="SVGFile LinkedinHover DropLink">
                  <Linkedin />
                </a>
              </abbr>
            </li>
            <li>
              <abbr title="Meu Github">
                <a href="https://github.com/JoseItaloP" target="_blank" rel="noopener noreferrer" className="SVGFile GitHover DropLink">
                  <GitHub  />
                </a>
              </abbr>
            </li>
            <li >
              <abbr title="Donwload do Currículo">
                <a
                  href={Curriculo}
                  download={'Jose_Italo_Curriculo'}
                  className="SVGFile PDFHover DropLink"
                >
                  <GrDocumentPdf />
                </a>
              </abbr>
            </li>
          </ul>
        </div>
        <h3 className="Drop5">Ou copiando o Email abaixo com um click!</h3>
        <button onClick={hamdleCopyEmail} className="EmailName slowMotion">Jose_italo_pf021@hotmail.com</button>
      </section>
    </>
  );
}

export default App;
