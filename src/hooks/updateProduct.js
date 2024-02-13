function editProduct(productDetails) {
  const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
  console.log(productDetails?.productId);

  const productIndex = existingProducts.findIndex(
    (product) => product.id === productDetails.productId
  );

  if (productIndex !== -1) {
    existingProducts[productIndex].name = productDetails.name;
    existingProducts[productIndex].price = productDetails.price;
    existingProducts[productIndex].category = productDetails.category;
    existingProducts[productIndex].rating = productDetails.rating;

    existingProducts.splice(productIndex, 1, existingProducts[productIndex]);

    localStorage.setItem("products", JSON.stringify(existingProducts));

    window.location.reload();
    return; // Return the edited product
  } else {
    console.log("nil");
    return null; // If product not found, return null
  }
}

export default editProduct;
