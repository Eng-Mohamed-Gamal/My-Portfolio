import React, { useEffect, useRef } from "react";

export default function About() {
  const myRef = useRef();
  const myRef2 = useRef();
  useEffect(() => {
    let arr = myRef.current.childNodes;
    const options = {
      rootMargin: "-250px 0px",
    };
    const observer = new IntersectionObserver((boxs) => {
      boxs.forEach((box) => {
        box.target.classList.toggle("observe", box.isIntersecting);
      });
    }, options);

    arr.forEach((box) => {
      observer.observe(box);
    });



  }, []);
  const Stop = ()=>{
    document.querySelector(".go").style.display = "block"
    document.querySelector(".stop").style.display = "none"
    myRef2.current.classList.remove("animate")
  }
  const Go = ()=>{
    document.querySelector(".go").style.display = "none"
    document.querySelector(".stop").style.display = "block"
    myRef2.current.classList.add("animate")
  }

  return (
    <div className="about" id="About">
      <div className="container" ref={myRef2}>
        <button className="stop" onClick={Stop}>stop animation</button>
        <button className="go" onClick={Go}>go animation</button>
        <div className="all">
          <div className="col">
            <h3>
              first name : <span>mohamed</span>
            </h3>
            <h3>
              age : <span>20</span>
            </h3>
            <h3>
              freelance : <span>availabel</span>
            </h3>
            <h3>
              phone : <span>(+20) 01012707504</span>
            </h3>
          </div>
          <div className="col">
            <h3>
              {" "}
              last name : <span>amin</span>
            </h3>
            <h3>
              {" "}
              nationality : <span>egyptian</span>
            </h3>
            <h3>
              {" "}
              address : <span>egypt</span>
            </h3>
            <h3>
              {" "}
              languages : <span>arabic & english</span>
            </h3>
          </div>
        </div>
        <h1 className="cen">
          <span>me</span> skills
        </h1>
        <div className="skills" ref={myRef}>
          <div className="box">
            <div className="go">
              <div className="circle" style={{ "--i": "100%" }}>
                <h3>100%</h3>
              </div>
            </div>
            <h3>html</h3>
          </div>
          <div className="box">
            <div className="go">
              <div className="circle" style={{ "--i": "90%" }}>
                <h3>90%</h3>
              </div>
            </div>
            <h3>sass</h3>
          </div>
          <div className="box">
            <div className="go">
              <div className="circle" style={{ "--i": "80%" }}>
                <h3>80%</h3>
              </div>
            </div>
            <h3>react</h3>
          </div>
          <div className="box">
            <div className="go">
              <div className="circle" style={{ "--i": "50%" }}>
                <h3>50%</h3>
              </div>
            </div>
            <h3>redux&toolkit</h3>
          </div>
          <div className="box">
            <div className="go">
              <div className="circle" style={{ "--i": "60%" }}>
                <h3>60%</h3>
              </div>
            </div>
            <h3>git & github</h3>
          </div>
          <div className="box">
            <div className="go">
              <div className="circle" style={{ "--i": "100%" }}>
                <h3>100%</h3>
              </div>
            </div>
            <h3>css</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
