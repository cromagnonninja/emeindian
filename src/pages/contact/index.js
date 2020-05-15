import styled from "@emotion/styled";

import Layout from "../../components/Layout";
import Map from "./Map";
import Form from "./Form";

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 60vh;
  height: 100%;
  padding: 60px 0;

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    padding: 20px 20px;
  }
`;

const Side = styled.div`
  width: 45%;
  max-width: 600px;
  margin: 0 50px;

  @media screen and (max-width: 1200px) {
    margin: 30px 0;
    width: 100%;
    max-width: 100%;
  }
`;

const Heading = styled.div`
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const Description = styled.div`
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights.light};
  margin: 10px 0;
`;

export default () => (
  <Layout title="Contact">
    <Container>
      <Side>
        <Map />
      </Side>
      <Side>
        <Heading>Have an enquiry?</Heading>
        <Description>
          Tell us about your requirements and we will get back to you with the
          best quotes.
        </Description>

        <Form />
      </Side>
    </Container>
  </Layout>
);
