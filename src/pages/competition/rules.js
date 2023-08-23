import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import CompetitionDetails from "../../content/competition-details.json"

import formatDate from "../../common/formatDate"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const HighlightedText = styled.b`
  color: #cf142b;
`

const MapLink = styled.a`
  color: #00247d;

  &:hover {
    color: #cf142b;
  }
`

// eslint-disable-next-line react/jsx-props-no-spreading
const SiteLink = styled((props) => <Link {...props} />)`
  color: #00247d;

  &:hover {
    color: #cf142b;
  }
`

const pickupDateFormatted = formatDate(
  CompetitionDetails.delivery.pickup.date.dayOfMonth,
  CompetitionDetails.delivery.pickup.date.dayOfWeek,
  CompetitionDetails.delivery.pickup.date.monthName,
  CompetitionDetails.delivery.pickup.date.year
)

const Rules = () => (
  <Layout>
    <SEO title="Competition - Rules" />
    <CompetitionNav />
    <section>
      <div>
        <h1>Competition - Rules</h1>
        <p>
          The Redcoat Challenge Homebrew Competition is a BJCP sanctioned event,
          a British beer competition open to any amateur homebrewer; age 21 or
          older. All entries must be entered under the name of the brewer. Team
          brewers are allowed, but if entering as a team or as part of a club
          you may only designate one team or club name in the appropriate
          section on the entry registration.
        </p>
        <p>
          <span>
            All mailed entries must be received at the mailing location by the
            entry deadline on
          </span>
          {` `}
          <strong>{pickupDateFormatted}</strong>
          <span>.</span>
          {` `}
          <span>
            Please allow for shipping time. All entries will be picked up from
            drop‐off locations the day of the entry deadline. Walk‐in entries
            will be allowed, but only if they are dropped off by the entry
            deadline of
          </span>
          {` `}
          <strong>{`${CompetitionDetails.delivery.pickup.time} on ${CompetitionDetails.delivery.pickup.date.monthName} ${CompetitionDetails.delivery.pickup.date.dayOfMonth}`}</strong>
          <span>.</span>
          {` `}
          <span>
            All entries should be packaged as if they were being shipped in
            order to assist our homebrew store partners with
            storage/organization, as well as the organizers when collecting your
            entries.
          </span>
        </p>
        <p>
          {`Entries can be dropped off at the following location${
            CompetitionDetails.delivery.shipping.locations.length > 1 ? "s" : ""
          }:`}
        </p>
        <ul>
          {CompetitionDetails.delivery.shipping.locations.map(
            (location, locationIndex) => (
              <li key={`location${locationIndex + 1}`}>
                {`${location.name} in ${location.city}, ${location.state} (`}
                <MapLink
                  href={location.mapLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Map
                </MapLink>
                )
              </li>
            )
          )}
        </ul>
        <p>
          <em>
            Note: If dropping off entries, please be sure to follow the
            competition
            {` `}
            <SiteLink to="/competition/shipping#packaging-instructions">
              packaging instructions
            </SiteLink>
            {`. `}
            <strong>
              No loose bottles in six-pack holders will be accepted.
            </strong>
          </em>
        </p>
        <p>
          All entries must be handcrafted products, containing ingredients
          available to the general public, and made using private equipment by
          hobbyist brewers (i.e., no use of commercial facilities or Brew on
          Premises operations, supplies, etc.). Entry forms must be printed off
          and sent with or dropped off with each entry. Please make sure to
          complete all sections on each form. If you wish to enter as an
          individual not associated with any team or club, please put N/A in the
          appropriate section. The Redcoat Challenge is not responsible for
          miscategorized entries, mailed entries that are not received by the
          entry deadline, or entries and/or paperwork that arrive damaged or are
          lost in transit.
          <br />
          <br />
          TRC reserves the right to combine and/or expand styles for judging and
          to restructure awards as needed depending upon the quantity and
          quality of entries. All possible efforts will be made to combine or
          group similar styles. Combined or grouped entries will be judged
          according to the style they were originally entered in. Qualified
          judging of all entries is the primary goal of our event. Judges will
          evaluate and score each entry. The average of the scores will rank
          each entry in its category. Each flight will have at least one BJCP
          judge or judged during a BJCP certification class.
        </p>
        <p>
          <HighlightedText>
            Brewers are limited to 1 entry in each custom The Redcoat Challenge
            category for a maximum of 8 entries.
          </HighlightedText>
        </p>
        <ul>
          <li>
            For example, a brewer could enter 1 beer in TRC1 British Bitter, 1
            beer in TRC5 Scottish Ale, and 1 beer in TRC6 Irish Beer, which
            would be a total of 3 entries.
          </li>
        </ul>
        <p>
          <HighlightedText>
            Brewers may not submit 2 entries in a single category.
          </HighlightedText>
        </p>
        <ul>
          <li>
            For example, a brewer couldn&rsquo;t enter a TRC1.1 Ordinary Bitter
            and a TRC1.3 Strong Bitter in the TRC1 British Bitter category. The
            brewer would have to choose a single entry to submit.
          </li>
        </ul>
        <p>
          Recipes are not required. Judging style guidelines used will be the
          2015 Beer Judge Certification Program Style Guidelines and the style
          guidelines created by TRC for future categories not listed in the 2015
          BJCP Style Guidelines. As per BJCP sanctioning requirements, judges
          may not judge a category that they have entered in themselves if they
          are also a competitor in the event. The style guidelines are available
          on the BJCP’s website. The style guidelines will be renumbered for our
          ease of use. Please fill out the entry forms completely.
          <br />
          <br />
          Be meticulous about noting any special ingredients that must be
          specified per the 2015 BJCP Style Guidelines. Categories with a number
          of entries may be combined at the discretion of the competition
          organizers. The Competition Coordinator or other qualified person will
          review elements of beer categories and styles with each panel prior to
          judging.
          <br />
          <br />
          The Best of Show judging will be determined by a panel of BJCP judges
          based on a second judging of the top winners. Bottles will not be
          returned to entrants for any reason. All entries become the property
          of the The Redcoat Challenge Homebrew Competition. Rules and
          regulations are subject to change. Due to Texas law, Homebrew
          Competitions are not allowed to charge for entries. The fee is for
          providing completed score sheets back to the entrant.
        </p>
      </div>
      <div>
        <h2>Bottle Acceptance Rules</h2>
        <p>
          <span>Each entry will consist of</span>
          {` `}
          <strong>three (3) 12-ounce capped bottles</strong>
          {` `}
          <span>
            that are void of all identifying information, including labels and
            embossing. Printed caps are allowed, though discouraged, and if
            used, must be completely blacked out. Bottles must be free of labels
            or other easily identified marks. Re‐used commercial bottles with
            embossed logos are allowed but discouraged. 12 oz brown glass
            bottles are preferred; however, green or clear glass and corked
            bottles will be accepted. Swing top bottles will be disqualified and
            not judged.
          </span>
          <br />
          <br />
          Bottles will not be returned to entrants for any reason. Completed
          bottle labels must be submitted with all entries, and can be printed
          directly from the entry website along with any other required
          paperwork. Bottle labels should be attached to bottles with a rubber
          band only; glue and/or tape are unacceptable.
          <br />
          <br />
          <strong>
            Failure to submit entries properly will exclude them from judging.
          </strong>
          <br />
          <br />
          <em>
            Note: In the event that only 2 bottles are submitted, the
            Competition Coordinators will determine whether the second bottle
            needs to be used during the first round/mini-BOS. If the second
            bottle is used, the entry will not be eligible for the Best of Show
            round due to fact that there is not a third bottle available for
            judging.
          </em>
        </p>
      </div>
    </section>
  </Layout>
)

export default Rules
