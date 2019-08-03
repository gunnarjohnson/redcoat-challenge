import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Competition = () => (
  <Layout>
    <SEO title="Competition" />
    <h2>Competition</h2>
    <ul>
      <li><Link to="/competition-guidelines">Guidelines</Link></li>
      <li><Link to="/competition-info">Info</Link></li>
      <li><Link to="/competition-results">Results</Link></li>
    </ul>
    <Link to="/">Go back to the Home page</Link>
  </Layout>
)

export default Competition
