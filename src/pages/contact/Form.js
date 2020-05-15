import styled from "@emotion/styled";

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
`;

export default () => (
  <form>
    {/* TODO: make it work */}
    <TextInput
      name="phone"
      label="Mobile number"
      placeholder="+91 XXXX XXX XXX"
    />
    <TextInput name="name" label="Name" placeholder="John Doe" />
    <TextInput
      name="req"
      label="Requirement Details"
      placeholder="Additional information"
      textarea={true}
    />
    {/* TODO: add recaptcha */}
    <SubmitBtn>Submit requirements</SubmitBtn>
  </form>
);
