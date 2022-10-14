export const removeProductLocalStorage = (productName) => {
    const localStorageProducts = JSON.parse(localStorage.getItem("products"));
  
    const arrayProductRemoved = localStorageProducts.filter((product) => {
      return productName !== product.name;
    });
  
    localStorage.setItem("products", JSON.stringify(arrayProductRemoved));
  };