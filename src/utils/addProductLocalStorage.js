export const addProductLocalStorage = (product, qtyOrdered) => {
  if (qtyOrdered > 0) {
    const totalPrice = product.price * qtyOrdered;

    const localStorageProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    localStorageProducts.push({
      name: product.name,
      qty: qtyOrdered,
      totalPrice: totalPrice,
    });

    localStorage.setItem("products", JSON.stringify(localStorageProducts));
  }
};
