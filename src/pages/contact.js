/* eslint-disable prettier/prettier */
import { navigate } from "gatsby"
import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
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

const Input = styled.input`
  width: calc(100% - 14px);
  margin-top: 0.5rem;
  padding: 3px 7px;
  border: 0;
  border-radius: 7px;
  box-shadow: 0 0 4px #b8b8b8;
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
  transition:
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

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
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  &:hover {
    color: #e8e8e8;
    background-color: #00247d;
    border-color: #00247d;
  }
`

const recaptchaKey = process.env.GATSBY_SITE_RECAPTCHA_KEY

const recaptchaRef = React.createRef()

const encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [gRecaptchaResponse, setGRecaptchaResponse] = useState(null)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubjectChange = (e) => {
    setSubject(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleRecaptcha = (value) => {
    setGRecaptchaResponse(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValidRecaptchaResponse = !!gRecaptchaResponse

    if (!isValidRecaptchaResponse) {
      // eslint-disable-next-line no-alert, no-undef
      alert("Please verify that you're a human and try again.")

      return
    }

    const form = e.target

    fetch("/", {
      method: form.getAttribute("method"),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": gRecaptchaResponse,
        name,
        email,
        subject,
        message,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      // eslint-disable-next-line no-alert, no-undef
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <section>
        <h1>Contact</h1>
        <p>Questions? Send us a message.</p>
        <FormWrapper>
          <Form
            name="contact"
            method="POST"
            action="/success"
            data-netlify="true"
            data-netlify-recaptcha="true"
            onSubmit={handleSubmit}
          >
            <Row>
              <Label htmlFor="name">
                Name
                <Input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleNameChange}
                  required
                />
              </Label>
            </Row>
            <Row>
              <Label htmlFor="email">
                Email
                <Input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleEmailChange}
                  required
                />
              </Label>
            </Row>
            <Row>
              <Label htmlFor="subject">
                Subject
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  onChange={handleSubjectChange}
                  required
                />
              </Label>
            </Row>
            <Row>
              <Label htmlFor="message">
                Message
                <Textarea
                  name="message"
                  id="message"
                  rows="5"
                  onChange={handleMessageChange}
                  required
                />
              </Label>
            </Row>
            <Row>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={recaptchaKey}
                onChange={handleRecaptcha}
              />
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
}

export default Contact
