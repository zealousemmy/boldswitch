import React, { useEffect, useState } from "react";
import ProductCard from "../productCard";
import { ProductCardList } from "../../styles/productCardList.style";
import AddProduct from "../addProduct";
import getProducts from "../../hooks/getProducts";

const ProductList = () => {
  const [displayAddProduct, setDisplayAddProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredpProducts, setFiteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleDisplayAddProduct = () => {
    setDisplayAddProduct(true);
  };
  const handleHideAddProduct = () => {
    setDisplayAddProduct(true);
  };

  useEffect(() => {
    let currentProduct = getProducts;

    setProducts(currentProduct);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value !== "") {
      const newProduct = products.filter(
        (product) =>
          product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          product.price.toLowerCase().includes(e.target.value.toLowerCase()) ||
          product.category.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setProducts(newProduct);
    } else {
      let products = getProducts();
      setProducts(getProducts);
    }
  };

  console.log(products);
  return (
    <ProductCardList>
      <div className="searchInputContainer">
        <input
          placeholder="filter products"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleDisplayAddProduct}>Add product</button>
      </div>
      {displayAddProduct && (
        <AddProduct addProductCallBack={handleHideAddProduct} />
      )}

      {!displayAddProduct && (
        <>
          {products.length <= 0 ? (
            <div className="cardListContainer">
              <p>No Product</p>
            </div>
          ) : (
            <div className="cardListContainer">
              {products.map((item) => (
                <ProductCard
                  name={item?.name}
                  price={item?.price}
                  category={item?.category}
                  rating={item?.rating}
                />
              ))}
            </div>
          )}
        </>
      )}
    </ProductCardList>
  );
};

export default ProductList;
