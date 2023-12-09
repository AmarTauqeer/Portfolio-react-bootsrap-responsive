import React, { useState } from "react";

const Contact = () => {
  const[firstName, setFirstName]=useState("")
  const[lastName, setLastName]=useState("")
  const[message, setMessage]=useState("")
  const[email, setEmail]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget;
    console.log(form.checkValidity())
    alert('hi '+firstName +'your message has been sent.')
    
  };
  return (
    <>
      <div className="container mt-5">
        <section id="contact" style={{ height: "100vh" }}>
          <div className="h4 text-center font-weight-bold">Contact</div>
          <hr className="w-25 m-auto" />
          <form onSubmit={handleSubmit} className="row g-3 was-validated pt-5" noValidate>
            <div className="col-md-4">
              <label for="validationCustom01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                
              />
              <div className="valid-feedback">Optional</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustomUsername" className="form-label">
                Email
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Please choose an email.</div>
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom03" className="form-label">
                Message
              </label>
              <textarea
                type="text"
                className="form-control"
                id="validationCustom03"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                required
              />
              <div className="invalid-feedback">Please provide your message.</div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="button" onClick={handleSubmit}>
                Submit form
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
