import React, { useEffect, useRef, useState } from 'react'
import { Themes } from '../data'


const getColor = ()=>{
    let basicColor = "hsl(252, 35%, 51%)" ;
    if (localStorage.mainColor){
        basicColor = localStorage.mainColor
    }
    return basicColor ;
}
const getTheme = ()=>{
    let basicTheme = "dark-theme" ;
    if (localStorage.Theme){
        basicTheme = localStorage.Theme
    }
    return basicTheme ;
}


export default function Switcher() {
    const myRef = useRef()
    const myRef2 = useRef()
    const [color , setColor] = useState(getColor())
    const [theme , setTheme] = useState(getTheme())
    const chanageColor = (e)=>{
        setColor(e)
    }
    const Handler = ()=>{
        myRef2.current.classList.add("trans0")
    }
    const Handler2 = ()=>{
        myRef2.current.classList.remove("trans0")
    }
    const Handler3 = ()=>{
        if(theme === "dark-theme"){
            setTheme("light-theme")
        }else{
            setTheme("dark-theme")
        }
    }
    useEffect(()=>{
        document.documentElement.style.setProperty("--main-theme" , color)
        localStorage.mainColor = color
    },[color])


    useEffect(()=>{
        document.documentElement.className = theme ;
        localStorage.Theme = theme
    })

  return (
<div className="switcher" ref={myRef2}>
<div className="open" ref={myRef} onClick={Handler}><i class="fa-solid fa-arrow-right"></i></div>
<div className="go">
<div className="title">
        <h2>style switcher</h2>
        <i className='fa-solid fa-xmark' onClick={Handler2}  ></i>
        </div>
        <div className="colors">
        {Themes.map((box)=>{
            return (
                <div className="box" key={box.id} onClick={ ()=> chanageColor(box.color)}>
                    <img src={box.img} alt="" />
                </div>
            )
        })}
        </div>
        <div className="back-ground">
            <button onClick={Handler3} > <i class={theme !==  "dark-theme" ? "fa-regular fa-moon" : "fa-regular fa-sun"}></i>    </button>
        </div>
</div>
</div>
  )
}
