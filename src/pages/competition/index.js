import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import CompetitionDetails from "../../content/competition-details.json"

import formatDate from "../../common/formatDate"
import formatPhoneNumber from "../../common/formatPhoneNumber"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Title from "../../components/title"
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

const { awards, delivery, registration, year } = CompetitionDetails
const { pickup } = delivery

const { openDate } = registration
const openDateFormatted = formatDate(
  openDate.dayOfMonth,
  openDate.dayOfWeek,
  openDate.monthNameAbbreviated,
  openDate.year
)

const { closeDate } = registration
const closeDateFormatted = formatDate(
  closeDate.dayOfMonth,
  closeDate.dayOfWeek,
  closeDate.monthNameAbbreviated,
  closeDate.year
)

const pickupDate = pickup.date
const pickupDateFormatted = formatDate(
  pickupDate.dayOfMonth,
  pickupDate.dayOfWeek,
  pickupDate.monthNameAbbreviated,
  pickupDate.year
)

const awardsDate = awards.date
const awardsDateFormatted = formatDate(
  awardsDate.dayOfMonth,
  awardsDate.dayOfWeek,
  awardsDate.monthNameAbbreviated,
  awardsDate.year
)

const awardsLocation = awards.location

const Competition = () => {
  const data = useStaticQuery(graphql`
    query {
      redcoatLogoNoLabel: file(
        relativePath: { eq: "redcoat-logo-no-label.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 400)
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
            <GatsbyImage
              image={data.redcoatLogoNoLabel.childImageSharp.gatsbyImageData}
              alt="The Texas Redcoat Challenge logo"
            />
          </ImageContainer>
        </ImageWrapper>
        <ContentWrapper>
          <ContentTitle>
            <Title year={year} />
          </ContentTitle>
          <ContentSubtitle>
            Part of the North Texas Homebrew Circuit
          </ContentSubtitle>
          <ContentContainer>
            <Content>Entry Registration</Content>
            <Content>{`${openDateFormatted} - ${closeDateFormatted}`}</Content>
            <Content>Entry Delivery</Content>
            <Content>{`${openDateFormatted} - ${pickupDateFormatted} at ${pickup.time}`}</Content>
            <Content>Awards Ceremony</Content>
            <Content>
              {awardsDateFormatted}
              {` `}
              {awards.time ? `at ${awards.time}` : "(time TBD)"}
              <br />
              {awardsLocation.name}
              <br />
              {awardsLocation.address}
              <br />
              {`${awardsLocation.city}, ${awardsLocation.state} ${awardsLocation.zip}`}
              <br />
              <TelNum href={`tel:${awardsLocation.phoneNumber}`}>
                {formatPhoneNumber(awardsLocation.phoneNumber)}
              </TelNum>
            </Content>
          </ContentContainer>
        </ContentWrapper>
      </section>
    </Layout>
  )
}

export default Competition
