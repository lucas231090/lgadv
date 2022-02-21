import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
         <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Bem-vindo - Advocacia LG.</h1>
              <h1 className="nameLawyer"> Dr. Luiz Gustavo Cardozo</h1>
              <h5 className="especialista">Advogado Criminalista, especialista em direito penal e processo penal</h5>
              <h5 className="especialista">Endereço: Avenida dos Estudantes, nº 10000 - Ibiporã/PR</h5>
              <h5 className="especialista">Contato: WhatsApp (43)9999-9999</h5>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Atendimento 24 horas em Londrina e região!"
                    ]}
                    typeSpeed={100}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  Conheça meu trabalho
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
