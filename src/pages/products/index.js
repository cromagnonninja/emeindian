import styled from "@emotion/styled";
import Layout from "../../components/Layout";
import { createClient, documentToReactComponents } from "../../lib/contentful";
import { H2 } from "../../components/contentful/Heading";
import People from "../../components/People";
import Category from "./Category"

function Product({ productsPage, product }) {
  return (
    <Layout title="Product">
      <Category
      title="Best Products Available Here!"
      gif="url('http://www.schelt.in/images/banner/wea.gif')"
      />
      {documentToReactComponents(productsPageBG.fields.content)}
      {documentToReactComponents(productsPageContent.fields.content)}
      {/* <People product={product}/> */}
    </Layout>
  );
}

// export default () => (
//   <Layout title="Products">
//     <Category
//       title="Test"
//       gif="url('http://www.schelt.in/images/banner/wea.gif')"
//     />
//   </Layout>
// );

Product.getInitialProps = async ctx => {
  const client = createClient();
  const productsPageBG = await client.getEntry("5tCslA3aju6nKeLGV97lEb");
  const productsPageContent = await client.getEntry("75vOKvDvXajCxGWfPljNgW");
  return {productsPageBG, productsPageContent};
};

export default Product;
