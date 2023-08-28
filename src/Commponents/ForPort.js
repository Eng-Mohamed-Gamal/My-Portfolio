import React, { useState } from "react";

export default function ForPort(props) {
  const [pop, setPop] = useState(false);
  const toggle = () => {
    setPop(!pop);
  };
  return (
    <div className="all">
      <div className="box" onClick={toggle}>
        <img src={props.img} alt="" className="one" />
        <div className="absolute">
          <h2>Click me !!!</h2>
        </div>
      </div>
        {pop && (
        <div className="pop">
          <i class="fa-solid fa-xmark" onClick={toggle}></i>
          <h1>{props.title}</h1>
          <div className="card">
            <div className="face front">
                <img src={props.img} alt="" />
            </div>
            <div className="face back">
                <h2>go now !!!</h2>
            </div>
          </div>
          <a href={props.link} target="blank">
          link of web :  <span>{props.link}</span>
          </a>
        </div>
      )}

    </div>
    
  );
}
