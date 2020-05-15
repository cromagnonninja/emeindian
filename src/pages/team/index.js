import styled from "@emotion/styled";

import Layout from "../../components/Layout";
import People from "./People";
import TeamImg from "../../assets/team/team.jpg";
import HoliImg from "../../assets/team/holi.jpg";

const Heading = styled.div`
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
  margin: 50px 0;
`;

const Desc = styled.p`
  max-width: 850px;
  width: 85%;
  margin: 20px auto;
`;

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

const ImgWithCaption = ({ img, alt, caption }) => (
  <ImageContainer>
    <Image src={img} alt={alt || caption} />
    <Caption>{caption}</Caption>
  </ImageContainer>
);

export default () => (
  <Layout title="Team">
    <Heading>Working at EMEIndian</Heading>
    <Desc>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
      nobis impedit voluptatibus debitis omnis soluta! Tenetur perferendis
      fugiat nulla cum excepturi assumenda. Hic, quam! Labore dignissimos
      dolores cum nulla laboriosam! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dignissimos nobis impedit voluptatibus debitis omnis
      soluta! Tenetur perferendis fugiat nulla cum excepturi assumenda. Hic,
      quam! Labore dignissimos dolores cum nulla laboriosam! Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Dignissimos nobis impedit
      voluptatibus debitis omnis soluta! Tenetur perferendis fugiat nulla cum
      excepturi assumenda. Hic, quam! Labore dignissimos dolores cum nulla
      laboriosam!
    </Desc>
    <ImgWithCaption img={TeamImg} caption="Our team" />
    <Desc>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
      nobis impedit voluptatibus debitis omnis soluta! Tenetur perferendis
      fugiat nulla cum excepturi assumenda. Hic, quam! Labore dignissimos
      dolores cum nulla laboriosam! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit.
    </Desc>
    <ImgWithCaption img={HoliImg} caption="Together we do festivals and work" />

    <Heading style={{ marginBottom: 0, marginTop: "70px" }}>
      Meet the team
    </Heading>
    <People />
  </Layout>
);
