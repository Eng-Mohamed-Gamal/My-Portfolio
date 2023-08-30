import React, { useEffect, useRef } from "react";
import { useTypewriter } from "react-simple-typewriter";

let string = "fsdfndjfbdjfkkjhk0123456789";
let arr = [];
setInterval(() => {
  let random =
    string.split("")[Math.floor(Math.random() * string.split("").length)];
  let choose = random;
  arr.push(choose);
  setTimeout(() => {
    arr.pop(choose);
  }, 3000);
}, 20);

export default function Home() {
  const myRef = useRef();
  useEffect(() => {
    let ele = myRef.current;
    let left = Math.floor(Math.random() * 250);
    let size = Math.floor(Math.random() * 60);
    if (ele) {
      ele.style.fontSize = size + "px";
      ele.style.left = left + "px";
    }
  });

  const [text] = useTypewriter({
    words: ["front-end-developer"],
    loop: {},
  });

  return (
    <div className="home" id="Home">
      <div className="box">
        <div className="cloud">
          {arr.map((str, index) => {
            return (
              <div className="char" key={index} ref={myRef}>
                {str}
              </div>
            );
          })}
        </div>
      </div>
      <div className="con">
        <h1>i’m mohamed gamal</h1>
        <h2> i’m {text}</h2>
      </div>
    </div>
  );
}
