import styled from "@emotion/styled";
import Layout from "../../components/Layout";

import Certificate from "../../assets/certificate.png";

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
`;

const TableContainer = styled.div`
  width: 100%;
  margin: 40px 0;
  overflow-x: auto;
`;

const Table = styled.div`
  border: 1px solid #eaeaef;
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Cell = styled.div`
  font-size: 1rem;
  padding: 15px 25px;
`;

const HeaderCell = styled(Cell)`
  font-weight: bold;
  text-align: left;
  width: 100%;
`;

const LabelCell = styled(Cell)`
  color: #888;
  width: 40%;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-bottom: 0;
  }
`;

const InfoCell = styled(Cell)`
  width: 60%;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-top: 5px;
  }
`;

const Description = styled.div`
  font-weight: ${props => props.theme.fontWeights.light};
  font-size: ${props => props.theme.fontSizes[3]};
  margin-top: 10px;
  margin-bottom: 50px;

  @media screen and (max-width: 650px) {
    font-size: ${props => props.theme.fontSizes[2]};
    margin-bottom: 30px;
  }
`;

export default () => (
  <Layout title="About">
    <Container>
      <h1>Electro Mechanical Enterprises</h1>
      <p>
        We have established ourselves as one of the suppliers and service
        providers of{" "}
        <strong>
          Innovative Scientific/Industrial Products, Instruments, Apparatus and
          Systems
        </strong>
        .
      </p>
      <p>
        Under the noble guidance of our mentor,{" "}
        <strong>Mr. Vikas Bhandari</strong>, we have been able to achieve a huge
        and reputed client-base across the country. His rich experience of this
        domain has helped us in crossing the milestones of success and
        delivering a flawless product range to our clients.
      </p>

      <TableContainer>
        <Table>
          <Row>
            <HeaderCell>Basic Information</HeaderCell>
          </Row>
          <Row>
            <LabelCell>Nature of Business</LabelCell>
            <InfoCell>Manufacturer</InfoCell>
          </Row>
          <Row>
            <LabelCell>Additional Business</LabelCell>
            <InfoCell>
              {/* TODO: make this look better */}
              <ul>
                <li>Trader</li>
                <li>Service Provider</li>
                <li>Importer</li>
                <li>Distributor</li>
                <li>Exporter</li>
                <li>Wholesaler</li>
              </ul>
            </InfoCell>
          </Row>
          <Row>
            <LabelCell>Company CEO</LabelCell>
            <InfoCell>Vikas Bhandari</InfoCell>
          </Row>
          <Row>
            <LabelCell>Registered Address</LabelCell>
            <InfoCell>
              B- 75, Sector- 88 Industrial Area, Phase- 2, Noida- 201 305, Uttar
              Pradesh, India
            </InfoCell>
          </Row>
          <Row>
            <LabelCell>Industry</LabelCell>
            <InfoCell>
              Services, Trading, Importer and Exporter of Industrial Products.
            </InfoCell>
          </Row>
          <Row>
            <LabelCell>Total Number of Employees</LabelCell>
            <InfoCell>Upto 10 People</InfoCell>
          </Row>
          <Row>
            <LabelCell>Year of Establishment</LabelCell>
            <InfoCell>2000</InfoCell>
          </Row>
          <Row>
            <LabelCell>Legal Status of Firm</LabelCell>
            <InfoCell>Individual - Proprietor</InfoCell>
          </Row>
          <Row>
            <LabelCell>Promoter</LabelCell>
            <InfoCell>Mr. Vikas Bhandari</InfoCell>
          </Row>
          <Row>
            <LabelCell>Annual Turnover</LabelCell>
            <InfoCell>Rs. 5 - 10 Crore</InfoCell>
          </Row>

          <Row>
            <HeaderCell>Infrastructure</HeaderCell>
          </Row>
          <Row>
            <LabelCell>Location Type</LabelCell>
            <InfoCell>URBAN</InfoCell>
          </Row>
          <Row>
            <LabelCell>Building Infrastructure</LabelCell>
            <InfoCell>Permanent</InfoCell>
          </Row>
          <Row>
            <LabelCell>Size of Premises</LabelCell>
            <InfoCell>1200 square yards</InfoCell>
          </Row>
          <Row>
            <LabelCell>Space Around</LabelCell>
            <InfoCell>Front porch</InfoCell>
          </Row>

          <Row>
            <HeaderCell>Statutory Profile</HeaderCell>
          </Row>
          <Row>
            <LabelCell>Tan No.</LabelCell>
            <InfoCell>MRTV0*****</InfoCell>
          </Row>
          <Row>
            <LabelCell>Banker</LabelCell>
            <InfoCell>INDIAN OVERSEAS BANK</InfoCell>
          </Row>
          <Row>
            <LabelCell>GST No.</LabelCell>
            <InfoCell>09AFDPB5706L1ZH</InfoCell>
          </Row>
        </Table>
      </TableContainer>
      <h1>Mission</h1>
      <p>
        <strong>
          “Our Mission is to deliver the best of quality products, instruments,
          and test systems at the most economical rates within minimum lead
          times.”
        </strong>
      </p>

      <h1></h1>
    </Container>
  </Layout>
);
