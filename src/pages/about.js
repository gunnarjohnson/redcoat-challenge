import React from "react"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutContent = styled.p`
  font-size: 1.4em;
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About the Denton County Homebrewers Guild</h1>
    <AboutContent>
      Founded in 2012, the DCHG exists as a means for members to explore their hobby through the promotion and education of home brewing. 
      The mission of the DCHG is to promote awareness and appreciation of the quality and variety of homebrewed beers, wines, meads, and tea, through education, research, and the collection and dissemination of information: 
      to serve as a forum for the technological and cross-cultural aspects of the art of zymurgy; 
      and to encourage personal responsibility when using alcohol-containing beverages.
      Our home is currently at Denton County Brewing Company in Denton TX, where most of our members meet every 1st Sunday of the month at 4pm. 
      General Membership is unlimited and open to any individual person interested in the advancement of zymurgy, and who will support the Charter and basic policies of the DCHG, subject only to compliance with the provisions of the By-Laws. 
      Members are not required to be brewers.
    </AboutContent>
  </Layout>
)

export default About
