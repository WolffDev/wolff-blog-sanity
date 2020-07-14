import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PageLayout from "../components/PageLayout";
import AuthorIntro from "../components/AuthorIntro";
import CardListItem from "../components/CardItemList";
import CardItem, { Blog } from "../components/CardItem";

import { getAllBlogs } from "../lib/api";
import { GetStaticProps, NextPage } from "next";

interface Props {
  blogs: Blog[];
}

const Home: NextPage<Props> = ({ blogs }) => (
  <PageLayout>
    <AuthorIntro />
    <hr />
    <pre>{JSON.stringify(blogs, null, 2)}</pre>
    <Row className="mb-5">
      {/* <Col md="10">
        <CardListItem />
      </Col> */}
      {blogs.map((blog) => (
        <Col key={blog.slug} md="4">
          <CardItem blog={blog} />
        </Col>
      ))}
    </Row>
  </PageLayout>
);

export default Home;

// This function is called during build time and provide props to the page
export const getStaticProps: GetStaticProps = async (context) => {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
};
