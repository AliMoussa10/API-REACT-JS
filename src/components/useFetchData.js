import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [data, setData] = useState({});
  const fetchData = () => {
    return axios.get("https://dummyjson.com/products?limit=10&skip=5")
    .then((response) => setData(response.data.products))
    .catch((err)=>{
      setData(null)
    });
  }
  useEffect(() => {
    fetchData();
  }, []);


  return {
    data,
    setData,
  };
};

export default useFetchData;