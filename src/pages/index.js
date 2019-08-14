import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`

const SubsectionOne = styled.div`
  flex-basis: 100%;

  @media screen and (min-width: 768px) {
    flex-basis: 60%;
  }
`

const SubsectionTwo = styled.div`
  flex-basis: 100%;

  @media screen and (min-width: 768px) {
    flex-basis: 40%;
  }
`

const Header = styled.h1`
  font-family: 'patua one', sans-serif;
  font-size: 4em;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 992px) {
    font-size: 5em;
  }
  @media screen and (min-width: 1200px) {
    font-size: 6em;
  }
`

const HeaderBlock = styled.span`
  display: block;

  &:first-child {
    color: #cf142b;
  }

  &:last-child {
    color: #00247d;
  }
`

const ContentWrapper = styled.div`
  @media screen and (min-width: 768px) {
    padding-right: 6rem;
  }
`

const Content = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 1.4em;
    text-align: left;
  }
`

const TitleWrapper = styled.span`
  display: inline-block;
`

const Title = styled.span`
  font-family: 'patua one', sans-serif;
  font-size: 1.2em;
  font-weight: 400;
  text-transform: uppercase;
`

const ButtonWrapper = styled.div`
  margin: 2rem 0;
  padding: 0.4rem 0;
  line-height: 1.6;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

const Button = styled(props => <Link {...props} />)`
  padding: 0.4rem 0.8rem;
  border: 2px solid #000000;
  border-radius: 4px;
  color: #e8e8e8;
  background-color: #000000;
  font-size: 1.2em;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  box-sizing: border-box;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    color: #000000;
    background-color: transparent;
  }
`

const ImgWrapper = styled.div`
  display: block;
  padding: 1rem 0;
`

const ImgContainer = styled.div`
  width: 250px;
  height: auto;
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 992px) {
    width: 400px;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      redcoatLogoNoLabel: file(relativePath: { eq: "redcoat-logo-no-label.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <SubsectionOne>
          <Header>
            <HeaderBlock>British Beer</HeaderBlock>
            <HeaderBlock>Texas Pride</HeaderBlock>
          </Header>
          <ContentWrapper>
            <Content>
              Welcome to <TitleWrapper><Title>the Redcoat Challenge</Title>,</TitleWrapper>
              {' '}
              a specialty homebrew competition focused on British beer styles and sponsored by the Denton County Homebrewers Guild of Denton, Texas.
            </Content>
          </ContentWrapper>
          <ButtonWrapper>
            <Button to="/competition">Learn More</Button>
          </ButtonWrapper>
        </SubsectionOne>
        <SubsectionTwo>
          <ImgWrapper>
            <ImgContainer>
              <Img fluid={data.redcoatLogoNoLabel.childImageSharp.fluid} />
            </ImgContainer>
          </ImgWrapper>
        </SubsectionTwo>
      </Section>
    </Layout>
  ) 
}

export default IndexPage
