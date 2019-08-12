import React from "react"
import styled from "styled-components";

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const Content = styled.p`
  font-size: 1.2em;
`

const Registration = () => (
  <Layout>
    <SEO title="Competition - Registration" />
    <CompetitionNav />
    <h1>Competition - Registration</h1>
    <section>
      <Content>Registration information will be announced soon.</Content>
    </section>
  </Layout>
)

export default Registration