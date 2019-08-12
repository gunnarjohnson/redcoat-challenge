import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWineBottle } from "@fortawesome/free-solid-svg-icons"
import { faBeer } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const IconWrapper = styled.div`
  display: flex;
  margin: 1rem;
  font-size: 3em;
`

const BottleIcon = styled(props => <FontAwesomeIcon {...props} />)`
  margin-right: 0.2rem;
`

const MugIcon = styled(props => <FontAwesomeIcon {...props} />)`
  margin-left: 0.2rem;
  padding-top: 1rem;
`

const HomeButton = styled(props => <Link {...props} />)`
  width: 2rem;
  height: 1rem;
  padding: 0.4rem 1rem;
  color: #ffffff;
  background-color: #cf142b;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #00247d;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <h1>NOT FOUND</h1>
      <ContentWrapper>
        <p>Relax, don't worry, have a homebrew.</p>
        <IconWrapper>
          <BottleIcon icon={faWineBottle} alt="bottle" />
          <MugIcon icon={faBeer} alt="mug" />
        </IconWrapper>
      </ContentWrapper>
      <HomeButton to="/">Home</HomeButton>
    </section>
  </Layout>
)

export default NotFoundPage
