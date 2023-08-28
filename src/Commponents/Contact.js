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
          </div>
        </div>
        <form action="">
          <div className="inputs">
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Subject" />
          </div>
          <textarea  cols="30" rows="10" className="area" placeholder="message"></textarea>
          <button type="submit">
            send message <div className="send"><i class="fa-regular fa-paper-plane"></i></div>
          </button>
        </form>
      </div>
    </div>
  );
}
