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

const { categories, guidelines, year } = CompetitionDetails

const Categories = () => (
  <Layout>
    <SEO title="Competition - Categories" />
    <CompetitionNav />
    <section>
      <h1>Competition - Categories</h1>
      <Container>
        <Subtitle>{`Texas Redcoat Challenge ${year} Style Categories`}</Subtitle>
        <Subcontainer>
          {categories.map((category, categoryIndex) => (
            <CardWrapper key={`category${categoryIndex + 1}`}>
              <Card>
                <CardTitle>
                  {`TRC${categoryIndex + 1} ${category.name}`}
                </CardTitle>
                <CardList>
                  {category.subcategories.map(
                    (subcategory, subcategoryIndex) => (
                      <li key={`subcategory${subcategoryIndex + 1}`}>
                        {`${categoryIndex + 1}.${subcategoryIndex + 1} ${
                          subcategory.name
                        }`}
                        <ul>
                          <li key={`subcategory${subcategoryIndex + 1}Link`}>
                            {subcategory.url ? (
                              <BJCPLink
                                href={subcategory.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {`BJCP ${subcategory.id}`}
                              </BJCPLink>
                            ) : (
                              `BJCP ${subcategory.id}`
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
        <Subtitle>BJCP Style Guidelines</Subtitle>
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
      <Container>
        <Subtitle>Disclaimer</Subtitle>
        <p>
          As stated in the competition rules, the TRC reserves the right to
          combine and/or expand styles for judging and to restructure awards as
          needed depending upon the quantity and quality of entries. All
          possible efforts will be made to combine or group similar styles.
        </p>
      </Container>
    </section>
  </Layout>
)

export default Categories
