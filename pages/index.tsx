import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PageLayout from "../components/PageLayout";
import AuthorIntro from "../components/AuthorIntro";
import CardListItem from "../components/CardItemList";
import CardItem from "../components/CardItem";

const Home = () => (
  <PageLayout>
    <AuthorIntro />
    <hr />
    <Row className="mb-5">
      <Col md="10">
        <CardListItem />
      </Col>
      <Col md="4">
        <CardItem />
      </Col>
    </Row>
  </PageLayout>
);

export default Home;
