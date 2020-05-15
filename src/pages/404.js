import Layout from "../components/Layout";
import Link from "next/link";
import styled from "@emotion/styled";

const LinkA = styled.a`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  cursor: pointer;
`;

export default () => (
  <Layout title="Not Found">
    <div>
      <h1>Not Found</h1>
      <p>
        The page you were looking for could not be found. Perhaps you'd like to
        go back{" "}
        <Link href="/">
          <LinkA>home</LinkA>
        </Link>
        ?
      </p>
    </div>

    <style jsx>{`
      div {
        padding: 50px;
      }

      h1 {
        font-size: 3rem;
      }
    `}</style>
  </Layout>
);
