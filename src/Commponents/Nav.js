import React, { useEffect, useRef } from 'react'



export default function Nav() {
const navRef = useRef()
useEffect(()=>{
    let arr = navRef.current.childNodes
    arr.forEach(btn => {
        btn.onmousemove = (e)=>{
            let x = e.offsetX;
            let y = e.offsetY;
            let btnWidth = btn.clientWidth
            let btnHeight = btn.clientHeight
            let transx = ( btnWidth / 2   - x)
            let transy = (btnHeight / 2 - y) 
            btn.style.transform = `translateX(${transx}px) translateY(${transy}px) `

            let pX =  e.pageX - btn.offsetLeft 
            let pY =  e.pageY - btn.offseTop
            btn.style.setProperty("--x" , pX + "px")
    
        }
        btn.onmouseout = ()=>{
            btn.style.transform = `translateX(${0}px) translateY(${0}px) `
        }

    });
},[])
            
    return (
<div className="nav">

<ul ref={navRef}>
        <li ><a href="#Home"> <i class="fa-solid fa-house-chimney"></i> </a></li>
        <li><a href="#About"> <i class="fa-regular fa-address-card"></i>    </a></li>
        <li><a href="#Portfolio"> <i class="fa-solid fa-diagram-project"></i>     </a></li>
        <li><a href="#Contact"> <i class="fa-regular fa-envelope-open"></i>    </a></li>
    </ul>

</div>
  )
}
