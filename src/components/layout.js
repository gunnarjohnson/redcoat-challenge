/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { Normalize } from "../theme/normalize"
import { Fonts } from "../theme/fonts"
import Header from "./header/"
import Footer from "./footer"

const SiteContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 6rem);
  padding-bottom: 6rem;
  background-color: #e8e8e8;

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 4rem);
    padding-bottom: 4rem;
  }
`

const HeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.4rem;
  background-color: #cf142b;
`

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 4rem;
`

const Main = styled.main`
  padding: 0 1rem 1.4rem;
  font-family: 'pt sans', sans-serif;
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
      <SiteContent>
        <HeaderWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
        </HeaderWrapper>
        <MainWrapper>
          <Main>{children}</Main>
        </MainWrapper>
        <Footer />
      </SiteContent>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
