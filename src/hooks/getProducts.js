const getProducts = () => {
  const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
  return existingProducts;
};

export default getProducts;
