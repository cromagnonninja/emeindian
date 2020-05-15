import styled from "@emotion/styled";
import Link from "next/link";

import ProductImageImg from "../../assets/index-header.jpg";

const Container = styled.div`
  padding: 70px 0;
  background-color: ${props => props.theme.colors.muted};
`;

const Heading = styled.div`
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
`;

const ByLine = styled.div`
  margin: 20px auto;
  color: ${props => props.theme.colors.textLight};
  line-height: 30px;
  max-width: 550px;
  width: 80%;
  text-align: center;
`;

const Products = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  overflow: hidden;
  max-width: 1200px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

const ProductInfo = styled.div`
  border-radius: 4px 4px 0 0;
  background: #ffffff;
  padding: 10px 20px;
`;

const ProductImageContainer = styled.div`
  height: 300px;
  width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 080%;
  height: auto;
`;

const ProductName = styled.div`
  margin: 10px 0;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const Button = styled.a`
  display: block;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  border-radius: 0 0 4px 4px;
  padding: 20px 0;
  color: #fff;
  cursor: pointer;
`;

const Product = ({ image, name, href }) => (
  <div>
    <ProductInfo>
      <ProductImageContainer>
        <ProductImage src={image} alt="" />
      </ProductImageContainer>
      <ProductName>{name}</ProductName>
    </ProductInfo>
    <Link href={href}>
      <Button>More Info</Button>
    </Link>
  </div>
);

export default () => (
  <Container>
    <Heading>Products & Services</Heading>
    <ByLine>
      Established suppliers and service providers of Innovative
      Scientific/Industrial Products, Instruments, Apparatus and Systems.
    </ByLine>

    <Products>
      <Product
        image={ProductImageImg}
        name="Example Product"
        href="/products"
      />
      <Product
        image={ProductImageImg}
        name="Example Product"
        href="/products"
      />
      <Product
        image={ProductImageImg}
        name="Example Product"
        href="/products"
      />
      <Product
        image={ProductImageImg}
        name="Example Product"
        href="/products"
      />
    </Products>
  </Container>
);
