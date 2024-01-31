import "./products.css";
import { IoIosCall } from "react-icons/io";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import comp from "../../../images/elgicomp.png";
import washer from "../../../images/everestCW.jpg";
import fogging from "../../../images/fogging.jpg";
// import wrench from "../../../images/impact-wrench.png";
import vacuum from "../../../images/vacuum.png";
import gun1 from "../../../images/gun1.png";
import bc from "../../../images/brush-cutter.jpg";
import weader from "../../../images/kk-weader2.png";
import motor from "../../../images/motor.jpg";
import ProdCard from "./ProdCard";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="Product-outer-container" id="products">
      <div className="product-heading">
        <h1>Our Products</h1>
      </div>
      <h1 className="inner-heading">Products That We Provide</h1>
      <div className="card-outer">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Link to={"/compressor"}>
                <ProdCard img={comp} tittle="AIR COMPRESSORS" />
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Link to={"/washer"}>
                <ProdCard img={washer} tittle="HIGH PRESSURE WASHER" />
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Link to={"/agriculture"}>
                <ProdCard img={weader} tittle="AGRICULTURAL SOLUTION" />
              </Link>
            </Col>
          </Row>
          {/* <Row>
            <Col xs={12} sm={6} md={4}>
              <ProdCard img={motor} tittle="Motor" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <ProdCard img={bc} tittle="Brush Cutter" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <ProdCard img={weader} tittle="Power Weeder" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <ProdCard img={wrench} tittle="Impact Wrench" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <ProdCard img={vacuum} tittle="Industrial Vacuum Cleaner" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <ProdCard img={gun1} tittle="Painting Guns" />
            </Col>
          </Row> */}
        </Container>
      </div>
      <div className="test-card"></div>
    </div>
  );
}

export default Products;
