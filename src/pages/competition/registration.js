import React from "react"
import styled from "styled-components"
import dayjs from "dayjs"
import CompetitionDetails from "../../content/competition-details.json"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const ContentWrapper = styled.div`
  margin-top: 2rem;
`

const ContentLink = styled.a`
  color: #00247d;

  &:hover {
    color: #cf142b;
  }
`

const RegistrationWrapper = styled.div`
  margin-top: 2rem;
  padding-bottom: 0.4rem;
  line-height: 1.6;
`

const RegistrationNotification = styled.p`
  margin-top: 0;
  margin-bottom: 2.4rem;
  color: #000000;
  font-size: 1.2em;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 1px;
`

const RegistrationButton = styled.a`
  padding: 0.4rem 0.8rem;
  border: 2px solid #000000;
  border-radius: 4px;
  color: #000000;
  background-color: transparent;
  font-size: 1.2em;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  box-sizing: border-box;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;

  &:hover {
    color: #e8e8e8;
    background-color: #000000;
  }
`

const AdditionalInformationWrapper = styled.div`
  margin-top: 2rem;
`

const AdditionalInformationTitle = styled.h3`
  margin-top: 0;
`

const getDateArgs = (data) => {
  const { dayOfMonth, monthNumber, year } = data

  return [year, monthNumber, dayOfMonth]
}

const { registration } = CompetitionDetails
const competitionYear = CompetitionDetails.year

const currentDate = new Date()

const openDateArgs = getDateArgs(registration.openDate)
const openDate = new Date(...openDateArgs)

const closeDateArgs = getDateArgs(registration.closeDate)
const closeDate = new Date(...closeDateArgs, 23, 59, 59)

const enableRegistration = openDate <= currentDate && currentDate <= closeDate

const notificationMessage = (() => {
  const openDateFormatted = dayjs(openDate).format("dddd, MMM D, YYYY")
  const closeDateFormatted = dayjs(closeDate).format("dddd, MMM D, YYYY")
  const baseMessage = `Registration for the Redcoat Challenge ${competitionYear}`

  if (currentDate < openDate) {
    return `${baseMessage} will open on ${openDateFormatted}.`
  }

  if (currentDate > closeDate) {
    return `${baseMessage} is closed as of ${closeDateFormatted}.`
  }

  return `${baseMessage} is open as of ${openDateFormatted} and will close on ${closeDateFormatted}.`
})()

const Registration = () => (
  <Layout>
    <SEO title="Competition - Registration" />
    <CompetitionNav />
    <section>
      <h1>Competition - Registration</h1>
      <ContentWrapper>
        <p>
          {`Entries are to be registered through the `}
          <ContentLink
            href={registration.website.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {`${registration.website.name} website`}
          </ContentLink>
          {`. `}
          {`
            Each entry will be assessed a fee of ${registration.fee}, due at time of entry via PayPal.
            All fees must be paid in advance.
          `}
        </p>
      </ContentWrapper>
      <RegistrationWrapper>
        <RegistrationNotification>
          {notificationMessage}
        </RegistrationNotification>
        {enableRegistration && (
          <RegistrationButton
            href={registration.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            Register Entries
          </RegistrationButton>
        )}
      </RegistrationWrapper>
      {registration.additionalInformation.length > 0 && (
        <AdditionalInformationWrapper>
          <AdditionalInformationTitle>
            Additional Information
          </AdditionalInformationTitle>
          <ul>
            {registration.additionalInformation.map((x, index) => (
              <li key={`additionalInformation${index + 1}`}>{x}</li>
            ))}
          </ul>
        </AdditionalInformationWrapper>
      )}
    </section>
  </Layout>
)

export default Registration
