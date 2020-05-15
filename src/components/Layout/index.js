import styled from "@emotion/styled";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import favicon from "../../assets/favicon.png";

const Main = styled.div`
  min-height: 60vh;
  width: 100%;
`;

export default ({ title, children }) => (
  <>
    <Head>
      <title>{title && `${title} | `}Electro Mechanical Enterprises</title>
      <link rel="shortcut icon" href={favicon} type="image/png" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <Navbar />

    <Main>{children}</Main>

    <Footer />
  </>
);
