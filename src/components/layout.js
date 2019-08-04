/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"

import { Normalize } from "../theme/normalize";
import { Fonts } from "../theme/fonts";
import Header from "./header/"

const MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
`

const MainContainer = styled.main`
  font-family: 'pt sans', sans-serif;
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Normalize />
      <Fonts />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainWrapper>
        <MainContainer>{children}</MainContainer>
        <Footer>
          © {new Date().getFullYear()}
        </Footer>
      </MainWrapper>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
