import React, { useState } from "react";
import { Pagination } from "antd";
import ProdCard from "../products/ProdCard";
import { PRODUCTS } from "../prodData";
import { Link } from "react-router-dom";

function AllProducts() {
  const onPageChange = (page) => {
    setCurrentPage(page);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const getVisibleProducts = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    // return PRODUCTS.slice(0,6);
    return PRODUCTS.slice(startIndex, endIndex);
  };

  return (
    <>
      <div className="container">
        <div className="product-heading mt-5">
          <h1>All Products</h1>
        </div>
        <div className="row">
          {getVisibleProducts().map((prod) => {
            return (
              <>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <Link to={`/ProdDetails/${prod.id}`}>
                  <ProdCard img={prod.image} tittle={prod.name} desc={prod.description}/>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          pageSize={pageSize}
          total={PRODUCTS.length}
          onChange={onPageChange}
          className="p-3"
        />
      </div>
    </>
  );
}

export default AllProducts;
