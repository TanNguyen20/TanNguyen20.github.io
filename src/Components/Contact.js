import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from '@emailjs/browser';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
  }

  sendEmail = (e) => {
    e.preventDefault();
    document.querySelector("#image-loader").style.display = "inline-block";
    if (this.contactRef.current.contactMessage.value === '' || this.contactRef.current.contactName.value === ''
      || this.contactRef.current.contactEmail.value === '' || this.contactRef.current.contactSubject.value === '') {
      document.querySelector("#image-loader").style.display = "none";
      document.querySelector("#message-warning").innerHTML = 'Please fill all the fields';
      document.querySelector("#message-warning").style.display = "block";
    }
    else {
      emailjs.sendForm('service_4207vap', 'template_1kyn63v', this.contactRef.current, 'SUssSVv8xihUcIPBC')
        .then((result) => {
          document.querySelector("#image-loader").style.display = "none";
          document.querySelector("#message-warning").style.display = "none";
          document.querySelector("#contactForm").reset();
          document.querySelector("#message-success").style.display = "block";
          setTimeout(() => {
            document.querySelector("#message-success").style.display = "none";
          }, 6000);
        }, (error) => {
          document.querySelector("#image-loader").style.display = "none";
          document.querySelector("#message-warning").innerHTML = error.text;
          document.querySelector("#message-warning").style.display = "block";
        });
    }
  };

  render() {
    if (!this.props.data) return null;

    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form ref={this.contactRef} id="contactForm" name="contactForm" onSubmit={this.sendEmail}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">
                      Subject <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning">
                <i className="fa fa-warning"></i>Error when send email
                <br />
              </div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, i will be in touch soon!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address, Phone and Email</h4>
                <p className="address">
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
