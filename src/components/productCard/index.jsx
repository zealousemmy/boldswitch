import React from "react";
import { ProductCardStyle } from "../../styles/card.style";

const ProductCard = ({
  name,
  price,
  rating,
  category,
  deleteProduct,
  editProduct,
}) => {
  return (
    <ProductCardStyle>
      <h1>Name: {name}</h1>
      <h4>Price : ${price}</h4>
      <p>
        <span>Category: </span>
        {category}
      </p>
      <p>
        <span>Rating : </span>
        {rating}
      </p>
      <div>
        <button onClick={editProduct}>edit</button>
        <button onClick={deleteProduct} className="delete">
          Delete
        </button>
      </div>
    </ProductCardStyle>
  );
};

export default ProductCard;
