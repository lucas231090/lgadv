import React from "react";
import dados from "../img/dados.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      
      skills: [
        { id: "HTML5_skill", content: "Pedido de liberdade", porcentage: "100%", value: "80" },
        { id: "CSS3_skill", content: "Progressão de regime", porcentage: "90%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "Crime contra patrimônio",
          porcentage: "80%",
          value: "90"
        },
        { id: "PHP_skill", content: "Contra vida", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "Contra  lavagem de capitais ",
          porcentage: "60%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Crime tributário",
          porcentage: "50%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "Crimes financeiros",
          porcentage: "40%",
          value: "85"
        },
        {
          id: "Wordpress_skill",
          content: "Chama o russomano",
          porcentage: "30%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Formado na Unifil em 2019, atuo no ramo penal desde a graduação. Zelando pelos direitos de todos"
        },
        {
          id: "second-p-about",
          content:
            "Aqui mais uma informação sobre cursos e etc"
        },
        {
          id: "third-p-about",
          content:
            "Gosto de ganhar ações de danos morais ta bom"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">                 
                  <div className="col-md-6">
                    <div className="row">
                    <div className="title-box-2">
                        <h5 className="title-left">Principais serviços</h5>
                      </div>
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                      
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                        
                      </div>
                    
                    </div>
                   
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Sobre mim</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
