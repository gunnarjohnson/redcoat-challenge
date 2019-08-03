import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h2>Contact</h2>
    <p>Welcome to the Contact page</p>
    <Link to="/">Go back to the Home page</Link>
  </Layout>
)

export default Contact
