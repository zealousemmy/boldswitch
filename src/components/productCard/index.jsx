import React from "react";
import { ProductCardStyle } from "../../styles/card.style";

const ProductCard = ({ name, price, rating, category }) => {
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
    </ProductCardStyle>
  );
};

export default ProductCard;
