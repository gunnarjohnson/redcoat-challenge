import React from "react"
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 3rem;
  background-color: #00247d;
  font-family: 'pt sans', sans-serif;
`

const FooterContent = styled.p`
  color: #ffffff;
`

const Footer = () => (
  <FooterWrapper>
    <FooterContent>© {new Date().getFullYear()} DCHG</FooterContent>
  </FooterWrapper>
)

export default Footer