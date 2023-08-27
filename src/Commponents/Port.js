import React from "react";

export default function Port() {
  const arr = [
    "assets/Portfolio/Hotel.png",
    "assets/Portfolio/Store.png",
    "assets/Portfolio/Marketing.png",
    "assets/Portfolio/Food.png",
    "assets/Portfolio/Coffee.png",
    "assets/Portfolio/Blog.png",
  ];
  return (
    <div className="port" id="Portfolio">
      <div className="container">
        {arr.map((src , index)=>{
            return (
                <div className="box"  key={index}>
                    <img src={src} alt="" />
                    <div className="absolute">
                        <h2>Click me !!!</h2>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
}
