/* eslint-disable react/jsx-fragments */
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

const guidelineURLs = {
  base: "https://dev.bjcp.org",
  standard: "style/2015",
  additional: "beer-styles",
}

const styleCategories = [
  {
    name: "BRITISH BITTER",
    links: [
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/11/11A/ordinary-bitter/`,
        content: "11A",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/11/11B/best-bitter/`,
        content: "11B",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/11/11C/strong-bitter/`,
        content: "11C",
      },
    ],
    listItems: ["Ordinary Bitter", "Best Bitter", "Strong Bitter"],
  },
  {
    name: "PALE COMMONWEALTH BEER",
    links: [
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/12/12A/british-golden-ale/`,
        content: "12A",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/12/12B/australian-sparkling-ale/`,
        content: "12B",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/12/12C/english-ipa/`,
        content: "12C",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.additional}/x5-new-zealand-pilsner/`,
        content: "X5",
      },
    ],
    listItems: [
      "British Golden Ale",
      "Australian Sparkling Ale",
      "English IPA",
      "New Zealand Pilsner",
    ],
  },
  {
    name: "BROWN BRITISH BEER",
    links: [
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/13/13A/dark-mild/`,
        content: "13A",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/13/13B/british-brown-ale/`,
        content: "13B",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/13/13C/english-porter/`,
        content: "13C",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/27/27A/historical-beer-london-brown-ale/`,
        content: "27A",
      },
    ],
    listItems: [
      "Dark Mild",
      "British Brown Ale",
      "English Porter",
      "London Brown Ale",
    ],
  },
  {
    name: "STRONG BRITISH BEER",
    links: [
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/17/17A/british-strong-ale/`,
        content: "17A",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/17/17B/old-ale/`,
        content: "17B",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/17/17C/wee-heavy/`,
        content: "17C",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/17/17D/english-barleywine/`,
        content: "17D",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.additional}/17a-british-strong-ale-burton-ale/`,
        content: "17A",
      },
    ],
    listItems: [
      "British Strong Ale",
      "Old Ale",
      "Wee Heavy",
      "English Barleywine",
      "Burton Ale",
    ],
  },
  {
    name: "SCOTTISH ALE",
    links: [
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/14/14A/scottish-light/`,
        content: "14A",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/14/14B/scottish-heavy/`,
        content: "14B",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/14/14C/scottish-export/`,
        content: "14C",
      },
    ],
    listItems: ["Scottish Light", "Scottish Heavy", "Scottish Export"],
  },
  {
    name: "IRISH BEER",
    links: [
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/15/15A/irish-red-ale/`,
        content: "15A",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/15/15B/irish-stout/`,
        content: "15B",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/15/15C/irish-extra-stout/`,
        content: "15C",
      },
    ],
    listItems: ["Irish Red Ale", "Irish Stout", "Irish Extra Stout"],
  },
  {
    name: "DARK BRITISH BEER",
    links: [
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/16/16A/sweet-stout/`,
        content: "16A",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/16/16B/oatmeal-stout/`,
        content: "16B",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/16/16C/tropical-stout/`,
        content: "16C",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/16/16D/foreign-extra-stout/`,
        content: "16D",
      },
    ],
    listItems: [
      "Sweet Stout",
      "Oatmeal Stout",
      "Tropical Stout",
      "Foreign Extra Stout",
    ],
  },
  {
    name: "BRAGGOT & CIDER",
    links: [
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/M4/M4A/braggot/`,
        content: "M4",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/C1/`,
        content: "C1",
      },
      {
        href: `${guidelineURLs.base}/${guidelineURLs.standard}/C2/`,
        content: "C2",
      },
    ],
    listItems: ["Braggot", "Standard Cider & Perry", "Specialty Cider & Perry"],
  },
]

const Categories = () => (
  <Layout>
    <SEO title="Competition - Categories" />
    <CompetitionNav />
    <section>
      <h1>Competition - Categories</h1>
      <Container>
        <Subtitle>The Redcoat Challenge 2020 Style Categories</Subtitle>
        <Subcontainer>
          {styleCategories.map((styleCategory, categoryIndex) => (
            <CardWrapper>
              <Card>
                <h3>{`TRC${categoryIndex + 1} ${styleCategory.name}`}</h3>
                <p>
                  {`BJCP `}
                  {styleCategory.links.map((categoryLink, linkIndex) => (
                    <React.Fragment>
                      {categoryLink.href ? (
                        <BJCPLink
                          href={categoryLink.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {categoryLink.content}
                        </BJCPLink>
                      ) : (
                        categoryLink.content
                      )}
                      {linkIndex + 1 < styleCategory.links.length ? ", " : ""}
                    </React.Fragment>
                  ))}
                </p>
                <ul>
                  {styleCategory.listItems.map((listItem, itemIndex) => (
                    <li>
                      {`${categoryIndex + 1}.${itemIndex + 1} ${listItem}`}
                    </li>
                  ))}
                </ul>
              </Card>
            </CardWrapper>
          ))}
        </Subcontainer>
      </Container>
      <Container>
        <Subtitle>2015 BJCP Style Guidelines</Subtitle>
        <BJCPLinkList>
          <li>
            <BJCPLink
              href="https://bjcp.org/docs/2015_Guidelines_Beer.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Beer Style Guidelines
            </BJCPLink>
          </li>
          <li>
            <BJCPLink
              href="https://bjcp.org/docs/2015_Guidelines_Cider.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Cider Style Guidelines
            </BJCPLink>
          </li>
          <li>
            <BJCPLink
              href="https://bjcp.org/stylecenter.php"
              rel="noopener noreferrer"
              target="_blank"
            >
              Additional Information
            </BJCPLink>
          </li>
        </BJCPLinkList>
      </Container>
    </section>
  </Layout>
)

export default Categories
