import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const Awards = () => (
  <Layout>
    <SEO title="Competition - Awards" />
    <CompetitionNav />
    <h1>Competition - Awards</h1>
    <section>
      <p>
        There will be an awards ceremony for competition at Denton County Brewing Company on month --, 2020, subject to their approval. 
        We will post the winners on our Facebook page on month --, starting the day of the event as awards are announced. 
        1st, 2nd, & 3rd place awards will be issued for each beverage category as well as a single winner each for the Best Of Show, Individual Homebrewer, and Homebrew Team categories. 
        <br />
        <br />
        All 1st place entries from each category will advance to the Best of Show (BOS) round with a single, overall Best of Show beer selected. 
        Club of the Year will be awarded to the Homebrew Club that have the most accumulated points during the competition. 
        3 points will be awarded for a 1stplace, 2 points will be awarded for a 2nd place, and 1 point will be awarded for a 3rdplace awards in each category. 
        Awards will be mailed to the entrants within two weeks of the awards ceremony. 
        Lost or stolen awards due to an incorrect address cannot be replaced. 
        Score sheets will be scanned after judging & emailed to entrants.
      </p>
    </section>
  </Layout>
)

export default Awards
