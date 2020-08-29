import styled from "@emotion/styled";
import { documentToReactComponents } from "../lib/contentful";

const PeopleContainer = styled.div`
  margin: 50px auto;
  margin-top: 0;
  max-width: 1200px;
  width: 100%;
`;

const PeopleFlexContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PersonContainer = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 30px 10px;
  margin: 30px;
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

const DescriptionP = styled.p`
  font-size: 0.9rem;
`;

const Link = styled.a`
  font-size: inherit;
  text-decoration: none;
  color: ${props => props.theme.secondary};
`;

const Person = ({ profile }) => {
  return (
    <PersonContainer>
      <PersonImg
        src={profile.fields.avatar.fields.file.url}
        alt={profile.fields.avatar.fields.title}
      />
      <Name>{profile.fields.name}</Name>
      {/* <Designation>Chief Engineer</Designation> */}
      <Description>
        {profile.fields.description.content.map(p => {
          if (p.nodeType === "text") return p.value;
          if (p.nodeType === "hyperlink")
            return <Link href={"Asdasd"}>{"Asdasd"}</Link>;
          return documentToReactComponents(p);
        })}
      </Description>
    </PersonContainer>
  );
};

export default ({ team }) => (
  <PeopleContainer>
    <PeopleFlexContainer>
      console.log(team)
      {team.map((p, i) => (
        <Person key={i} profile={p} />
      ))}
    </PeopleFlexContainer>
  </PeopleContainer>
);
