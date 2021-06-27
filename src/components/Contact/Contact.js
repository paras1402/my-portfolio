import { useState } from "react";
import "./Contact.scss";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const [phone, setPhone] = useState("");

  const [showSpan, setshowSpan] = useState(false);

  const formHandler = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    if (message && email && firstName) {
      emailjs
        .sendForm(
          "service_hnulat2",
          "template_a6czgof",
          e.target,
          "user_aPPceWouFlMv7md2N5YfS"
        )
        .then(
          (result) => {
            setshowSpan(true);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setMessage("");
      setEmail("");
      setFirstName("");
      setlastName("");
      setshowSpan(true);
      setPhone("");
    }
  };

  return (
    <div className="outer">
      <h1>Contact</h1>
      <p className="subheading">
        Any questions? Remarks? Just write me a message
      </p>
      <div className="contact-container" id="contact">
        <div className="content">
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>Fill up the form to contact me..</p>
            <div className="icon-text">
              <PhoneIcon></PhoneIcon>
              <span>+91 9996434592</span>
            </div>
            <div className="icon-text">
              <MailIcon></MailIcon>
              <span>paraskangra14@gmail.com</span>
            </div>

            <div className="social-media">
              <a className="icon-circle">
                <FacebookIcon></FacebookIcon>
              </a>
              <a
                className="icon-circle"
                href="https://www.linkedin.com/in/paras-kangra/
"
              >
                <LinkedInIcon></LinkedInIcon>
              </a>
              <a className="icon-circle">
                <GitHubIcon></GitHubIcon>
              </a>
            </div>
          </div>

          <form onSubmit={formHandler}>
            <div className="col">
              <div className="form-group">
                <label htmlFor="first">First Name</label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="first"
                  name="from_name"
                  value={firstName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last">Last Name</label>
                <input
                  type="text"
                  id="last"
                  onChange={(e) => setlastName(e.target.value)}
                  value={lastName}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="contact"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group solo">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>
            </div>
            <div className="col">
              <div className="form-group solo">
                <button type="submit" className="primary">
                  Send Message
                </button>
                {showSpan && (
                  <p style={{ color: "black" }}>Message Send Successfully</p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
