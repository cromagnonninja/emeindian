import styled from "@emotion/styled";

import { createClient, documentToReactComponents } from "../../lib/contentful";
import Layout from "../../components/Layout";
import { H2 } from "../../components/contentful/Heading";
import People from "./People";

function Team({ teamPage, team }) {
  return (
    <Layout title="Team">
      {documentToReactComponents(teamPage.fields.content)}
      <H2 style={{ marginBottom: 0, marginTop: "70px" }}>Meet the team</H2>
      <People team={team} />
    </Layout>
  );
}

Team.getInitialProps = async ctx => {
  const client = createClient();
  const teamPage = await client.getEntry("7jsSQgzqachOdhKVizCxT6");
  const teamMembers = await client.getEntries({ content_type: "teamMember" });

  return { teamPage, team: teamMembers.items || [] };
};

export default Team;
