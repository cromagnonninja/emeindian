import styled from "@emotion/styled";
import Layout from "../../components/Layout";
import Category from "./Category";
import BgGif from "../../assets/wea.gif";

export default () => (
  <Layout title="Products">
    <Category
      title="Test"
      gif="url('http://www.schelt.in/images/banner/wea.gif')"
    />
  </Layout>
);

