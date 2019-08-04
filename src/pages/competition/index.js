import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const Competition = () => (
  <Layout>
    <SEO title="Competition" />
    <CompetitionNav />
    <h1>Competition </h1>
    <section>
      <p>Please select subcategory from above.</p>
    </section>
  </Layout>
)

export default Competition