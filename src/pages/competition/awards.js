import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const Awards = () => (
  <Layout>
    <SEO title="Competition - Awards" />
    <CompetitionNav />
    <section>
      <h1>Competition - Awards</h1>
      <div>
        <p>
          There will be an awards ceremony for the competition at Denton County
          Brewing Company on November 9th, 2019 at 1:00 pm. We will post the
          winners on our Facebook page as well, starting the day of the event as
          awards are announced. 1st, 2nd, and 3rd place awards will be issued
          for each beverage category as well as a single winner for the Best Of
          Show category.
          <br />
          <br />
          All 1st place entries from each category will advance to the Best of
          Show (BOS) round with a single, overall Best of Show beer selected.
          Awards will be mailed to the entrants within two weeks of the awards
          ceremony. Lost or stolen awards due to an incorrect address cannot be
          replaced. Score sheets will be scanned after judging and emailed to
          entrants.
        </p>
      </div>
      <div>
        <h2>Prizes</h2>
        <p>
          Prizes will be awarded in each of the main categories available at
          this competition. The TRC reserves the right to collapse categories
          not receiving adequate entries and/or to not award all places if the
          entries do not merit it.
        </p>
        <div>
          <h3>Style Categories 1 thru 8</h3>
          <ul>
            <li>
              1st Place – A TRC Gold medal and TRC custom commemorative glass
            </li>
            <li>2nd Place – A TRC Silver medal.</li>
            <li>3rd Place – A TRC Bronze medal.</li>
          </ul>
        </div>
        <div>
          <h3>Best of Show</h3>
          <p>
            A &quot;Best of Show Beer&quot; will be judged and awarded from
            categories 1-8. A custom display plaque will be presented to the BOS
            winner.
          </p>
        </div>
        <div>
          <h3>Disclaimer</h3>
          <p>
            All decisions of the Redcoat Challenge judging committee are to be
            considered final. Be assured that every effort will be taken to
            create an uncompromising, blind-tasting environment for the judging
            of all entries. TRC judging committee reserves the right to re-align
            medal categories based on final sub-category entries. The Head Judge
            reserves the right to disqualify an entry by sight or aroma alone.
            Should this occur a refund will be issued. Should it be determined
            that an entry has been doctored or altered in such a way as to gain
            an unfair advantage or be dangerous, that entrant may be banned from
            future participation.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default Awards
