import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`

const NavLink = styled(props => <Link {...props} />)`
  margin: 0.4rem 0.6rem;
  color: white;
  font-family: 'pt sans', sans-serif;
  font-size: 1.4em;
  text-decoration: none;
`

const Nav = () => (
  <NavContainer>
    <NavLink to="/competition/rules">Competition</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </NavContainer>
)

export default Nav
