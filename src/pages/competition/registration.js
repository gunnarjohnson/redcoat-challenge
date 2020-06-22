import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const ContentWrapper = styled.div`
  margin-top: 2rem;
`

const RegistrationWrapper = styled.div`
  margin-top: 2rem;
  padding: 0.4rem 0;
  line-height: 1.6;
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
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    color: #e8e8e8;
    background-color: #000000;
  }
`

const RegistrationNotification = styled.p`
  margin: 0;
  color: #000000;
  font-size: 1.2em;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 1px;
`

const RegistrationEnabled = true

const Registration = () => (
  <Layout>
    <SEO title="Competition - Registration" />
    <CompetitionNav />
    <section>
      <h1>Competition - Registration</h1>
      <ContentWrapper>
        <p>
          Entries are to be registered through the Reggie homebrew competition
          website. Each entry will be assessed a fee of $10, due at time of
          entry via PayPal. All fees must be paid in advance.
        </p>
      </ContentWrapper>
      <RegistrationWrapper>
        {RegistrationEnabled ? (
          <RegistrationButton
            href="https://reggiebeer.com/ReggieEntry.php?CompetitionID=KBUMJP1000567"
            rel="noopener noreferrer"
            target="_blank"
          >
            Register Entries
          </RegistrationButton>
        ) : (
          <RegistrationNotification>
            Registration will be open soon.
          </RegistrationNotification>
        )}
      </RegistrationWrapper>
    </section>
  </Layout>
)

export default Registration
