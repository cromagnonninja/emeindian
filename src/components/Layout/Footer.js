import styled from "@emotion/styled";

const FooterContainer = styled.div`
  background: ${props => props.theme.colors.mutedSecondary};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: #012d7760;

  @media screen and (max-width: 550px) {
    padding: 20px 0;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

const Brochure = styled.a`
  cursor: pointer;
  transition: color 0.3s ease;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (max-width: 550px) {
    display: block;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export default () => (
  <FooterContainer>
    <div>
      <div>&copy; Electro Mechanical Enterprises</div>
      <Brochure target="_blank" href="/brochure.pdf">
        Download Brochure
      </Brochure>
    </div>
    <div>All Rights Reserved</div>
  </FooterContainer>
);
