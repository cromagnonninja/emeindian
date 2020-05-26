import styled from "@emotion/styled";
import Layout from "../../components/Layout";
import ArrowIconImg from "../../assets/icons/arrow.svg";

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
`;

const BlogContainer = styled.div`
  width: 100%;
  margin: 30px 0;
  overflow-x: auto;
`;

const BlogPost = styled.div`
  border: 2px solid #7089b2;
  border-radius: 5px;
  width: 100%;
`;

const Cell = styled.div`
  font-size: 1rem;
  padding: 25px 25px 5px;
`;

const BlogTitle = styled(Cell)`
  color: ${props => props.theme.colors.secondary};
  font-weight: ${props => props.theme.fontWeights.semibold};
  text-align: left;
  width: 100%;
`;

const ByLine = styled(Cell)`
  color: ${props => props.theme.colors.textLight};
  font-weight: ${props => props.theme.fontWeights.lighter};
  text-align: left;
  width: 100%;
  padding-top: 0px;
`;

const BlogText = styled(Cell)`
  font-weight: ${props => props.theme.fontWeights.text};
  padding-top: 10px;
  padding-bottom: 30px;
`;

const ReadMore = styled.div`
  background: ${props => props.theme.colors.mutedSecondary};
  color: ${props => props.theme.colors.secondary};
  font-weight: ${props => props.theme.fontWeights.semibold};
  padding: 15px;
  text-align: right;
`;

const Description = styled.div`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.light};
  font-size: ${props => props.theme.fontSizes[2]};
  margin-top: 5px;

  @media screen and (max-width: 650px) {
    font-size: ${props => props.theme.fontSizes[2]};
  }
`;

const ArrowIcon = styled.img`
  height: ${props => props.dim || "25px"};
  width: ${props => props.dim || "25px"};
  margin: 0px 10px 0px;
  vertical-align: bottom;
  stroke: ${props => props.theme.colors.secondary};
  cursor: pointer;
  transform: rotate(180deg);
`;

export default () => (
  <Layout title="Blog">
    <Container>
      <h1>Blog</h1>
      <Description>Words from the EME Indian team.</Description>

      <BlogContainer>
        <BlogPost>
          <BlogTitle>
            How to Win the Next Election: Popular Environmental Policy
          </BlogTitle>
          <ByLine> by Devon Babin | May 15, 2019</ByLine>
          <BlogText>
            Canadians are going yo make the environment a key issue in the
            upcoming federal election and the winning party will have to address
            three key issues. What does a winning platform look like? Green
            Infrastructure According to Polly, any winning plotform needs to
            include...
          </BlogText>

          <ReadMore>
            Read More{" "}
            <ArrowIcon src={ArrowIconImg} alt="Read More" dim="20px" />
          </ReadMore>
        </BlogPost>
      </BlogContainer>
      <BlogContainer>
        <BlogPost>
          <BlogTitle>
            How to Win the Next Election: Popular Environmental Policy
          </BlogTitle>
          <ByLine> by Devon Babin | May 15, 2019</ByLine>
          <BlogText>
            Canadians are going yo make the environment a key issue in the
            upcoming federal election and the winning party will have to address
            three key issues. What does a winning platform look like? Green
            Infrastructure According to Polly, any winning plotform needs to
            include...
          </BlogText>

          <ReadMore>
            Read More{" "}
            <ArrowIcon src={ArrowIconImg} alt="Read More" dim="20px" />
          </ReadMore>
        </BlogPost>
      </BlogContainer>
    </Container>
  </Layout>
);
