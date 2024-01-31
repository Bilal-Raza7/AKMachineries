import React from "react";
import "./products.css";
import { IoIosCall } from "react-icons/io";
import { Button, Card } from "react-bootstrap";

function ProdCard({ img, tittle }) {
  // const DescriptionLimit = (text, limit) => {
  //   if (text.length > limit) {
  //     return text.substring(0, limit) + "...";
  //   } else {
  //     return text;
  //   }
  // };
  return (
    <div>
      <div className="outer-card">
        <Card className="prod-card-outer">
          <Card.Img className="prod-card-img-outer" variant="top" src={img} />
          <Card.Body>
            <Card.Title className="prod-card-tittle">{tittle}</Card.Title>
            <Card.Text className="prod-card-text">
              "AK Machineries provied versatile machines and tools for reliable performance.
              Our selection ensures efficiency, quality, and versatility,
              catering to various tasks and projects."
            </Card.Text>
            <Button className="prod-card-btn">
              <a className="call" href="tel:+918601951333">
                Call Now <IoIosCall className="prod-card-btn-icon" />
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProdCard;
