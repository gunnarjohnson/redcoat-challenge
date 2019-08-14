import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompetitionNav from "../../components/competition-nav"

const Subtitle = styled.h2`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    display: block;
  }
`

const Subcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const CardWrapper = styled.div`
  width: 16rem;
  margin: 1rem;
`

const Card = styled.div`
  min-height: 18rem;
  padding: 0.5rem 1rem;
  border: 1px solid #000000;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 4px 4px 8px #000000;
`

const BJCPLinkList = styled.ul`
  @media screen and (max-width: 767px) {
    padding-left: 0;
  }
`

const BJCPLink = styled.a`
  color: #00247d;

  &:hover {
    color: #cf142b;
  }
`

const Categories = () => (
  <Layout>
    <SEO title="Competition - Categories" />
    <CompetitionNav />
    <section>
      <h1>Competition - Categories</h1>
      <Container>
        <Subtitle>The Redcoat Challenge 2019 Style Categories</Subtitle>
        <Subcontainer>
          <CardWrapper>
            <Card>
              <h3>TRC1 BRITISH BITTER</h3>
              <p>(BJCP 11A, 11B, 11C)</p>
              <ul>
                <li>1.1 Ordinary Bitter</li>
                <li>1.2 Best Bitter</li>
                <li>1.3 Strong Bitter</li>
              </ul>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <h3>TRC2 PALE COMMONWEALTH BEER</h3>
              <p>(BJCP 12A, 12B, 12C, 27, X5)</p>
              <ul>
                <li>2.1 British Golden Ale</li>
                <li>2.2 Australian Sparkling Ale</li>
                <li>2.3 English IPA</li>
                <li>2.4 New Zealand Pilsner</li>
              </ul>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <h3>TRC3 BROWN BRITISH BEER</h3>
              <p>(BJCP 13A, 13B, 13C, 27, 27)</p>
              <ul>
                <li>3.1 Dark Mild</li>
                <li>3.2 British Brown Ale</li>
                <li>3.3 English Porter</li>
                <li>3.4 London Brown Ale</li>
              </ul>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <h3>TRC4 STRONG BRITISH BEER</h3>
              <p>(BJCP 17A, 17B, 17C, 17D, 17A)</p>
              <ul>
                <li>4.1 British Strong Ale</li>
                <li>4.2 Old Ale</li>
                <li>4.3 Wee Heavy</li>
                <li>4.4 English Barleywine</li>
                <li>4.5 Burton Ale</li>
              </ul>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <h3>TRC5 SCOTTISH ALE</h3>
              <p>(BJCP 14A, 14B, 14C)</p>
              <ul>
                <li>5.1 Scottish Light</li>
                <li>5.2 Scottish Heavy</li>
                <li>5.3 Scottish Export</li>
              </ul>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <h3>TRC6 IRISH BEER</h3>
              <p>(BJCP 15A, 15B, 15C)</p>
              <ul>
                <li>6.1 Irish Red Ale</li>
                <li>6.2 Irish Stout</li>
                <li>6.3 Irish Extra Stout</li>
              </ul>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <h3>TRC7 DARK BRITISH BEER</h3>
              <p>(BJCP 16A, 16B, 16C, 16D)</p>
              <ul>
                <li>7.1 Sweet Stout</li>
                <li>7.2 Oatmeal Stout</li>
                <li>7.3 Tropical Stout</li>
                <li>7.4 Foreign Extra Stout</li>
              </ul>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <h3>TRC8 BRITISH BEER & CIDER</h3>
              <p>(BJCP 31, M4, C1, C2)</p>
              <ul>
                <li>8.1 Alternative Fermentables</li>
                <li>8.2 Braggot</li>
                <li>8.3 Standard Cider & Perry</li>
                <li>8.4 Specialty Cider & Perry</li>
              </ul>
            </Card>
          </CardWrapper>
        </Subcontainer>
      </Container>
      <Container>
        <Subtitle>2015 BJCP Style Guidelines</Subtitle>
        <BJCPLinkList>
          <li><BJCPLink href="https://bjcp.org/docs/2015_Guidelines_Beer.pdf" rel="noopener noreferrer" target="_blank">Beer Style Guidelines</BJCPLink></li>
          <li><BJCPLink href="https://bjcp.org/docs/2015_Guidelines_Cider.pdf" rel="noopener noreferrer" target="_blank">Cider Style Guidelines</BJCPLink></li>
          <li><BJCPLink href="https://bjcp.org/stylecenter.php" rel="noopener noreferrer" target="_blank">Additional Information</BJCPLink></li>
        </BJCPLinkList>
      </Container>
    </section>
  </Layout>
)

export default Categories
