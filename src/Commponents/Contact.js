import React from "react";

export default function Contact() {
  return (
    <div className="contact" id="Contact">
      <div className="container">
        <div className="col">
          <h2>feel free to text me !</h2>
          <p>
            i’m always here to discuss new projects , creative ideas or chance
            to be a part of your vision{" "}
          </p>
          <div className="links">
            <a
              href="https://www.facebook.com/mohamed.gamalkamal.79?mibextid=ZbWKwL"
              target="blank"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://github.com/Eng-Mohamed-Gamal" target="blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-gamal-47b19028b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlUH1660lT4Waei1jpq3p%2Fw%3D%3D"
              target="blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <form action="https://formspree.io/f/xbjvoeen" method="POST">
          <div className="inputs">
            <input type="text" placeholder="Name" name="Name" required />
            <input type="email" placeholder="Email" name="Email" required />
            <input type="text" placeholder="Subject" name="Subject" required />
          </div>
          <textarea
            cols="30"
            rows="10"
            className="area"
            name="Message"
            required
            placeholder="message"
          ></textarea>
          <button type="submit">
            send message{" "}
            <div className="send">
              <i class="fa-regular fa-paper-plane"></i>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
