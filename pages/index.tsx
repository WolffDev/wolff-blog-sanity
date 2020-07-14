import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PageLayout from "../components/PageLayout";
import AuthorIntro from "../components/AuthorIntro";
import CardListItem from "../components/CardItemList";
import CardItem from "../components/CardItem";

import { getAllBlogs } from "../lib/api";

const Home = ({ blogs }) => (
  <PageLayout>
    <AuthorIntro />
    <hr />
    {JSON.stringify(blogs)}
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

// This function is called during build time and provide props to the page
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
