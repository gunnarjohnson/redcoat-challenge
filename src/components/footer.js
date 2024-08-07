import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

import CompetitionDetails from "../content/competition-details.json"

const FooterWrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 6rem;
  color: #ffffff;
  background-color: #00247d;
  font-family: "pt sans", sans-serif;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    height: 4rem;
  }
`

const PrimaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;

  @media screen and (min-width: 768px) {
    flex-basis: 80%;
    margin-left: 10%;
  }
`

// eslint-disable-next-line react/jsx-props-no-spreading
const FooterIcon = styled((props) => <FontAwesomeIcon {...props} />)`
  color: #ffffff;
  font-size: 3em;
`

const PrimaryContent = styled.p`
  margin: 0 2rem;

  @media screen and (min-width: 768px) {
    margin: 0 3rem;
  }
`

const SecondaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  background-color: #000000;

  @media screen and (min-width: 768px) {
    flex-basis: 10%;
    justify-content: flex-end;
    background-color: transparent;
  }
`

const SecondaryContent = styled.p`
  margin: 0 1rem;
  color: #5d76b3;
  font-size: 0.8em;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

const { facebookUrl } = CompetitionDetails

const Footer = () => (
  <FooterWrapper>
    <PrimaryContainer>
      <a
        href={facebookUrl}
        rel="noopener noreferrer"
        target="_blank"
        title="TRC Facebook"
      >
        <FooterIcon icon={faFacebookSquare} />
      </a>
      <PrimaryContent>{`© ${new Date().getFullYear()} DCHG`}</PrimaryContent>
      <Link to="/contact" title="Contact">
        <FooterIcon icon={faEnvelopeSquare} />
      </Link>
    </PrimaryContainer>
    <SecondaryContainer>
      <SecondaryContent>Site by ToneDev</SecondaryContent>
    </SecondaryContainer>
  </FooterWrapper>
)

export default Footer
