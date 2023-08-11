import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NavLinkWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1.4rem;
  border-bottom: 2px solid #000000;
  box-sizing: border-box;
`

const NavLinkContainer = styled.div`
  flex-basis: 50%;
  margin: 0.4rem 0;

  @media screen and (min-width: 576px) {
    flex-basis: 33.33%;
  }
  @media screen and (min-width: 768px) {
    flex-basis: auto;

    &:last-child a {
      margin-right: 0;
    }
  }
`

// eslint-disable-next-line react/jsx-props-no-spreading
const NavLink = styled((props) => <Link {...props} />)`
  margin-right: 0.6rem;
  color: #000000;
  font-family: "pt sans", sans-serif;
  font-size: 1.2em;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #cf142b;
  }

  @media screen and (min-width: 768px) {
    margin-right: 1rem;
  }
  @media screen and (min-width: 992px) {
    margin-right: 2rem;
  }
`

const CompetitionNav = () => (
  <NavLinkWrapper>
    <NavLinkContainer>
      <NavLink to="/competition">Competition</NavLink>
    </NavLinkContainer>
    <NavLinkContainer>
      <NavLink to="/competition/rules">Rules</NavLink>
    </NavLinkContainer>
    <NavLinkContainer>
      <NavLink to="/competition/awards">Awards</NavLink>
    </NavLinkContainer>
    <NavLinkContainer>
      <NavLink to="/competition/registration">Registration</NavLink>
    </NavLinkContainer>
    <NavLinkContainer>
      <NavLink to="/competition/shipping">Shipping</NavLink>
    </NavLinkContainer>
    <NavLinkContainer>
      <NavLink to="/competition/categories">Categories</NavLink>
    </NavLinkContainer>
  </NavLinkWrapper>
)

export default CompetitionNav
