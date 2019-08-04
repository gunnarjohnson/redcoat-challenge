import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components";

import Nav from "./nav"

const HeaderWrapper = styled.header`
  margin-bottom: 1.45rem;
  background-color: #d32f2f;
`

const NavWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`

const HeaderLinkWrapper = styled.div`
  flex-basis: 50%;
  margin: 0 0 0.4rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

const HeaderLink = styled(props => <Link {...props} />)`
  color: white;
  font-family: 'patua one', sans-serif;
  font-size: 2.5em;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 3em;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <NavWrapper>
      <HeaderLinkWrapper>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </HeaderLinkWrapper>
      <Nav />
    </NavWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
