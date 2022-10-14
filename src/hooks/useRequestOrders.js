import { useEffect, useState } from "react";
import axios from "axios";

const useRequestOrders = (initialData, url, checkToRenderOrderProduct) => {
  const [orders, setOrders] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");

    axios
      .get(url, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setOrders(res.data.orderHistory);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [checkToRenderOrderProduct]);

  return [orders, isLoading];
};

export default useRequestOrders;
