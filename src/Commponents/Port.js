import React, { useEffect, useRef } from "react";
import ForPort from "./ForPort";

 export const arr = [
  {
    title : "hotel web",
    link : "https://web-react-hotel-jemy.netlify.app" ,
    img : "assets/Portfolio/Hotel.png",
  },
  {
    title : "Blog web",
    link : "http://web-react-search-blogs-jemy.netlify.app" ,
    img : "assets/Portfolio/Blog.png",
  },
  {
    title : "coffee web",
    link : "https://web-coffee-shop-jemy.netlify.app" ,
    img : "assets/Portfolio/Coffee.png",
  },
  {
    title : "Store web",
    link : "https://web-e-commerce-react-jemy.netlify.app" ,
    img : "assets/Portfolio/Store.png",
  },
  {
    title : "food web",
    link : "https://food-web-jemy.netlify.app" ,
    img : "assets/Portfolio/Food.png",
  },
  {
    title : "Marketing web",
    link : "https://web-marketing-jemy.netlify.app" ,
    img : "assets/Portfolio/Marketing.png",
  }
];

export default function Port() {

  const myRef = useRef()
  useEffect(()=>{
    let arr = myRef.current.childNodes
    const options = {
      rootMargin : "-250px 0px -300px 0px"
    }
    const observer = new IntersectionObserver((boxs)=>{
      boxs.forEach((box)=>{
        box.target.classList.toggle("observe-2" , box.isIntersecting)
      })
    },options)

      arr.forEach(box => {
        observer.observe(box)
      });
    

  },[])

  return (
    <div className="port" id="Portfolio">
      <div className="container" ref={myRef} >
        {arr.map((box , index)=>{
            return (
              <ForPort link={box.link} img={box.img} title={box.title} key={index} ></ForPort>
            )
        })}
      </div>
    </div>
  );
}
