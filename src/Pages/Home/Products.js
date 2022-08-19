// import React, { useState } from "react";
import { useEffect, useState } from "react";
import Item from "./Item";

const Products = () => {
  const [items, setItems] = useState([]);
  //   setItems(["hello"]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div className="mx-8 lg:mx-12">
      <h1 className="text-4xl text-center font-bold my-12">Our Products</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {items.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
