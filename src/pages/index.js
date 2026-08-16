import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";

import Anchor from "../components/anchor";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../components/title";

import CompetitionDetails from "../content/competition-details.json";
import DCHGDetails from "../content/dchg-details.json";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }

  & + & {
    margin-top: 3rem;
  }
`;

const SubsectionOne = styled.div`
  flex-basis: 100%;

  @media screen and (min-width: 768px) {
    flex-basis: 60%;
  }
`;

const SubsectionTwo = styled.div`
  flex-basis: 100%;

  @media screen and (min-width: 768px) {
    flex-basis: 40%;
  }
`;

const Header = styled.h1`
  font-family: "patua one", sans-serif;
  font-size: 3.2em;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 4em;
    text-align: left;
  }
  @media screen and (min-width: 992px) {
    font-size: 5em;
  }
  @media screen and (min-width: 1200px) {
    font-size: 6em;
  }
`;

const HeaderBlock = styled.span`
  display: block;

  &:first-child {
    color: #cf142b;
  }

  &:last-child {
    color: #00247d;
  }
`;

const ContentWrapper = styled.div`
  @media screen and (min-width: 768px) {
    padding-right: 6rem;
  }
`;

const contentStyles = css`
  font-size: 1.2em;
  line-height: 1.6;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 1.4em;
  }
`;

const Content = styled.p`
  ${contentStyles}
`;

const ExternalLink = styled(Anchor)`
  ${contentStyles}
`;

const ButtonWrapper = styled.div`
  margin: 2rem 0;
  padding: 0.4rem 0;
  line-height: 1.6;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const Button = styled((props) => <Link {...props} />)`
  padding: 0.4rem 0.8rem;
  border: 2px solid #000000;
  border-radius: 4px;
  color: #e8e8e8;
  background-color: #000000;
  font-size: 1.2em;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  box-sizing: border-box;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;

  &:hover {
    color: #000000;
    background-color: transparent;
  }
`;

const ImgWrapper = styled.div`
  display: block;
  padding: 1rem 0;
`;

const ImgContainer = styled.div`
  width: 250px;
  height: auto;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 992px) {
    width: 400px;
  }
`;

const {
  registration: {
    website: { url: registrationUrl },
  },
} = CompetitionDetails;
const { websiteUrl: dchgUrl } = DCHGDetails;

const hasRegistrationUrl = !!registrationUrl;
const hasDCHGUrl = !!dchgUrl;
const hasUrl = hasRegistrationUrl || hasDCHGUrl;
const hasMultipleUrls = hasRegistrationUrl && hasDCHGUrl;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      redcoatLogoNoLabel: file(
        relativePath: { eq: "redcoat-logo-no-label.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 400)
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <SubsectionOne>
          <Header>
            <HeaderBlock>British Beer</HeaderBlock>
            <HeaderBlock>Texas Pride</HeaderBlock>
          </Header>
          <ContentWrapper>
            <Content>
              Welcome to <Title />, a BJCP and AHA sanctioned homebrew
              competition focused on the beers, ciders, and braggots from the
              British Isles and Commonwealth nations. <Title /> is sponsored by
              the Denton County Homebrewers Guild, which is based in Denton,
              Texas.
            </Content>
          </ContentWrapper>
          <ButtonWrapper>
            <Button to="/competition">Competition Details</Button>
          </ButtonWrapper>
        </SubsectionOne>
        <SubsectionTwo>
          <ImgWrapper>
            <ImgContainer>
              <GatsbyImage
                image={data.redcoatLogoNoLabel.childImageSharp.gatsbyImageData}
                alt="The Texas Redcoat Challenge logo"
              />
            </ImgContainer>
          </ImgWrapper>
        </SubsectionTwo>
      </Section>
      {hasUrl && (
        <Section>
          <Content>
            {hasRegistrationUrl && (
              <>
                Entries can be submitted on the
                {` `}
                <ExternalLink
                  text="Texas Redcoat Challenge entry website"
                  url={registrationUrl}
                />
                .
              </>
            )}
            {hasMultipleUrls && ` `}
            {hasDCHGUrl && (
              <>
                To learn more about the Denton County Homebrewers Guild, please
                visit the
                {` `}
                <ExternalLink
                  text="DCHG website"
                  url={DCHGDetails.websiteUrl}
                />
                .
              </>
            )}
          </Content>
        </Section>
      )}
    </Layout>
  );
};

export default IndexPage;
