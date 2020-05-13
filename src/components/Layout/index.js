import styled from "@emotion/styled";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = styled.div`
  min-height: 60vh;
  width: 100%;
`;

export default ({ title, children }) => (
  <>
    <Head>
      <title>{title && `${title} | `}Electro Mechanical Enterprises</title>
      {/* TODO: Add favicon */}
    </Head>

    <Navbar />

    <Main>{children}</Main>

    <Footer />
  </>
);
