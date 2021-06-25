import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const [showSpan, setshowSpan] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    if (message && email) {
      setshowSpan(true);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={formHandler}>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Email"
          />
          <textarea
            placeholder="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <button type="submit">Send</button>
          {showSpan && <span>Thanks,I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
