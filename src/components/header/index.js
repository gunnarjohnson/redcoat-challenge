import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";

import Nav from "./nav"

const HeaderWrapper = styled.header`
  margin-bottom: 1.45rem;
  background-color: #d32f2f;
`;

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`;

const HeaderTitle = styled.h1`
  flex-basis: 50%;
  margin: 0;
`;

const HeaderTitleLink = styled(props => <Link {...props} />)`
  color: white;
  font-family: 'patua one', sans-serif;
  font-size: 1.4em;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <NavContainer>
      <HeaderTitle>
        <HeaderTitleLink to="/">
          {siteTitle}
        </HeaderTitleLink>
      </HeaderTitle>
      <Nav />
    </NavContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
