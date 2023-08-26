import React, { useRef } from 'react'
import { useTypewriter } from 'react-simple-typewriter'

function Random(){
    let arr = "fsdfndjfbdjfkkjhk0123456789"
    let random = arr.split("")[Math.floor(Math.random() * arr.split("").length  )]
    return random;
}


function rain() {
let e = document.createElement("div")
e.classList.add("char");
e.innerText = Random();
document.querySelector(".cloud").appendChild(e)
setTimeout(()=>{
    document.querySelector(".cloud").removeChild(e)
},1000)
let left = Math.floor(Math.random() * 250)
e.style.left = left + "px" ;
let size =Math.floor( Math.random() * 60)
e.style.fontSize= size + "px"
}
setInterval(()=>{
rain()
},20)

export default function Home() {

const [text] = useTypewriter({
        words : ["front-end-developer"],
        loop : {}
    })


  return (
<div className="home">
    <div className="box">
        <div className="cloud">
        </div>
        <img src="assets/Me.jpg" alt="" />
    </div>
    <div className="con">
        <h1>i’m mohamed gamal</h1>
        <h2>  i’m  {text}</h2>
   
    </div>
</div>
  )
}
