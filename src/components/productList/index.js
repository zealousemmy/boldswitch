import React, { useEffect, useState } from "react";
import ProductCard from "../productCard";
import { ProductCardList } from "../../styles/productCardList.style";
import AddProduct from "../addProduct";
import getProducts from "../../hooks/getProducts";
import deleteProduct from "../../hooks/delete";
import EditProduct from "../editProduct";

const ProductList = () => {
  const [displayAddProduct, setDisplayAddProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);
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

    setProducts(getProducts);
  }, []);

  const productIndex = localStorage.getItem("productId");
  console.log(productIndex, "product index");

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

      {!displayAddProduct && !showUpdateProduct && (
        <>
          {products.length <= 0 ? (
            <div className="cardListContainer">
              <p>No Product</p>
            </div>
          ) : (
            <div className="cardListContainer">
              {products.map((item, index) => (
                <ProductCard
                  name={item?.name}
                  price={item?.price}
                  category={item?.category}
                  rating={item?.rating}
                  editProduct={() => {
                    localStorage.setItem("productId", JSON.stringify(item.id));
                    setShowUpdateProduct(true);
                  }}
                  deleteProduct={() => deleteProduct(item?.id)}
                />
              ))}
            </div>
          )}
        </>
      )}
      {showUpdateProduct && <EditProduct />}
    </ProductCardList>
  );
};

export default ProductList;
