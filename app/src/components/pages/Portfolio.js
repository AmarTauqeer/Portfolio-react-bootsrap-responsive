import React from "react";
import MERN from "../../images/MERN-Stack.png";
import KG from "../../images/kg.jpg";
import ASP from "../../images/asp.png";
import DJ from "../../images/dj-react.jpg";
import Csharp from "../../images/Csharp1.png";
import SpringReact from "../../images/Spring-Boot-React.png";
import FlaskFastReact from "../../images/flask-fastapi-react-bootstrap.jpg"
import FlaskKgReact from "../../images/flask-swagger-react.jpg"
import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <section id="portfolio">
          <div className="h4 text-center font-weight-bold">Portfolio</div>
          <hr className="w-25 m-auto" />
          <br />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={FlaskFastReact} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">CRUD Demo</h5>
                    <p className="card-text">
                    FastAPI, bootstrap, and React
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/FastAPITutorial"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://www.youtube.com/watch?v=SRI4HxyZgTU&ab_channel=AmarTauqeer"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={FlaskKgReact} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Data Sharing (GDPR) Contracts</h5>
                    <p className="card-text">
                    Flask, Knowledge Graph, GraphDB, SPARQL, Swagger, bootstrap, and React
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/Contract"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={FlaskKgReact} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Data Sharing (GDPR) Contracts with SHACL</h5>
                    <p className="card-text">
                    Flask, Knowledge Graph, GraphDB, SPARQL, SHACL, Swagger, bootstrap, and React
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/Contract-shacl-repairs"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://www.youtube.com/watch?v=PkZfFXdVEp8&ab_channel=AmarTauqeer"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={DJ} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Ecommerce</h5>
                    <p className="card-text">
                      Django, SQLite, React, and Bootstrap.
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/Ecommerce"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://www.youtube.com/watch?v=TxBvz741hB8&ab_channel=AmarTauqeer"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={SpringReact} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Employee Management</h5>
                    <p className="card-text">
                      Spring, MySql, React, and Bootstrap.
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/spring-react-auth-app"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://www.youtube.com/watch?v=dlks60SxjpQ&ab_channel=AmarTauqeer"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={DJ} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Professional Dashboard</h5>
                    <p className="card-text">Django, React and Material UI.</p>
                    <a
                      href="https://github.com/AmarTauqeer/ProfessionalDashboard"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://www.youtube.com/watch?v=3aEY13WcWwo&ab_channel=AmarTauqeer"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={DJ} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">
                      Admin Dashboard (with Bootstrap)
                    </h5>
                    <p className="card-text">
                      Django, MongoDB, React, Redux and Bootstrap.
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/Dashboard"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://www.youtube.com/watch?v=wAa52utKTMk&ab_channel=AmarTauqeer"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={DJ} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">
                      React-Django-MongoDB-CRUD-APP
                    </h5>
                    <p className="card-text">
                      CRUD operation using Django, React, and MongoDB.
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/Crud"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://www.youtube.com/watch?v=PdZE6vuM004&ab_channel=AmarTauqeer"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={DJ} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Admin Dashboard</h5>
                    <p className="card-text">
                      Django, MongoDB, React, Redux and Material UI.
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/MaterialDashboard"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://www.youtube.com/watch?v=kNmn1tR4dhg&ab_channel=AmarTauqeer"
                      target="_blank"
                    >
                      video
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://drive.google.com/file/d/1XtRr2bIkczCGt8XIKzvYsGpjOwCWGHPN/view"
                      target="_blank"
                    >
                      video
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://drive.google.com/file/d/1sVWNYi4foQtsGU2p8tm6TcFAyDBd5urH/view"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={MERN} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">MERN-Stack-Redux-CRUD</h5>
                    <p className="card-text">
                      React, Redux and MongoDB CRUD oprations.
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/MERN-Redux-Crud-App"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://drive.google.com/file/d/17qF61vvYdghemyIs3CIsyvY6_R_D-kJ3/view"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={MERN} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">MERN-Full-Stack Part-I</h5>
                    <p className="card-text">
                      Order management system using React, Express, Node,
                      MongoDB and Bootstrap.
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/MERN-Full-Stack-Application"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://drive.google.com/file/d/1frmBJ8NBUC0mATmcox15hmmmG7G9kB8S/view"
                      target="_blank"
                    >
                      video
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://drive.google.com/file/d/106b0wgjSVY8HK2Jd09ohCi6G_QWeUdfJ/view"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={MERN} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">MERN-Full-Stack Part-II</h5>
                    <p className="card-text">
                      Order management system using React, Express, Node,
                      MongoDB and Bootstrap.
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/MERN-Full-Stack-Application"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://drive.google.com/file/d/106b0wgjSVY8HK2Jd09ohCi6G_QWeUdfJ/view"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div> */}
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={ASP} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Shoppin-Cart-PayPal</h5>
                    <p className="card-text">
                      E-Commerce application using ASP.NET MVC5 and MSSQLSERVER.
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/Projects-Screen-Shots-and-Demos/tree/GentryShoppingCartWithPayPalIntegration"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://drive.google.com/file/d/1mLgS8tBHO-voUiCxnOxQ7px98EiOpxEp/view"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={Csharp} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Window-Desktop-Application</h5>
                    <p className="card-text">
                      Windows desktop application using C# and MSSQL SERVER.
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/Projects-Screen-Shots-and-Demos/tree/AmarTauqeer-WindowApplication"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://drive.google.com/file/d/1yv5I-746gutq5u6mbtFL-dBiJjJu7v_Y/view?usp=sharing"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
                <div className="card">
                  <img src={KG} className="img-fluid" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Graph Validator</h5>
                    <p className="card-text">
                      Knowledge Graph validation using React, GraphDB and
                      SPARQL.
                    </p>
                    <a
                      href="https://github.com/AmarTauqeer/graph-validation"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="https://drive.google.com/file/d/19UryiYpiFudZ8Mozy43ZU6mWk2aLaHNo/view"
                      target="_blank"
                    >
                      video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
