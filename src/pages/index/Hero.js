import styled from "@emotion/styled";
import Link from "next/link";

import HeroImageImg from "../../assets/index-header.jpg";

const Container = styled.div`
  min-height: 70vh;
  padding: 50px 0;
  display: flex;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

const Side = styled.div`
  width: ${props => props.width || "50%"};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1050px) {
    width: 100%;
    padding: 30px 0;
  }
`;

const HeroImage = styled.img`
  width: 80%;
  height: auto;
  max-width: 400px;

  @media screen and (max-width: 1050px) {
    width: 50vw;
    min-width: 300px;
  }
`;

const ContentContainer = styled.div`
  width: 80%;
`;

const Heading = styled.div`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes[4]};
`;

const Description = styled.div`
  font-weight: ${props => props.theme.fontWeights.light};
  font-size: ${props => props.theme.fontSizes[3]};
  margin-top: 10px;
  margin-bottom: 50px;

  @media screen and (max-width: 650px) {
    font-size: ${props => props.theme.fontSizes[2]};
    margin-bottom: 30px;
  }
`;

const Button = styled.a`
  font-size: ${props => props.theme.fontSizes[1]};
  padding: 20px 30px;
  background: ${props => props.theme.colors[props.variant]};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-transform: uppercase;
  border-radius: 8px;
  margin: 0 10px;
  color: #fff;
  cursor: pointer;

  &:first-of-type {
    margin-left: 0;
    margin-top: 0;
  }
  &:last-of-type {
    margin-right: 0;
    margin-bottom: 0;
  }

  @media screen and (max-width: 650px) {
    display: block;
    font-size: ${props => props.theme.fontSizes[0]};
    padding: 20px 15px;
    width: 100%;
    margin: 20px 0;
    text-align: center;
  }
`;

export default () => (
  <Container>
    <Side width="60%">
      <ContentContainer>
        <Heading>Electro Mechanical Enterprises</Heading>
        <Description>
          Established suppliers and service providers of Innovative
          Scientific/Industrial Products, Instruments, Apparatus and Systems.
        </Description>
        <Link href="/about">
          <Button variant="primary">Learn More</Button>
        </Link>
        <Link href="/products">
          <Button variant="secondary">Products</Button>
        </Link>
      </ContentContainer>
    </Side>
    <Side width="38%">
      <HeroImage src={HeroImageImg} alt="Hero Image" />
    </Side>
  </Container>
);
