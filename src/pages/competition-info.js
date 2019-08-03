import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CompetitionInfo = () => (
  <Layout>
    <SEO title="Competition Info" />
    <h2>Competition Info</h2>
    <Link to="/competition">Go back to the Competition page</Link>
  </Layout>
)

export default CompetitionInfo
