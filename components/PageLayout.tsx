import Container from "react-bootstrap/Container";
import CustomNavbar from "./CustomNavbar";

const PageLayout = ({ children, className = "" }) => {
  return (
    <Container>
      <CustomNavbar />
      <div className={`page-wrapper ${className}`}>{children}</div>
      <footer className="page-footer">
        <div>
          <a href="#">courses</a>
          {" | "}
          <a href="#">github</a>
          {" | "}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
  );
};

export default PageLayout;
