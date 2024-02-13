const addProduct = (productDetails) => {
  const productId = Date.now().toString();

  const existingProducts = JSON.parse(localStorage.getItem("products")) || [];

  existingProducts.push(productDetails);

  localStorage.setItem("products", JSON.stringify(existingProducts));

  console.log(productDetails, "product details add product");

  window.location.reload();
  return;
};

export default addProduct;
