import React from "react"
import Img from "gatsby-image"
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HeaderWrapper = styled.div`
  text-align: center;
`

const ImgWrapper = styled.div`
  display: block;
  padding: 1rem 0;
`

const ImgContainer = styled.div`
  width: 250px;
  height: auto;
  margin: 0 auto;
`

const Header = styled.h1`
  font-size: 2.2em;
`

const MainContentWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    padding: 0 3rem;
  }
`

const Content = styled.p`
  font-size: 1.4em;
  line-height: 1.6em;
`

const Title = styled.span`
  font-family: 'patua one', sans-serif;
  font-weight: 100;
  text-transform: uppercase;
`

const LeftLine = styled.div`
  position: absolute;
  top: 2.5%;
  bottom: 0;
  left: 0.5rem;
  width: 0.3rem;
  height: 95%;
  background-color: #000000;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    left: 1rem;
  }
`

const RightLine = styled.div`
  position: absolute;
  top: 2.5%;
  right: 0.5rem;
  bottom: 0;
  width: 0.3rem;  
  height: 95%;
  background-color: #000000;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    right: 1rem;
  }
`

const SubContentWrapper = styled.div`
  margin-top: 3rem;
  text-align: center;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      redcoatLogoNoLabel: file(relativePath: { eq: "redcoat-logo-no-label.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <HeaderWrapper>
          <Header><Title>The Redcoat Challenge</Title></Header>
        </HeaderWrapper>
        <MainContentWrapper>
          <LeftLine />
          <Content>
            <Title>The Redcoat Challenge</Title> is a specialty homebrew competition focused on British beer styles and sponsored by the Denton County Homebrewers Guild.
            <Title> The Redcoat Challenge</Title> is unique in that the BJCP styles of beers recognized as "British" in origin or inspiration are the focus, rather than just being grouped as part of the overall field of competition. 
            We want to bring these beers back to the forefront and showcase the original American brewing tradition, helping to shine a light on these fantastic beers, the history behind them, and the brewers crafting them.
          </Content>
          <RightLine />
        </MainContentWrapper>
        <SubContentWrapper>
          <Content>
            Welcome to <Title>the Redcoat Challenge</Title> and thank you for participating. Cheers!
          </Content>
        </SubContentWrapper>
        <ImgWrapper>
          <ImgContainer>
            <Img fluid={data.redcoatLogoNoLabel.childImageSharp.fluid} />
          </ImgContainer>
        </ImgWrapper>
      </section>
    </Layout>
  ) 
}

export default IndexPage
