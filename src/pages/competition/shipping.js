import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const AddressWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Address = styled.p`
  margin: 1rem 2rem 1rem 0;
  font-size: 1em;
`

const TelNum = styled.a`
  color: #00247d;

  &:hover {
    color: #cf142b;
  }
`

const Shipping = () => (
  <Layout>
    <SEO title="Competition - Shipping" />
    <CompetitionNav />
    <section>
      <h1>Competition - Shipping</h1>
      <div>
        <p>
          If you live outside of the North Texas area, but still wish to
          participate in the competition, you can ship your entries to one of
          the following homebrew supply stores. A competition committee member
          will pick up your entries for judging.
        </p>
        <AddressWrapper>
          <Address>
            The Redcoat Challenge
            <br />
            c/o BrewHound
            <br />
            8808 Camp Bowie West Blvd Ste 160
            <br />
            Fort Worth, TX 76116
            <br />
            <TelNum href="tel:817-615-9551">(817) 615-9551</TelNum>
          </Address>
          <Address>
            The Redcoat Challenge
            <br />
            c/o Homebrew Headquarters, Inc.
            <br />
            300 N Coit Rd Ste 134
            <br />
            Richardson, TX 75080
            <br />
            <TelNum href="tel:972-234-4411">(972) 234-4411</TelNum>
          </Address>
          <Address>
            The Redcoat Challenge
            <br />
            c/o Texas Brewing Inc
            <br />
            5204 Airport Fwy
            <br />
            Haltom City, TX 76117
            <br />
            <TelNum href="tel:682-647-1267">(682) 647-1267</TelNum>
          </Address>
        </AddressWrapper>
      </div>
      <div>
        <h2 id="packaging-instructions">Packaging Instructions</h2>
        <ol>
          <li>
            Package
            <ul>
              <li>Line the inside of a sturdy box with a plastic trash bag.</li>
            </ul>
          </li>
          <li>
            Labels
            <ul>
              <li>
                Enclose each of your bottle labels in a small zip‐top bag before
                attaching to their respective bottles.
              </li>
              <ul>
                <li>
                  This makes it possible for the organizer to identify which
                  specific beer has broken if there is damage during the
                  shipment.
                </li>
              </ul>
            </ul>
          </li>
          <li>
            Bottles
            <ul>
              <li>
                Carefully partition and pack each bottle with adequate packaging
                material.
              </li>
            </ul>
          </li>
          <li>
            Notes
            <ul>
              <li>
                Don&apos;t overpack! Your package should weigh less than 25
                pounds.
              </li>
              <li>
                Please refrain from using &quot;messy&quot; packaging materials
                such a Styrofoam &quot;peanuts&quot; or pellets; please use
                packaging material such as bubble wrap.
              </li>
              <li>
                Every reasonable effort will be made to contact entrants whose
                bottles have broken to make arrangements for sending replacement
                bottles.
              </li>
            </ul>
          </li>
        </ol>
        <h2>Shipping Notice</h2>
        <p>
          It is not against any Bureau of Alcohol, Tobacco and Firearms (ATF)
          regulations or federal laws to ship your entries via privately owned
          shipping company for analytical purposes. However, IT IS ILLEGAL TO
          SHIP ALCOHOLIC BEVERAGES VIA THE U.S. POSTAL SERVICE. Private shipping
          companies have the right to refuse your shipment if they are informed
          that the package contains glass and/or alcoholic beverages. Be aware
          that entries mailed internationally are often required by customs to
          have proper documentation. These entries might be opened and/or
          returned to the shipper by customs&apos; officials at their
          discretion. It is solely the entrant&apos;s responsibility to follow
          all applicable laws and regulations.
        </p>
      </div>
    </section>
  </Layout>
)

export default Shipping
