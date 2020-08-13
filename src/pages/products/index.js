import styled from "@emotion/styled";
import Layout from "../../components/Layout";
import Category from "./Category";
import BgGif from "../../assets/wea.gif";

// export default () => (
//   <Layout title="Products">
//     <Category
//       title="Test"
//       gif="url('http://www.schelt.in/images/banner/wea.gif')"
//     />
//   </Layout>
// );

import { createClient, documentToReactComponents } from "../../lib/contentful";
import { H2 } from "../../components/contentful/Heading";
// import People from "../../components/People";

function Products({ teamPage, team }) {
  return (
    <Layout title="Products">
      <Category
      title="Products page"
      gif="url('http://www.schelt.in/images/banner/wea.gif')"
      />
      {documentToReactComponents(teamPage.fields.content)}
      <H2 style={{ marginBottom: 0, marginTop: "70px" }}>These are the products offered by EME Indian. </H2>
      <Category product={team} />
    </Layout>
  );
}

Products.getInitialProps = async ctx => {
  const client = createClient();
  const teamPage = await client.getEntry("7jsSQgzqachOdhKVizCxT6");
  const teamMembers = await client.getEntries({ content_type: "product" });
  return { teamPage, team: teamMembers.items || [] };
};

export default Products;