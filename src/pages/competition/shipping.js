import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const Shipping = () => (
  <Layout>
    <SEO title="Competition - Shipping" />
    <CompetitionNav />
    <h1>Competition - Shipping Location and Address</h1>
    <section>
      <p>
        If you live outside of the North Texas area, but still wish to participate in the competition, you can ship your entries to one of the following homebrew supply stores. 
        A competition committee member will pick up your entries for judging.
      </p>
      <p>
        The Redcoat Challenge
        <br />
        c/o Homebrew Headquarters, Inc.
        <br />
        300 N Coit Rd Ste 134
        <br />
        Richardson, TX 75080
        <br />
        972-234-4411 
        <br />
        <br />
        The Redcoat Challenge
        <br />
        c/o Brewhound
        <br />
        8808 Camp Bowie West Blvd Ste 160
        <br />
        Fort Worth, TX 76116
        <br />
        817-615-9551
      </p>
    </section>
    <section>
      <h2>Packing & Shipping Hints</h2>
      <ol>
        <li>
          Carefully pack your entries in a sturdy box. 
          Line the inside of your carton with a plastic trash bag. 
          Partition and pack each bottle with adequate packaging material. 
          Do not over pack! Your package should weigh less than 25 pounds. 
          Please refrain from using "messy" packaging materials such a Styrofoam "peanuts" or pellets; please use packaging material such as bubble wrap.
        </li>
        <li>
          Enclose each of your bottle labels in a small zip‐top bag before attaching to their respective bottles. 
          This way it makes it possible for the organizer to identify specifically which beer has broken if there is damage during shipment. 
        </li>
        <li>
          Every reasonable effort will be made to contact entrants whose bottles have broken to make arrangements for sending replacement bottles. 
        </li>
        <li>
          It is not against any Bureau of Alcohol, Tobacco and Firearms (ATF) regulations or federal laws to ship your entries via privately owned shipping company for analytical purposes. 
          However, IT IS ILLEGAL TO SHIP ALCOHOLIC BEVERAGES VIA THE U.S. POSTAL SERVICE. 
          Private shipping companies have the right to refuse your shipment if they are informed that the package contains glass and/or alcoholic beverages. 
          Be aware that entries mailed internationally are often required by customs to have proper documentation. 
          These entries might be opened and/or returned to the shipper by customs' officials at their discretion. 
          It is solely the entrant's responsibility to follow all applicable laws and regulations.
        </li>
      </ol>
    </section>
  </Layout>
)

export default Shipping
