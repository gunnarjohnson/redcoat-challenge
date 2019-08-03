import { Link } from "gatsby"
import React from "react"

const Nav = () => (
  <div
    style={{
      display: `flex`,
      flexBasis: `50%`,
      flexWrap: `wrap`,
      alignItems: `center`,
      justifyContent: `space-around`,
    }}
  >
    <Link 
      to="/competition"
      style={{
        color: `white`,
        fontFamily: `'pt sans', sans-serif`,
        fontSize: `1.4em`,
        textDecoration: `none`,
      }}
    >
      Competition
    </Link>
    <Link 
      to="/about"
      style={{
      color: `white`,
      fontFamily: `'pt sans', sans-serif`,
      fontSize: `1.4em`,
      textDecoration: `none`,
    }}
    >
      About
    </Link>
    <Link 
      to="/contact"
      style={{
        color: `white`,
        fontFamily: `'pt sans', sans-serif`,
        fontSize: `1.4em`,
        textDecoration: `none`,
      }}
    >
      Contact
    </Link>
  </div>
)

export default Nav
