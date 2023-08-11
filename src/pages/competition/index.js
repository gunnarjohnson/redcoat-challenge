import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import CompetitionDetails from "../../content/competition-details.json"

import formatDate from "../../common/formatDate"
import formatPhoneNumber from "../../common/formatPhoneNumber"

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

const ContentTitle = styled.h2`
  margin-bottom: 0.4em;
`

const ContentSubtitle = styled.p`
  margin-top: 0;
  margin-bottom: 0.83em;
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

const openDateFormatted = formatDate(
  CompetitionDetails.registration.openDate.dayOfMonth,
  CompetitionDetails.registration.openDate.dayOfWeek,
  CompetitionDetails.registration.openDate.monthNameAbbreviated,
  CompetitionDetails.registration.openDate.year
)
const closeDateFormatted = formatDate(
  CompetitionDetails.registration.closeDate.dayOfMonth,
  CompetitionDetails.registration.closeDate.dayOfWeek,
  CompetitionDetails.registration.closeDate.monthNameAbbreviated,
  CompetitionDetails.registration.closeDate.year
)
const pickupDateFormatted = formatDate(
  CompetitionDetails.delivery.pickup.date.dayOfMonth,
  CompetitionDetails.delivery.pickup.date.dayOfWeek,
  CompetitionDetails.delivery.pickup.date.monthNameAbbreviated,
  CompetitionDetails.delivery.pickup.date.year
)
const awardsDateFormatted = formatDate(
  CompetitionDetails.awards.date.dayOfMonth,
  CompetitionDetails.awards.date.dayOfWeek,
  CompetitionDetails.awards.date.monthNameAbbreviated,
  CompetitionDetails.awards.date.year
)

const Competition = () => {
  const data = useStaticQuery(graphql`
    query {
      redcoatLogoNoDate: file(
        relativePath: { eq: "redcoat-logo-no-date.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 250)
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
            <GatsbyImage image={data.redcoatLogoNoDate.childImageSharp.gatsbyImageData} alt="Redcoat Challenge logo" />
          </ImageContainer>
        </ImageWrapper>
        <ContentWrapper>
          <ContentTitle>
            {`The Redcoat Challenge ${CompetitionDetails.year}`}
          </ContentTitle>
          <ContentSubtitle>
            Part of the North Texas Homebrew Circuit
          </ContentSubtitle>
          <ContentContainer>
            <Content>Entry Registration</Content>
            <Content>{`${openDateFormatted} - ${closeDateFormatted}`}</Content>
            <Content>Entry Delivery</Content>
            <Content>{`${openDateFormatted} - ${pickupDateFormatted} at ${CompetitionDetails.delivery.pickup.time}`}</Content>
            <Content>Awards Ceremony</Content>
            <Content>
              {`${awardsDateFormatted} at ${CompetitionDetails.awards.time}`}
              <br />
              {CompetitionDetails.awards.location.name}
              <br />
              {CompetitionDetails.awards.location.address}
              <br />
              {`${CompetitionDetails.awards.location.city}, ${CompetitionDetails.awards.location.state} ${CompetitionDetails.awards.location.zip}`}
              <br />
              <TelNum
                href={`tel:${CompetitionDetails.awards.location.phoneNumber}`}
              >
                {formatPhoneNumber(
                  CompetitionDetails.awards.location.phoneNumber
                )}
              </TelNum>
            </Content>
          </ContentContainer>
        </ContentWrapper>
      </section>
    </Layout>
  )
}

export default Competition
