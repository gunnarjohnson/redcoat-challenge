import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

const CompetitionNavLinkWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1.2rem;
  border-bottom: 2px solid black;
`

const CompetitionNavLink = styled(props => <Link {...props} />)`
  flex-basis: 33.33%;
  margin: 0.2rem 0.6rem;
  color: black;
  font-family: 'pt sans', sans-serif;
  font-size: 1.4em;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    flex-basis: auto;
  }

  &:nth-child(odd) {
    margin-left: 0;

    @media screen and (min-width: 768px) {
      margin-left: 0.6em;
    }
  }

  &:nth-child(even) {
    margin-right: 0;

    @media screen and (min-width: 768px) {
      margin-right: 0.6em;
    }
  }

  &:first-child {
    @media screen and (min-width: 768px) {
      margin-left: 0;
    }
  }

  &:last-child {
    @media screen and (min-width: 768px) {
      margin-right: 0;
    }
  }
`


const CompetitionNav = () => (
  <CompetitionNavLinkWrapper>
    <CompetitionNavLink to="/competition/rules">Rules</CompetitionNavLink>
    <CompetitionNavLink to="/competition/awards">Awards</CompetitionNavLink>
    <CompetitionNavLink to="/competition/shipping">Shipping</CompetitionNavLink>
    <CompetitionNavLink to="/competition/fees">Fees</CompetitionNavLink>
    <CompetitionNavLink to="/competition/prizes">Prizes</CompetitionNavLink>
    <CompetitionNavLink to="/competition/categories">Categories</CompetitionNavLink>
  </CompetitionNavLinkWrapper>
)

export default CompetitionNav