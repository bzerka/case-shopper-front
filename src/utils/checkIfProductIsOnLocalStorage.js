export const checkIfProductIsOnLocalStorage = (
  productName,
  localStorageArray
) => {
  for (let i = 0; i < localStorageArray.length; i++) {
    if (localStorageArray[i].name === productName) {
      return true;
    }
  }
};
