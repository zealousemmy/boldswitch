import React, { useState } from "react";
import { AddProductContainer } from "../../styles/addProduct.style";
import addProduct from "../../hooks/addProduct";

const AddProduct = ({ addProductCallBack }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log(product, "product");
  };

  return (
    <AddProductContainer>
      <h1>Add New Product</h1>
      <input placeholder="product name" name="name" onChange={handleChange} />
      <input placeholder="product price" name="price" onChange={handleChange} />
      <input
        placeholder="product category"
        name="category"
        onChange={handleChange}
      />
      <input
        placeholder="product rating"
        name="rating"
        onChange={handleChange}
      />
      <button onClick={() => addProduct(product)}>add product</button>
    </AddProductContainer>
  );
};

export default AddProduct;
