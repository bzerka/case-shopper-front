export const productQuantityOrdered = (productName, localStorageArray) => {
  var qtd = 0;
  for (var i = 0; i < localStorageArray.length; i++) {
    if (localStorageArray[i].name === productName) {
      qtd = localStorageArray[i].qty;
    }
  }
  return qtd;
};
