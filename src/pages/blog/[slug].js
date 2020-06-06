import styled from "@emotion/styled";
import Layout from "../../components/Layout";
import ArrowIconImg from "../../assets/icons/arrow.svg";
import { createClient } from "../../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { fmtDate } from "./index";
import ImgWithCaption from "../../components/contentful/ImgWithCaption";
import Link from "next/link";
import p404 from "../404";

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
`;

const Back = styled.a`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.1rem;
  margin-bottom: 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 15px 0;
`;

const Meta = styled.h3`
  font-size: 1.1rem;
  text-align: center;
  color: #888;
`;

const ContentfulContainer = styled.div`
  margin: 40px 0;

  > * {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

function BlogPost({ found, post }) {
  return found ? (
    <Layout title={post.fields.title}>
      <Container>
        <Link href="/blog">
          <Back>
            <svg
              id="Layer"
              enableBackground="new 0 0 64 64"
              height="512"
              viewBox="0 0 64 64"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: "currentColor",
                height: "20px",
                width: "20px",
                marginRight: "10px",
              }}
            >
              <path d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z" />
            </svg>
            Back
          </Back>
        </Link>
        <Title>{post.fields.title}</Title>
        <Meta>
          {post.fields.author} | {fmtDate(post.fields.published)}
        </Meta>
        <ContentfulContainer>
          {documentToReactComponents(post.fields.content, {
            renderNode: {
              [BLOCKS.EMBEDDED_ENTRY]: node => {
                if (
                  node.data.target.sys.contentType.sys.id === "imageWithCaption"
                ) {
                  const {
                    media: {
                      fields: {
                        title,
                        file: { url },
                      },
                    },
                    caption,
                  } = node.data.target.fields;

                  return (
                    <ImgWithCaption alt={title} img={url} caption={caption} />
                  );
                }
                return documentToReactComponents(node);
              },
            },
          })}
        </ContentfulContainer>
      </Container>
    </Layout>
  ) : (
    <p404 />
  );
}

export async function getStaticProps({ params: { slug } }) {
  const client = createClient();
  const post = await client.getEntries({
    "fields.slug": slug,
    content_type: "blogPost",
  });

  if (post.total !== 1) {
    return { props: { found: false } };
  }

  return { props: { found: true, post: post.items[0] } };
}

export async function getStaticPaths(ctx) {
  const client = createClient();
  const paths = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt",
  });

  return {
    paths: paths.items.map(i => `/blog/${i.fields.slug}`),
    fallback: true,
  };
}

export default BlogPost;
