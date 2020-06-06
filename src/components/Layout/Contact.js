import styled from "@emotion/styled";

import MapPinIcon from "../../assets/icons/map-pin-blue.svg";
import PhoneIcon from "../../assets/icons/phone-blue.svg";
import ClockIcon from "../../assets/icons/clock.svg";
import CreditCardIcon from "../../assets/icons/credit-card.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import WhatsAppIcon from "../../assets/icons/whatsapp.svg";

const ContactContainer = styled.div`
  height: 6vh;
  width: 100%;
  display: ${props => (!props.mobile ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: #dbe9ff;
  color: #012d7780;

  @media screen and (max-width: 1150px) {
    height: auto;
    padding: 10px 20px;
    display: ${props => (props.mobile ? "flex" : "none")};
  }
`;

const LeftContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;

  &:first-of-type {
    margin-left: 0;
    margin-top: 0;
  }
  &:last-of-type {
    margin-right: 0;
    margin-bottom: 0;
  }

  @media screen and (max-width: 1150px) {
    margin: 05px 0;
    display: ${props => (props.mobile ? "flex" : "none")};
  }
`;

const Icon = styled.img`
  height: ${props => props.dim || "20px"};
  width: ${props => props.dim || "20px"};
  margin-right: 10px;
`;

const SocialIcon = styled(Icon)`
  cursor: pointer;
`;

export default ({ mobile }) => (
  <ContactContainer mobile={mobile}>
    <LeftContainer>
      <InfoContainer>
        <Icon src={MapPinIcon} alt="Map Pin" />
        Noida, UP
      </InfoContainer>
      <InfoContainer mobile={true}>
        <Icon src={PhoneIcon} alt="Phone" />
        {/* TODO: Replace with legit numbers */}
        +91 1204242075, +91 9354004698
      </InfoContainer>
      <InfoContainer mobile={true}>
        <Icon src={ClockIcon} alt="Clock" />
        {/* TODO: Setup hook to change hours based on timezone */}
        Mon-Fri, 10AM-8PM IST
      </InfoContainer>
      <InfoContainer>
        <Icon src={CreditCardIcon} alt="Clock" />
        GSTIN: 09AFDPB5706L1ZH
      </InfoContainer>
    </LeftContainer>
    <div style={{ display: "flex", alignItems: "center" }}>
      <SocialIcon src={TwitterIcon} alt="Twitter" />
      <SocialIcon src={FacebookIcon} alt="Facebook" />
      <SocialIcon dim="15px" src={LinkedInIcon} alt="LinkedIn" />
      <SocialIcon src={WhatsAppIcon} alt="WhatsApp" />
    </div>
  </ContactContainer>
);
