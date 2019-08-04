import React from "react"
import styled from "styled-components";

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const HomeContent = styled.p`
  font-size: 1.4em;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h1>The Redcoat Challenge</h1>
      <HomeContent>
        The Redcoat Challenge is a specialty homebrew competition focused on British beer styles and sponsored by the Denton County Homebrewers Guild.
        The Redcoat Challenge is unique in that the BJCP styles of beers recognized as "British" in origin or inspiration are the focus, rather than just being grouped as part of the overall field of competition. 
        We want to bring these beers back to the forefront and showcase the original American brewing tradition, helping to shine a light on these fantastic beers, the history behind them, and the brewers crafting them.
        <br />
        <br />
        Welcome to the Redcoat Challenge and thank you for participating.
      </HomeContent>
    </section>
    {/* 
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> 
    */}
  </Layout>
)

export default IndexPage
