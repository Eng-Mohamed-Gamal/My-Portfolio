import React, { useEffect, useRef } from "react";

export default function About() {
  const myRef = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();
  const myRef4 = useRef();
  useEffect(() => {
    let arr = myRef.current.childNodes;
    const options = {
      rootMargin: "-250px 0px",
    };
    const options2 = {
      rootMargin: "-100px 0px",
    };
    const observer = new IntersectionObserver((boxs) => {
      boxs.forEach((box) => {
        box.target.classList.toggle("observe", box.isIntersecting);
      });
    }, options);

    arr.forEach((box) => {
      observer.observe(box);
    });


    let arr2 = Array.from(myRef3.current.childNodes)
    let arr3 = Array.from(myRef4.current.childNodes)
    let bigArr = []
    bigArr.push(...arr2 , ...arr3)


    const observer2 = new IntersectionObserver((boxs) => {
      boxs.forEach((box) => {
        box.target.classList.toggle("noTrans", box.isIntersecting);
      });
    }, options2);

    bigArr.forEach((box) => {
      observer2.observe(box);
    });

  }, []);


  return (
    <div className="about" id="About">
      <div className="container" ref={myRef2}>
        <div className="all">
          <div className="col" ref={myRef3}>
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
          <div className="col" ref={myRef4}>
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
          <span>my</span> skills
        </h1>
        <div className="skills" ref={myRef}>
          <div className="box">
            <div className="go">
              <div className="circle" style={{ "--i": "100%" }}>
            <h3>html</h3>
        
              </div>
            </div>
          </div>
          <div className="box">
            <div className="go">
              <div className="circle" style={{ "--i": "90%" }}>
            <h3>sass</h3>
            
              </div>
            </div>
          </div>
          <div className="box">
            <div className="go">
              <div className="circle" style={{ "--i": "80%" }}>
            <h3>react</h3>
            
              </div>
            </div>
          </div>
          <div className="box">
            <div className="go">
              <div className="circle" style={{ "--i": "50%" }}>
            <h3>redux&toolkit</h3>
          
              </div>
            </div>
          </div>
          <div className="box">
            <div className="go">
              <div className="circle" style={{ "--i": "60%" }}>
            <h3>git & github</h3>
            
              </div>
            </div>
          </div>
          <div className="box">
            <div className="go">
              <div className="circle" style={{ "--i": "100%" }}>
            <h3>css</h3>
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
