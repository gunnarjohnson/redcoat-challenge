import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 34rem;
  }
  @media screen and (min-width: 992px) {
    width: 45rem;
  }
`

const Row = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`

const Label = styled.label`
  font-weight: 700;
`

const Input  = styled.input`
  width: calc(100% - 14px);
  margin-top: 0.5rem;
  padding: 3px 7px;
  border: 0;
  border-radius: 7px;
  box-shadow: 0 0 4px #b8b8b8;
`

const Message = styled.label`
  font-weight: 700;
`

const Textarea = styled.textarea`
  width: calc(100% - 14px);
  height: 12rem;
  margin-top: 0.5rem;
  padding: 3px 7px;
  border: 0;
  border-radius: 7px;
  box-shadow: 0 0 4px #b8b8b8;
  overflow-y: scroll;
  resize: none;
`

const SendButton = styled.button`
  width: calc(50% - 1rem);
  max-width: 12rem;
  margin: 0 1rem 0 0;
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
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    background-color: #cf142b;
    border-color: #cf142b;
  }
`

const ClearInput = styled.input`
  width: calc(50% - 1rem);
  max-width: 12rem;
  margin: 0 0 0 1rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #000000;
  border-radius: 4px;
  color: #000000;
  background-color: transparent;
  font-size: 1.2em;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    color: #e8e8e8;
    background-color: #00247d;
    border-color: #00247d;
  }
`

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section>
      <h1>Contact</h1>
      <p>Questions? Send us a message.</p>
      <FormWrapper>
        <Form name="contact" method="POST" action="/success" netlify-honeypot="bot-field" data-netlify="true">
          <Input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <Row>
            <Label>
              Name
              <Input type="text" name="name" id="name" />
            </Label>
          </Row>
          <Row>
            <Label>
              Email
              <Input type="email" name="email" id="email" />
            </Label>
          </Row>
          <Row>
            <Label>
              Subject
              <Input type="text" name="subject" id="subject" />
            </Label>
          </Row>
          <Row>
            <Message>
              Message
              <Textarea name="message" id="message" rows="5" />
            </Message>
          </Row>
          <Row>
            <SendButton type="submit">Send</SendButton>
            <ClearInput type="reset" value="Clear" />
          </Row>
        </Form>
      </FormWrapper>
    </section>
  </Layout>
)

export default Contact
