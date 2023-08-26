import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

export default function Home() {

const [text] = useTypewriter({
        words : ["front-end-developer"],
        loop : {}
    })
    
  return (
<div className="home">
    <div className="cloud">

    </div>
    <div className="con">
        <h1>i am mohamed gamal</h1>
        <h2>  i’m  {text}</h2>
        <p>i’m a egyptian front end developer focused on crafting clean & user-friendly experiences </p>
    </div>
</div>
  )
}
