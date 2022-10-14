import { useEffect, useState } from "react";
import axios from "axios";

const useRequestProducts = (initialData, url) => {
  const [products, setProducts] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return [products, isLoading];
};

export default useRequestProducts;
