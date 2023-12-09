import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <section id="home" style={{ height: "100vh" }}>
        <div className="container-home">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                <div className="h2 text-center text-captalize fw-bold fst-italic">
                  Amar Tauqeer
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                <hr className="w-25 m-auto" />
                <div className="text-center my-4 text-uppercase fs-4 fst-italic">
                  Amar Tauqeer is a professional developer and researcher at Wageningen University & Research.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-3">
          <div className="col-sm-12 col-md-12 col-lg-12 col-12">
            Photo by{" "}
            <a href="https://unsplash.com/ja/@alesnesetril?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Ales Nesetril
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/Im7lZjxeLhg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
