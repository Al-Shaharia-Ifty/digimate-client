import { useEffect, useState } from "react";

const useProductDetails = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://vast-peak-81199.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return [product];
};

export default useProductDetails;
