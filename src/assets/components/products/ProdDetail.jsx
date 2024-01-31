import React from "react";
import { PRODUCTS } from "../prodData";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoIosCall } from "react-icons/io";
function ProdDetail() {
  const id = useParams();
  //  console.log(id.id,"idddddddd")
  const Product = PRODUCTS[id.id - 1];
  // console.log((PRODUCTS[id.id]),"product");
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-6">
            <img
              src={Product.image}
              className="object-fit-contain w-100"
              alt=""
            />
          </div>
          
          <div className="col-6 my-3">
            <br />
            <h2 className="fs-1 my-3">{Product.name}</h2>
            <h5 className="fs-6 my-3 text-secondary">{Product.category}</h5>
            <p>{Product.description}</p>
            <br />
            <Button className="prod-card-btn ">
              <a className="call text-dark fs-5" href="tel:+918601951333">
                Call Now <IoIosCall className="prod-card-btn-icon fs-5 text-dark" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProdDetail;
