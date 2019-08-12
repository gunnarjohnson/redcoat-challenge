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
import Footer from "./footer"

const SiteContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 3rem);
  padding-bottom: 3rem;
`

const HeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.45rem;
  background-color: #cf142b;
`

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
