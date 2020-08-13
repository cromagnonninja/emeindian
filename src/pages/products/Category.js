import styled from "@emotion/styled";

const Header = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 400px;
  width: 100%;
  position: relative;

  &::before {
    position: absolute;
    height: 400px;
    width: 100%;
    top: 0;
    left: 0;
    content: "";
    background: #00000040;
    z-index: 10000;
  }
`;

const HeaderContentContainer = styled.div`
  width: 98%;
  max-width: 900px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  z-index: 100000;
`;

const HeaderContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 30px;
`;

const ProductsContainer = styled.div`
  width: 98%;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export default ({ title, gif, products }) => (
  <div>
    <Header style={{ backgroundImage: gif }}>
      <HeaderContentContainer>
        <HeaderContent>
          <Heading>{title}</Heading>
        </HeaderContent>
      </HeaderContentContainer>
    </Header>
    <ProductsContainer>List of products</ProductsContainer>
  </div>
);
