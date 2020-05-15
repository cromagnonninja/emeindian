import styled from "@emotion/styled";

import MapPinIcon from "../../assets/icons/map-pin-blue.svg";
import PhoneIcon from "../../assets/icons/phone-blue.svg";

const MapIFrame = styled.iframe`
  width: 100%;
  height: 400px;
`;

const ItemWithIconContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 25px 0;
`;

const ItemIconContainer = styled.div`
  width: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ItemIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-top: 3px;
  fill: ${props => props.theme.colors.secondary};
`;

const ItemContent = styled.div`
  flex: 1;
  line-height: 25px;
  color: ${props => props.theme.colors.textLight};
`;

const ItemWithIcon = ({ icon, iconAlt, children }) => (
  <ItemWithIconContainer>
    <ItemIconContainer>
      <ItemIcon src={icon} alt={iconAlt} />
    </ItemIconContainer>
    <ItemContent>{children}</ItemContent>
  </ItemWithIconContainer>
);

export default () => (
  <>
    <MapIFrame
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.3439744680877!2d77.41993411550165!3d28.529378995492056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8dfc804370f%3A0x82c6dc46f35faf6!2sElectro%20Mechanical%20Enterprises!5e0!3m2!1sen!2sin!4v1589518365655!5m2!1sen!2sin"
      width="600"
      height="450"
      frameborder="0"
      style={{ border: 0 }}
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    />
    <ItemWithIcon icon={MapPinIcon} iconAlt="Map Pin">
      B-75, Industrial Area, Phase II, Phool Mandi, Sector 88, Noida-201305,
      Uttar Pradesh, India
    </ItemWithIcon>

    <ItemWithIcon icon={PhoneIcon} iconAlt="Phone">
      +91 9818328823, +91 011 2348234
    </ItemWithIcon>
  </>
);
