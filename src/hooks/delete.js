function deleteProduct(productId) {
  console.log(productId, "product id");
  const existingProducts = JSON.parse(localStorage.getItem("products")) || [];

  const productIndex = existingProducts.findIndex(
    (product) => product.id === productId
  );

  if (productIndex !== -1) {
    existingProducts.splice(productIndex, 1);

    localStorage.setItem("products", JSON.stringify(existingProducts));

    return true;
  } else {
    return false;
  }
}

export default deleteProduct;
