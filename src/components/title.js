import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const TitleWrapper = styled.span`
  font-family: "patua one", sans-serif;
  font-size: 1.2em;
  font-weight: 400;
  text-transform: uppercase;
`

const Title = ({ year }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  return (
    <TitleWrapper>
      {title}
      {typeof year === "number" ? ` ${year}` : ""}
    </TitleWrapper>
  )
}

Title.propTypes = {
  year: PropTypes.number,
}

Title.defaultProps = {
  year: null,
}

export default Title
