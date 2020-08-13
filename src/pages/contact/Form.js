import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ReCAPTCHA from "react-google-recaptcha";
import { Message } from "theme-ui";

const InputContainer = styled.div`
  margin: 25px 0;
`;

const InputLabel = styled.label`
  display: block;
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const Input = styled.input`
  display: block;
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes[1]};
  padding: 15px 20px;
  border: 2px solid rgba(91, 113, 120, 0.2);
  border-radius: 4px;
  background: rgba(70, 165, 195, 0.05);
  transition: border-color 0.3s ease;
  margin: 10px 0;
  width: 100%;
  max-width: 450px;

  &:focus,
  &:active {
    border-color: ${props => props.theme.colors.secondary};
    outline: none;
  }
`;

const TextArea = styled.textarea`
  display: block;
  resize: vertical;
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes[1]};
  padding: 15px 20px;
  border: 2px solid rgba(91, 113, 120, 0.2);
  border-radius: 4px;
  background: rgba(70, 165, 195, 0.05);
  transition: border-color 0.3s ease;
  margin: 10px 0;
  width: 100%;
  max-width: 450px;

  &:focus,
  &:active {
    border-color: ${props => props.theme.colors.secondary};
    outline: none;
  }
`;

const TextInput = ({ placeholder, onChange, name, label, textarea }) => (
  <InputContainer>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    {textarea ? (
      <TextArea
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    ) : (
      <Input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    )}
  </InputContainer>
);

const SubmitBtn = styled.button`
  display: block;
  font-size: ${props => props.theme.fontSizes[1]};
  font-weight: 600;
  padding: 15px 20px;
  color: #fff;
  background: ${props => props.theme.colors.secondary};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background: #eaeaef;
    cursor: not-allowed;
  }
`;

const Error = styled.div`
  margin: 20px 0;
  font-size: 0.9rem;
  color: #ff0000;
`;

const Success = styled.div`
  margin: 20px 0;
  font-size: 0.9rem;
  color: #007d00;
`;

export default () => {
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  const [recaptchaAccepted, setRecaptchaAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (submitting) return;

    try {
      setSubmitting(true);

      const res = await (
        await fetch("/api/contact", {
          method: "post",
          body: JSON.stringify({
            phone,
            name,
            email,
            message
          }),
        })
      ).json();

      if (res.success) {
        setSubmitting(false);
        setError(false);
        setPhone("");
        setEmail("");
        setName("");
        setMessage("");
        setSuccess(res.message);
      } else {
        setSubmitting(false);
        setError(res.message);
      }
    } catch (e) {
      setSubmitting(false);
      setError("An error occurred");
    }
  };

  return (
    <form>
      {/* TODO: make it work */}
      <TextInput
        value={phone}
        onChange={e => setPhone(e.target.value)}
        name="phone"
        label="Mobile number"
        placeholder="XXXXXXXXX"
      />
      <TextInput
        value={email}
        onChange={e => setEmail(e.target.value)}
        name="email"
        label="Email"
        placeholder="john@example.com"
      />
      <TextInput
        value={name}
        onChange={e => setName(e.target.value)}
        name="name"
        label="Name"
        placeholder="John Doe"
      />
      <TextInput
        name="req"
        label="Requirement Details"
        placeholder="Additional information"
        textarea={true}
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}
      {/* <div style={{ margin: "20px 0" }}>
        <ReCAPTCHA
          sitekey=""
          onChange={value => setRecaptchaAccepted(value)}
        />
      </div> */}
      <SubmitBtn
        // disabled={submitting} 
        // || !recaptchaAccepted
        onClick={handleSubmit}
      >
        {submitting ? "Submitting" : "Submit"} requirements
      </SubmitBtn>
    </form>
  );
};
