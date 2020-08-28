import styled from "@emotion/styled";
import Layout from "../../components/Layout";
import { createClient, documentToReactComponents } from "../../lib/contentful";
import { H2 } from "../../components/contentful/Heading";
import Category from "./Category"

function Product({ productsPageBG, products}) {
  return (
    <Layout title="Product">
      <Category
      title="Best Products Available Here!"
      gif="url('http://www.schelt.in/images/banner/wea.gif')"
      />
      {documentToReactComponents(productsPageBG.fields.content)}
      <People products={products} />
      </Layout>
  );
}

Product.getInitialProps = async ctx => {
  const client = createClient();
  const productsPageBG = await client.getEntry("5tCslA3aju6nKeLGV97lEb");
  const products = await client.getEntries({ content_type: "productID" });
  return {productsPageBG, product: products.items || [] };
};

export default Product;
