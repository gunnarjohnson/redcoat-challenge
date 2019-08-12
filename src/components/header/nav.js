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
    justify-content: flex-end;
  }
  @media screen and (min-width: 992px) {
    flex-basis: auto;
  }
`

const NavLink = styled(props => <Link {...props} />)`
  margin: 0.4rem 0;
  padding: 0.4rem 0.6rem;
  color: #ffffff;
  font-family: 'pt sans', sans-serif;
  font-size: 1.4em;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    margin: 0 1rem 0 0;
  }
  @media screen and (min-width: 992px) {
    margin-right: 2rem;
  }

  &:hover {
    color: #f7cd45;
    // color: #00247d;
  }

  &:last-child {
    @media screen and (min-width: 768px) {
      margin-right: -0.6rem;
    }
  }
`

const Nav = () => (
  <NavContainer>
    <NavLink to="/competition">Competition</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </NavContainer>
)

export default Nav
