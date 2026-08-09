import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledAnchor = styled.a`
  color: #00247d;

  &:hover {
    color: #cf142b;
  }
`;

const Anchor = ({ rel, target, text, title, url }) => (
  <StyledAnchor href={url} rel={rel} target={target} title={title}>
    {text}
  </StyledAnchor>
);

Anchor.defaultProps = {
  rel: "noopener noreferrer",
  target: "_blank",
  title: undefined,
};

Anchor.propTypes = {
  rel: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default Anchor;
