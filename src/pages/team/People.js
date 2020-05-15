import styled from "@emotion/styled";

const PeopleContainer = styled.div`
  margin: 50px auto;
  margin-top: 0;
  max-width: 1000px;
  width: 100%;
`;

const PeopleFlexContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    justify-content: space-around;
  }
`;

const PersonContainer = styled.div`
  width: 300px;
  padding: 30px;
  margin: 33.33px 0;
  border: 2px solid #eaeaef;
  border-radius: 4px;
`;

const PersonImg = styled.img`
  --dim: 180px;
  width: var(--dim);
  height: var(--dim);
  object-fit: cover;
  border-radius: 100000px;
  display: block;
  margin: 0 auto;
`;

const Name = styled.div`
  margin-top: 30px;
  margin-bottom: 5px;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes[2]};
  text-align: center;
`;

const Designation = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: 600;
  margin-bottom: 15px;
`;

const Description = styled.div`
  text-align: center;
  /* color: ${props => props.theme.colors.textLight}; */
`;

const Person = () => (
  <PersonContainer>
    <PersonImg src="https://github.com/rauchg.png" />
    <Name>Guillermo Rauch</Name>
    <Designation>Chief Engineer</Designation>
    <Description>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illum
      dolorum adipisci.
    </Description>
  </PersonContainer>
);

export default () => (
  <PeopleContainer>
    <PeopleFlexContainer>
      {Array(12)
        .fill("_")
        .map(() => (
          <Person />
        ))}
    </PeopleFlexContainer>
  </PeopleContainer>
);
