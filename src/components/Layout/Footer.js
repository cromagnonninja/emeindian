import styled from "@emotion/styled";
import Link from "next/link";

import MapPinIcon from "../../assets/icons/map-pin.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import LogoBW from "../../assets/logo-bw.png";

const FooterFlexContainer = styled.div`
  padding: 080px 0;
  background: ${props => props.theme.colors.secondary};
  color: #ffffff60;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterBlockContainer = styled.div`
  width: 100%;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
    width: 100%;
    padding: 0 50px;
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  width: ${props => props.swidth || "32%"};
  @media screen and (max-width: 1200px) {
    width: 100% !important;
    margin: 20px 0;
    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const FooterSectionTitle = styled.div`
  font-size: ${props => props.theme.fontSizes[2]};
  color: #fff;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  margin: 10px 0;
  cursor: pointer;
`;

const FooterItemWithIconContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 15px 0;
`;

const FooterItemIconContainer = styled.div`
  width: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FooterItemIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-top: 3px;
`;

const FooterItemContent = styled.div`
  flex: 1;
  line-height: 25px;
`;

const FooterItemWithIcon = ({ icon, iconAlt, children }) => (
  <FooterItemWithIconContainer>
    <FooterItemIconContainer>
      <FooterItemIcon src={icon} alt={iconAlt} />
    </FooterItemIconContainer>
    <FooterItemContent>{children}</FooterItemContent>
  </FooterItemWithIconContainer>
);

const FooterLogo = styled.img`
  height: 60px;
  width: auto;
  margin-bottom: 20px;
  display: block;
`;

const footerLinks = [
  { title: "Profile", path: "/about" },
  { title: "Products & Services", path: "/products" },
  { title: "Contact Us", path: "/contact" },
  { title: "Sitemap", path: "/sitemap" },
  { title: "Download Brochure", path: "/brochure" },
];

export default () => (
  <FooterFlexContainer>
    <FooterBlockContainer>
      <FooterContainer>
        <FooterSection swidth="20%">
          <FooterSectionTitle>Our Company</FooterSectionTitle>
          {footerLinks.map(({ title, path }, i) => (
            <Link href={path} key={i}>
              <FooterLink>{title}</FooterLink>
            </Link>
          ))}
        </FooterSection>

        <FooterSection swidth="53%">
          <FooterSectionTitle>
            Electro Mechanical Enterprises
          </FooterSectionTitle>

          <FooterItemWithIcon icon={MapPinIcon} iconAlt="Map Pin">
            B-75, Industrial Area, Phase II, Phool Mandi, Sector 88,
            Noida-201305, Uttar Pradesh, India
          </FooterItemWithIcon>

          <FooterItemWithIcon icon={PhoneIcon} iconAlt="Phone">
            +91 9818328823, +91 011 2348234
          </FooterItemWithIcon>

          {/* TODO: Add business hours here */}
        </FooterSection>

        <FooterSection swidth="25%">
          <FooterLogo src={LogoBW} alt="Electro Mechanical Enterprises" />
          &copy; Electro Mechanical Enterprises.
          <br />
          All Rights Reserved.
        </FooterSection>
      </FooterContainer>
    </FooterBlockContainer>
  </FooterFlexContainer>
);
