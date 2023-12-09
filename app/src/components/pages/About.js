import React from "react";
import pic from "../../images/amar.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="container">
      <section id="about" style={{ backgroundColor: "#ffff" }}>
        <div className="container">
          <div className=" text-center">
            <h3>
              About <span className="text-primary"> Me</span>
            </h3>
            <hr className="w-25 m-auto" />
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-6 col-lg-4 col-12">
              <img src={pic} className="pic" alt="..." />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8 col-12">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                  <p>
                    <span className="fw-bold">Name:</span>&nbsp;&nbsp; Amar
                    Tauqeer
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                  <p>
                    <span className="fw-bold">Age:</span>&nbsp;&nbsp; 39
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                  <p>
                    <span className="fw-bold">Website:</span>&nbsp;&nbsp;{" "}
                    <a
                      href="https://amartauqeer.github.io/Portfolio-react-bootsrap-responsive/"
                      target="_blank"
                    >
                      https://amartauqeer.github.io/Portfolio-react-bootsrap-responsive/
                    </a>
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                  <p>
                    <span className="fw-bold">Degree:</span>&nbsp;&nbsp; Master
                    (continue PhD)
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                  <p>
                    <span className="fw-bold">Phone:</span>&nbsp;&nbsp; +43 688
                    6404 0449
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                  <p>
                    <span className="fw-bold">Email:</span>&nbsp;&nbsp;
                    amar.tauqeer@gmail.com
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                  <p>
                    <span className="fw-bold">City:</span>&nbsp;&nbsp;
                    Innsbruck, Austria
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                  <p>
                    <span className="fw-bold">Developer/Researcher:</span>
                    &nbsp;&nbsp; Available
                  </p>
                </div>
              </div>
              <h3 className="text-center pt-5">Professional Summary</h3>

              <p className="lh-lg">
                Amar Tauqeer is a professional developer and researcher at
                Wageningen University & Research, the Netherlands. He has
                expreienced in Semantic Web, Knowledge Graph, Ontologies,
                Django, Flask, Node, Express, React, Java Spring Boot, Java Spring data
                jpa, Java spring web security, MySQl, MonogoDB, Middleware, JWT,
                Passport, LocalStrategy, Local Storage, JavaScript, Jquery,
                HTML5, Web Programming Skills, E-Commerce, Asp.net MVC, C#,
                Entity framework, SQL Server, SQL server Management Studio,
                Linq, SAP Crystal Reports, Database first approach, Code first
                approach. His main ambitious is to be able to work for an
                encouraging and stable company that will assist him in
                developing,improving, and obtaining the necessary skills in
                order to become the best engineer possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
