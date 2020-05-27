import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const ImageWrapper = styled.div`
  display: block;
  padding: 1rem 0;
`

const ImageContainer = styled.div`
  width: 250px;
  height: auto;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  margin: 0 auto;
`

const Content = styled.p`
  &:nth-child(odd) {
    flex-basis: 25%;
    font-weight: 700;
  }

  &:nth-child(even) {
    flex-basis: 75%;
  }
`

const TelNum = styled.a`
  color: #00247d;

  &:hover {
    color: #cf142b;
  }
`

const Competition = () => {
  const data = useStaticQuery(graphql`
    query {
      redcoatLogoNoDate: file(
        relativePath: { eq: "redcoat-logo-no-date.png" }
      ) {
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
      <SEO title="Competition" />
      <CompetitionNav />
      <section>
        <h1>Competition</h1>
        <ImageWrapper>
          <ImageContainer>
            <Img fluid={data.redcoatLogoNoDate.childImageSharp.fluid} />
          </ImageContainer>
        </ImageWrapper>
        <ContentWrapper>
          <h2>The Redcoat Challenge 2020</h2>
          <ContentContainer>
            <Content>Entry Period</Content>
            <Content>Tuesday, Sep 1 - Thursday, Oct 1</Content>
            <Content>Awards Ceremony</Content>
            <Content>
              Saturday, Nov 7 at 3:00 pm
              <br />
              Denton County Brewing Company
              <br />
              200 E McKinney St
              <br />
              Denton, TX 76201
              <br />
              <TelNum href="tel:940-435-0710">(940) 435-0710</TelNum>
            </Content>
          </ContentContainer>
        </ContentWrapper>
      </section>
    </Layout>
  )
}

export default Competition
