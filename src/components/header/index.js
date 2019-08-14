import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import Nav from "./nav"

const HeaderContainer = styled.header`
  max-width: 1200px;
  margin: 0 auto;
`

const NavWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 1.4rem 1rem;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`

const HeaderLinkWrapper = styled.div`
  flex-basis: 100%;
  margin-bottom: 0.4rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    text-align: left;
  }
  @media screen and (min-width: 992px) {
    flex-basis: auto;
  }
`

const HeaderLink = styled(props => <Link {...props} />)`
  position: relative;
  color: #ffffff;
  font-family: 'patua one', sans-serif;
  font-size: 2.5em;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-left: -0.6rem;
    padding: 0.4rem 0.6rem;
    font-size: 3em;
  }

  &:hover {
    text-decoration: underline;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <NavWrapper>
      <HeaderLinkWrapper>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </HeaderLinkWrapper>
      <Nav />
    </NavWrapper>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
