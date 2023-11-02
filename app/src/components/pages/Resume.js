import React from 'react'
import './resume.css'

const Resume = () => {
  return (
    <>
      <section id="resume" class="resume">
        <div class="container">
          <div className=" text-center">
            <h3>
              Resume
            </h3>
            <hr className="w-25 m-auto" />
          </div>

          {/* <div class="section-title">
          <span>My Resume</span>
          <h2>My Resume</h2>
        </div> */}

          <div class="row mt-5">
            <div class="col-lg-6">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>Amar Tauqeer</h4>
                <p><em>Amar Tauqeer MSc has more than 4 years of experience in software development using different programming languages such as Python, Oracle, and C#. He used many frameworks  for web backend development, such as Django, Flask, and Plotly Dash. Recently, the semantic stack has been used in EU project smashHit(https://cordis.europa.eu/project/id/871477), where I was involved in developing smashHitCore ontology, knowledge graph, and building smenatic models for contracts.</em></p>
                <p>
                  <ul>
                    <li>Teckniker strasse 7, 6020 Innsbruck, Austria</li>
                    <li>+43 688 6404 0449</li>
                    <li>amar.tauqeer@gmail.com, amar.tauqeer@wur.nl</li>
                  </ul>
                </p>
              </div>

              <h3 class="resume-title">Education</h3>

              <div class="resume-item">
                <h4>Doctor of Philosophy -PhD</h4>
                <h5>10/2020 - present</h5>
                <p><em>WUR (Wageningen Data Competence Center and Consumption and Healthy Lifestyles Chair Group, Wageningen University & Research), The Netherlands</em></p>
                <p>Course Work: Semantic Web, Research Seminar: Semantic Technology, Text and Web Mining mit RapidMiner, Data Management and Analysis for Environmental Sciences, Distributed systems,
                  Successful Meetings</p>
              </div>
              <div class="resume-item">
                <h4>Master in Information Systems</h4>
                <h5>11/2013 - 08/2017</h5>
                <p><em>WU (Vienna University of Economics and Business), Austria</em></p>
                <p>Course Work: Business process management, spatial business intelligence, data mining
                  and decision support systems, Sustainable IS, Distributed systems,
                  Database systems, SAP ERP, SAPBW</p>
              </div>
              <div class="resume-item">
                <h4>Master in Information Technology</h4>
                <h5>09/2009 - 08/2011</h5>
                <p><em>University of Gujrat, Pakistan</em></p>
                <p>Course Work: Programming Fundamentals, Information and
                  communication Technology, Data Communications, Technology Management,
                  Information Systems, Software Engineering, Web Systems and Technology, Data
                  Warehousing and System Integration & Architecture etc.</p>
              </div>
              <div class="resume-item">
                <h4>Bachelor in Computer Science</h4>
                <h5>09/2002 - 08/2005</h5>
                <p><em>Allama Iqbal Open University Islamabad, Pakistan</em></p>
                <p>Course Work: Fundamentals of Computer, Statistics for Management, Mathematics for Computing, Discrete Mathematics,
                  Programming language-1, Data Structures, Business Communication, Digital Logic Design & Research Methods etc.</p>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Professional Experience</h3>
              
              <div class="resume-item">
                <h4>Doctor of Philosophy -PhD Thesis</h4>
                <h5>11/2023 - present</h5>
                <p><em>Wageningen Data Competence Center and Consumption and Healthy Lifestyles Chair Group, Wageningen University & Research, the Netherlands</em></p>
                <p>
                  <ul>
                    <li>Working on PhD Thesis</li>
                    <li>Technology: Semantic Web, Knowledge Graph, Ontologies, SPARQL, VocBench,
                      protege </li>
                    <li>Employment type: Diploma thesis / dissertation</li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Researcher</h4>
                <h5>04/2021 - 10/2023</h5>
                <p><em>University of Innsbruck, Innsbruck, Austria</em></p>
                <p>
                  <ul>
                    <li>Working on EU Project Smashit: https://smashhit.eu/</li>
                    <li>Technology: Semantic Web, Knowledge Graph, Ontologies, SPARQL, VocBench,
                      protege </li>
                    <li>Employment type: full-time</li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Working student</h4>
                <h5>09/2020 - 02/2021</h5>
                <p><em>University of Innsbruck, Innsbruck, Austria</em></p>
                <p>
                  <ul>
                    <li>Graph validator</li>
                    <li>Technology: Knowledge Graph, GraphDB, React JS, Node JS, Bootstrap 4, REST
                      API's</li>
                    <li>Employment type: Freelancer / project work</li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Working student</h4>
                <h5>09/2020 - 02/2021</h5>
                <p><em>University of Innsbruck, Innsbruck, Austria</em></p>
                <p>
                  <ul>
                    <li>Graph validator</li>
                    <li>Technology: Knowledge Graph, GraphDB, React JS, Node JS, Bootstrap 4, REST
                      API's</li>
                    <li>Employment type: Freelancer / project work</li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Freelancer / project work</h4>
                <h5>05/2019 - 08/2020</h5>
                <p><em>Citizen International Plastic Industries (Pvt) Ltd., Pakistan</em></p>
                <p>
                  <ul>
                    <li>Modules: Accounts, Purchase, Stock</li>
                    <li>Technology: Oracle PLSQL, Oracle Database 10G, Todd</li>
                    <li>Employment type: Part-time</li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Freelancer / project work</h4>
                <h5>03/2018 - 03/2019</h5>
                <p><em>Toyo Group of Industries Gujranwala, Pakistan</em></p>
                <p>
                  <ul>
                    <li>Working on different modules such as Accounts, Sales, Purchase and Stock.</li>
                    <li>Techonology: Oracle PlSQL, Oracle database 10G, Oracle Developer Suite 10G,
                      Todd.</li>
                    <li>Employment type: Part-time</li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Master Thesis</h4>
                <h5>04/2017 - 11/2017</h5>
                <p><em>Vienna University Of Economics and Business, Austria</em></p>
                <p>
                  <ul>
                    <li>Master's thesis: Visualizing Geo-located Open Data</li>
                    <li>Techonology: Oracle PlSQL, Oracle database 10G, Oracle Developer Suite 10G,
                      Todd.</li>
                    <li>Type of employment: Diploma thesis / dissertation</li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Senior Software Developer</h4>
                <h5>01/2011 - 01/2013</h5>
                <p><em>PMS (PVT) Ltd. Gujranwala, Pakistan</em></p>
                <p>
                  <ul>
                    <li>Projects: PIPS (Pakistan International Public School). Modules Academics, Payroll, Fee etc.</li>
                    <li>World Electronics Inventory Management system. Modules: Accounts, Sale, Purchase.</li>
                    <li>World Electronics Inventory Management system.</li>
                    <li>Employment type: Full-time</li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Software Developer</h4>
                <h5>01/2006 - 01/2009</h5>
                <p><em>PMS (PVT) Ltd. Gujranwala, Pakistan</em></p>
                <p>
                  <ul>
                    <li>Projects: HiTech Petroleum Inventory Management system. Modules: Accounts, Sale, Purchase, Stock, etc,.</li>
                    <li>Gentry Inventory Management system. Modules: Accounts, Sale, Purchase, Stock etc.</li>
                    <li>Yousaf Autos
                      Inventory Management system. Modules: Accounts, Insurance claim, Spare parts, Stock etc.</li>
                    <li>Employment type: Full-time</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Resume