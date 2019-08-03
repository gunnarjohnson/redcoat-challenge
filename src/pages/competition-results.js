import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CompetitionResults = () => (
  <Layout>
    <SEO title="Competition Results" />
    <h2>Competition Results</h2>
    <Link to="/competition">Go back to the Competition page</Link>
  </Layout>
)

export default CompetitionResults
