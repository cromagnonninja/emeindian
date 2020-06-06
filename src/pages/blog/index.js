import styled from "@emotion/styled";
import Layout from "../../components/Layout";
import ArrowIconImg from "../../assets/icons/arrow.svg";
import { createClient } from "../../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

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
  cursor: pointer;
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

export const ArrowIcon = styled.img`
  height: ${props => props.dim || "25px"};
  width: ${props => props.dim || "25px"};
  margin: 0px 10px 0px;
  vertical-align: bottom;
  stroke: ${props => props.theme.colors.secondary};
  transform: rotate(180deg);
`;

export function fmtDate(date) {
  date = new Date(date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function BlogPosts({ posts }) {
  return (
    <Layout title="Blog">
      <Container>
        <h1>Blog</h1>
        <Description>Words from the EME Indian team.</Description>

        {posts.map((p, i) => {
          console.log({
            p,
            pp: p.fields.content.content.filter(
              n => n.nodeType === "paragraph",
            )[0],
          });
          return (
            <BlogContainer key={i}>
              <BlogPost>
                <BlogTitle>{p.fields.title}</BlogTitle>
                <ByLine>
                  by {p.fields.author} | {fmtDate(p.fields.published)}
                </ByLine>
                <BlogText>
                  {documentToReactComponents(
                    p.fields.content.content.filter(
                      n => n.nodeType === "paragraph",
                    )[0],
                  )}
                </BlogText>

                <Link href={`/blog/${p.fields.slug}`}>
                  <ReadMore>
                    Read More{" "}
                    <ArrowIcon src={ArrowIconImg} alt="Read More" dim="20px" />
                  </ReadMore>
                </Link>
              </BlogPost>
            </BlogContainer>
          );
        })}
      </Container>
    </Layout>
  );
}

BlogPosts.getInitialProps = async ctx => {
  const client = createClient();
  const posts = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt",
  });

  return { posts: posts.items };
};

export default BlogPosts;
