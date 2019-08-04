import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const Fees = () => (
  <Layout>
    <SEO title="Competition - Fees" />
    <CompetitionNav />
    <h1>Competition - Fees</h1>
    <section>
      <h2>Entry Fee</h2>
      <p>Entry fee will be $? per entry and must be purchased in advance from the Redcoat Challenge website at time of entry via PayPal.</p>
    </section>
  </Layout>
)

export default Fees
