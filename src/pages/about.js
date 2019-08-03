import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h2>About</h2>
    <p>Welcome to the About page</p>
    <Link to="/">Go back to the Home page</Link>
  </Layout>
)

export default About
