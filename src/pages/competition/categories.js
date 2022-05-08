/* eslint-disable react/jsx-fragments */
import React from "react"
import styled from "styled-components"

import CompetitionDetails from "../../content/competition-details.json"

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

const CardTitle = styled.h3`
  text-transform: uppercase;
`

const CardList = styled.ul`
  list-style: none;
  padding-left: 1.55rem;
}`

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

const styleUrls = {
  base: "https://dev.bjcp.org",
  standard: "style/2015",
  additional: "beer-styles",
}

const styleCategories = [
  {
    name: "British Bitter",
    subcategories: [
      {
        name: "Ordinary Bitter",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/11/11A/ordinary-bitter/`,
          subcategory: "11A",
        },
      },
      {
        name: "Best Bitter",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/11/11B/best-bitter/`,
          subcategory: "11B",
        },
      },
      {
        name: "Strong Bitter",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/11/11C/strong-bitter/`,
          subcategory: "11C",
        },
      },
    ],
  },
  {
    name: "Pale Commonwealth Beer",
    subcategories: [
      {
        name: "British Golden Ale",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/12/12A/british-golden-ale/`,
          subcategory: "12A",
        },
      },
      {
        name: "Australian Sparkling Ale",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/12/12B/australian-sparkling-ale/`,
          subcategory: "12B",
        },
      },
      {
        name: "English IPA",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/12/12C/english-ipa/`,
          subcategory: "12C",
        },
      },
      {
        name: "New Zealand Pilsner",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.additional}/x5-new-zealand-pilsner/`,
          subcategory: "X5",
        },
      },
    ],
  },
  {
    name: "Brown British Beer",
    subcategories: [
      {
        name: "Dark Mild",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/13/13A/dark-mild/`,
          subcategory: "13A",
        },
      },
      {
        name: "British Brown Ale",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/13/13B/british-brown-ale/`,
          subcategory: "13B",
        },
      },
      {
        name: "English Porter",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/13/13C/english-porter/`,
          subcategory: "13C",
        },
      },
      {
        name: "London Brown Ale",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/27/27A/historical-beer-london-brown-ale/`,
          subcategory: "27A",
        },
      },
    ],
  },
  {
    name: "Strong British Beer",
    subcategories: [
      {
        name: "British Strong Ale",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/17/17A/british-strong-ale/`,
          subcategory: "17A",
        },
      },
      {
        name: "Old Ale",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/17/17B/old-ale/`,
          subcategory: "17B",
        },
      },
      {
        name: "Wee Heavy",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/17/17C/wee-heavy/`,
          subcategory: "17C",
        },
      },
      {
        name: "English Barleywine",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/17/17D/english-barleywine/`,
          subcategory: "17D",
        },
      },
      {
        name: "Burton Ale",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.additional}/17a-british-strong-ale-burton-ale/`,
          subcategory: "17A",
        },
      },
    ],
  },
  {
    name: "Scottish Ale",
    subcategories: [
      {
        name: "Scottish Light",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/14/14A/scottish-light/`,
          subcategory: "14A",
        },
      },
      {
        name: "Scottish Heavy",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/14/14B/scottish-heavy/`,
          subcategory: "14B",
        },
      },
      {
        name: "Scottish Export",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/14/14C/scottish-export/`,
          subcategory: "14C",
        },
      },
    ],
  },
  {
    name: "Irish Beer",
    subcategories: [
      {
        name: "Irish Red Ale",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/15/15A/irish-red-ale/`,
          subcategory: "15A",
        },
      },
      {
        name: "Irish Stout",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/15/15B/irish-stout/`,
          subcategory: "15B",
        },
      },
      {
        name: "Irish Extra Stout",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/15/15C/irish-extra-stout/`,
          subcategory: "15C",
        },
      },
    ],
  },
  {
    name: "Dark British Beer",
    subcategories: [
      {
        name: "Sweet Stout",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/16/16A/sweet-stout/`,
          subcategory: "16A",
        },
      },
      {
        name: "Oatmeal Stout",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/16/16B/oatmeal-stout/`,
          subcategory: "16B",
        },
      },
      {
        name: "Tropical Stout",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/16/16C/tropical-stout/`,
          subcategory: "16C",
        },
      },
      {
        name: "Foreign Extra Stout",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/16/16D/foreign-extra-stout/`,
          subcategory: "16D",
        },
      },
    ],
  },
  {
    name: "Braggot & Cider",
    subcategories: [
      {
        name: "Braggot",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/M4/M4A/braggot/`,
          subcategory: "M4A",
        },
      },
      {
        name: "Standard Cider & Perry",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/C1/`,
          subcategory: "C1",
        },
      },
      {
        name: "Specialty Cider & Perry",
        bjcp: {
          documentationUrl: `${styleUrls.base}/${styleUrls.standard}/C2/`,
          subcategory: "C2",
        },
      },
    ],
  },
]

const guidelineUrls = {
  base: "https://bjcp.org",
  standard: "docs",
}

const guidelines = [
  {
    content: "Beer Style Guidelines",
    url: `${guidelineUrls.base}/${guidelineUrls.standard}/2015_Guidelines_Beer.pdf`,
  },
  {
    content: "Cider Style Guidelines",
    url: `${guidelineUrls.base}/${guidelineUrls.standard}/2015_Guidelines_Cider.pdf`,
  },
  {
    content: "Additional Information",
    url: `${guidelineUrls.base}/stylecenter.php`,
  },
]

const Categories = () => (
  <Layout>
    <SEO title="Competition - Categories" />
    <CompetitionNav />
    <section>
      <h1>Competition - Categories</h1>
      <Container>
        <Subtitle>
          {`The Redcoat Challenge ${CompetitionDetails.year} Style Categories`}
        </Subtitle>
        <Subcontainer>
          {styleCategories.map((styleCategory, categoryIndex) => (
            <CardWrapper key={`category${categoryIndex + 1}`}>
              <Card>
                <CardTitle>
                  {`TRC${categoryIndex + 1} ${styleCategory.name}`}
                </CardTitle>
                <CardList>
                  {styleCategory.subcategories.map(
                    (styleSubcategory, subcategoryIndex) => (
                      <li key={`subcategory${subcategoryIndex + 1}`}>
                        {`${categoryIndex + 1}.${subcategoryIndex + 1} ${
                          styleSubcategory.name
                        }`}
                        <ul>
                          <li key={`subcategory${subcategoryIndex + 1}Link`}>
                            {styleSubcategory.bjcp.documentationUrl ? (
                              <BJCPLink
                                href={styleSubcategory.bjcp.documentationUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {`BJCP ${styleSubcategory.bjcp.subcategory}`}
                              </BJCPLink>
                            ) : (
                              `BJCP ${styleSubcategory.bjcp.subcategory}`
                            )}
                          </li>
                        </ul>
                      </li>
                    )
                  )}
                </CardList>
              </Card>
            </CardWrapper>
          ))}
        </Subcontainer>
      </Container>
      <Container>
        <Subtitle>2015 BJCP Style Guidelines</Subtitle>
        <BJCPLinkList>
          {guidelines.map(
            (guideline, guidelineIndex) =>
              guideline.url && (
                <li key={`guideline${guidelineIndex + 1}`}>
                  <BJCPLink
                    href={guideline.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {guideline.content}
                  </BJCPLink>
                </li>
              )
          )}
        </BJCPLinkList>
      </Container>
    </section>
  </Layout>
)

export default Categories
