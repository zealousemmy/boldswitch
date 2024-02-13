import React, { useState } from "react";
import { AddProductContainer } from "../../styles/addProduct.style";
import editProduct from "../../hooks/updateProduct";

const EditProduct = ({ addProductCallBack }) => {
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

  const productIndex = localStorage.getItem("productId");

  return (
    <AddProductContainer>
      <h1>Edit Product</h1>
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
      <button
        onClick={() => editProduct({ ...product, productId: productIndex })}
      >
        update product
      </button>
    </AddProductContainer>
  );
};

export default EditProduct;
