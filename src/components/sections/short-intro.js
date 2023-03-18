import React from "react"
import { navigate } from "gatsby"

const navigateToRoute = () => navigate("/portfolio/modal", { state: {} })

const ShortIntro = () => {
  return (
    <div className="section short-intro introbox-container">
      <div className="introbox">
        <p>
          Front-end developer, cozy gamer, equine freak (also known as an
          equestrian) and general geek. I am a purveyor of random facts, strange
          humour and much purples. I make virtual things that you can look but
          probably not poke. This is primarily my web development portfolio.
        </p>

        <button onClick={navigateToRoute}> Clicky </button>
      </div>
    </div>
  )
}

export default ShortIntro
