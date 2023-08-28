import React, { useRef } from 'react'
import { Themes } from '../data'

export default function Switcher() {
    const myRef = useRef()
    const myRef2 = useRef()

    const Handler = ()=>{
        myRef2.current.classList.add("trans0")
    }
    const Handler2 = ()=>{
        myRef2.current.classList.remove("trans0")
    }

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
                <div className="box" key={box.id}>
                    <img src={box.img} alt="" />
                </div>
            )
        })}
        </div>
        <div className="back-ground">
            <button><i class="fa-regular fa-sun"></i></button>
        </div>
</div>
</div>
  )
}
