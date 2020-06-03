import styled from "@emotion/styled";

const ImageContainer = styled.div`
  margin: 40px auto;
  max-width: 750px;
  width: 90%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Caption = styled.div`
  margin-top: 05px;
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes[0]};
  text-align: center;
`;

export default ({ img, alt, caption }) => (
  <ImageContainer>
    <Image src={img} alt={alt || caption} />
    <Caption>{caption}</Caption>
  </ImageContainer>
);
