import React from "react"
import Img from "gatsby-image"
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const Section = styled.section`
  text-align: center;
`

const ImageWrapper = styled.div`
  display: block;
  padding: 1rem 0;
`

const ImageContainer = styled.div`
  width: 250px;
  height: auto;
  margin: 0 auto;
`

const Content = styled.p`
  font-size: 1.2em;
`

const Competition = () => {
  const data = useStaticQuery(graphql`
    query {
      redcoatLogoNoDate: file(relativePath: { eq: "redcoat-logo-no-date.png" }) {
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
      <h1>Competition</h1>
      <Section>
        <ImageWrapper>
          <ImageContainer>
            <Img fluid={data.redcoatLogoNoDate.childImageSharp.fluid} />
          </ImageContainer>
        </ImageWrapper>
        <div>
          <Content>Do id est non nulla duis consequat id nostrud laborum anim veniam duis do.</Content>
        </div>
      </Section>
    </Layout>
  )
}

export default Competition