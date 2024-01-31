import React from "react";
import { TfiBarChart, TfiShield, TfiCup } from "react-icons/tfi";
import TestiCard from "./TestiCard";
import { Row, Col } from "react-bootstrap";

function Testimonials() {
  return (
    <div>
      {/* <Row className='testi-card-row'>
            <Col xs={8} sm={6} md={4}>
            <TestiCard/>
            </Col>
            <Col xs={8} sm={6} md={4}>
            <TestiCard/>
            </Col>
            <Col xs={8} sm={6} md={4}>
            <TestiCard/>
            </Col>
        </Row> */}
      <div className="promo-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className="promo-section-text" id="services">
                <div className="product-heading">
                  <h1>Choose Us</h1>
                </div>
                <div className="promo-heading">
                  <h2>Why your business need Us ?</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="promo-cards">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="promo-card-body">
                  <div className="promo-card-inner">
                    <div className="promo-card-icon">
                      <TfiBarChart className="bar-icon" />
                    </div>
                    <div className="promo-card-tittle">
                      <h5>Permanent Customer</h5>
                    </div>
                    <div className="promo-card-desc">
                      <p>
                        we provides the product with best in quality 
                        that satisfies the Ccustomer with result.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="promo-card-body">
                  <div className="promo-card-inner">
                    <div className="promo-card-icon">
                      <TfiShield className="bar-icon" />
                    </div>
                    <div className="promo-card-tittle">
                      <h5>Customer Assurance</h5>
                    </div>
                    <div className="promo-card-desc">
                      <p>
                       we provides the best after sales service and assistance
                       that incresed the trust of our customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="promo-card-body">
                  <div className="promo-card-inner">
                    <div className="promo-card-icon">
                      <TfiCup className="bar-icon" />
                    </div>
                    <div className="promo-card-tittle">
                      <h5>Growth guaranteed</h5>
                    </div>
                    <div className="promo-card-desc">
                      <p>
                        with our best in quality products and support 
                        your business will grow exponentially.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
