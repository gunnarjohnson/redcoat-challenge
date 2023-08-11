import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.p`
  font-size: 1.2em;
  line-height: 1.4;
`

const DirectiveWrapper = styled.div`
  display: flex;
  margin: 4rem 0;
`

const DirectiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 2rem;
  border: 2px solid #000000;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 8px #000000;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Directive = styled.div`
  margin: 0 0.6rem;
`

const DirectiveContent = styled.p`
  font-size: 1.2em;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

const ImgWrapper = styled.div`
  width: 100px;
  height: auto;
`

// eslint-disable-next-line react/jsx-props-no-spreading
const FacebookIcon = styled((props) => <FontAwesomeIcon {...props} />)`
  font-size: 5em;
  color: #000000;
`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      dchgLogo: file(relativePath: { eq: "dchg-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 200)
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <section>
        <h1>About the Redcoat Challenge</h1>
        <div>
          <Content>
            The Redcoat Challenge is a specialty homebrew competition focused on
            British beer styles and sponsored by the Denton County Homebrewers
            Guild. The Redcoat Challenge is unique in that the BJCP styles of
            beers recognized as &quot;British&quot; in origin or inspiration are
            the focus, rather than just being grouped as part of the overall
            field of competition. We want to bring these beers back to the
            forefront and showcase the original American brewing tradition,
            helping to shine a light on these fantastic beers, the history
            behind them, and the brewers crafting them.
          </Content>
        </div>
        <div>
          <h2>The Denton County Homebrewers Guild</h2>
          <Content>
            Founded in 2012, the DCHG exists as a means for members to explore
            their hobby through the promotion and education of home brewing. The
            mission of the DCHG is to promote awareness and appreciation of the
            quality and variety of homebrewed beers, wines, meads, and teas,
            through education, research, and the collection and dissemination of
            information: to serve as a forum for the technological and
            cross-cultural aspects of the art of zymurgy; and to encourage
            personal responsibility when using alcohol-containing beverages.
            <br />
            <br />
            Our home is currently at Denton County Brewing Company in Denton TX,
            where most of our members meet every 1st Sunday of the month at 4pm.
            General Membership is unlimited and open to any individual person
            interested in the advancement of zymurgy, and who will support the
            Charter and basic policies of the DCHG, subject only to compliance
            with the provisions of the By-Laws. Members are not required to be
            brewers.
          </Content>
          <DirectiveWrapper>
            <DirectiveContainer>
              <DirectiveContent>Learn more about the DCHG @</DirectiveContent>
              <Directive>
                <ImgWrapper>
                  <a
                    href="http://thedchg.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="DCHG"
                  >
                    <GatsbyImage image={data.dchgLogo.childImageSharp.gatsbyImageData} alt="Denton County Homebrewers Guild logo" />
                  </a>
                </ImgWrapper>
              </Directive>
              <DirectiveContent>or</DirectiveContent>
              <Directive>
                <a
                  href="https://www.facebook.com/DentonCountyHomebrewersGuild/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Facebook"
                >
                  <FacebookIcon icon={faFacebookSquare} />
                </a>
              </Directive>
            </DirectiveContainer>
          </DirectiveWrapper>
        </div>
      </section>
    </Layout>
  )
}

export default About
