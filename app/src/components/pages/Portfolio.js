import React from "react";
import MERN from "../../images/MERN-Stack.png";
import KG from "../../images/kg.jpg";
import ASP from "../../images/asp.png";
import DJ from "../../images/dj-react.jpg";
import Csharp from "../../images/Csharp1.png";
import SpringReact from "../../images/Spring-Boot-React.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <section id="portfolio">
          <div className="h4 text-center font-weight-bold">Portfolio</div>
          <hr className="w-25 m-auto" />
          <div className="container">
            <div className="row">
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
                      href="https://drive.google.com/file/d/19eO-7xMU_9Nd_NVUlCSMwmwFBIwsNCyN/view?usp=sharing"
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
                      href="https://drive.google.com/file/d/1-hdD4KKJq-2ydm2JG7-RN-A2fz8xo1Vu/view?usp=sharing"
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
                      href="https://drive.google.com/file/d/1KDtpI48J0KzMkjz9p7wi3L3vOdv0wMvy/view"
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
                      href="https://drive.google.com/file/d/1Vqun4qBkqQB9Z_r2Q3u5DWKVdJJrSG3b/view"
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
                      href="https://drive.google.com/file/d/18j82Jwt_WwMTWqldyZ_8jDfuRbfcv_B4/view"
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
                      href="https://drive.google.com/file/d/1V1clK5AGpzpjrLwYaVHSy-Jy3FOBBmWo/view"
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
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3 col-lg-4">
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
              </div>
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