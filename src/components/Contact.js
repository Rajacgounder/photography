import React from "react";
//import ContactButtons from "./ContactButtons";

import emailjs from "emailjs-com";
import Header from "./Header";
import Footer from "./Footer";
import "./contact.css";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_7ygkxh6",
        e.target,
        "user_eaAos8d0K6KRsrI5pGEg5"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Oops!!! Email is not sent!");
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className="my-5">
        <Header />
        <h1 className="text-center">Contact US</h1>

        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto font-weight-bold">
              <form onSubmit={sendEmail}>
                <div className="form-group">
                  <label for="exampleFormControlInput1" className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="user_name"
                    placeholder="enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    name="contact_number"
                    className="form-control"
                    pattern="[7-9]{1}[0-9]{9}"
                    minLength="10"
                    id="phone"
                    placeholder="enter your number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Write a message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="3"
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-outline-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
