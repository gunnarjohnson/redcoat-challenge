import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const Prizes = () => (
  <Layout>
    <SEO title="Competition - Prizes" />
    <CompetitionNav />
    <h1>Competition - Prizes</h1>
    <section>
      <p>
        Prizes will be awarded in each of the main categories available at this competition. 
        The TRC reserves the right to collapse categories not receiving adequate entries and/or to not award all places if the entries do not merit it.
      </p>
      <div>
        <h2>Style Categories 1 thru 8</h2>
        <ul>
          <li>1st Place – A TRC Gold medal and TRC custom commemorative glass</li>
          <li>2nd Place – A TRC Silver medal.</li>
          <li>3rd Place – A TRC Bronze medal.</li>
        </ul>
      </div>
      <div>
        <h2>Best of Show</h2>
        <p>
          A "Best of Show Beer" will be judged and awarded from categories 1-8. A custom display plaque will be presented to the BOS winner.
        </p>
      </div>
      <div>
        <h2>The Redcoat Challenge Homebrewer of the Year</h2>
        <p>The homebrewer accumulating the most placement points from categories 1-8 will be recognized as TRC Homebrewer of the Year.</p>
        <p>Points are awarded as follows:</p>
        <ul>
          <li>1st place – 3 points</li>
          <li>2nd place – 2 points</li>
          <li>3rd place – 1 point</li>
        </ul>
        <p>A custom display plaque and custom commemorative glass will be presented to the TRC Homebrewer of the Year</p>
      </div>
      <div>
        <h2>The Redcoat Challenge Homebrew Team/Club of the Year</h2>
        <p>The Homebrew Team or Club accumulating the most placement points for a named Team's submitted entries from categories 1-8 will be recognized as TRC Homebrew Team/Club of the Year.</p>
        <p>Points are awarded as follows:</p>
        <ul>
          <li>1st place – 3 points</li>
          <li>2nd place – 2 points</li>
          <li>3rd place – 1 point</li>
        </ul>
        <p>A custom display plaque will be presented to the TRC Homebrew Team/Club of the Year</p>
      </div>
      <div>
        <h2>DCBC Brewing Pro-Am Award</h2>
        <p>
          Denton County Brewing Company is the official brewery of the Redcoat Challenge 2019. 
          In turn, they will be sponsoring a DCBC Pro-Am award, selected by representatives of the brewery from among all of this year's 1st place style winners. 
          DCBC will brew and distribute a commercial batch of the beer that wins this award to be debuted at a later date, and the winning brewer will have the opportunity to assist in the brewing process and may receive a prize package from the brewery. 
          Please note all profits generated from this beer will be sole property of Denton County Brewing Company as per applicable TABC laws, rules, and regulations.
        </p>
      </div>
      <div>
        <h2>Disclaimer</h2>
        <p>
          All decisions of the Redcoat Challenge judging committee are to be considered final. 
          Be assured that every effort will be taken to create an uncompromising, blind-tasting environment for the judging of all entries. 
          TRC judging committee reserves the right to re-align medal categories based on final sub-category entries. 
          The Head Judge reserves the right to disqualify an entry by sight or aroma alone. 
          Should this occur a refund will be issued. 
          Should it be determined that an entry has been doctored or altered in such a way as to gain an unfair advantage or be dangerous, that entrant may be banned from future participation.
        </p>
      </div>
    </section>
  </Layout>
)

export default Prizes
