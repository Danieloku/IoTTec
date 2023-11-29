import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import { Typography } from "@mui/material";

const CarritoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Realiza la solicitud GET a tu función Lambda
    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://sx2rnj3fjh.execute-api.us-east-1.amazonaws.com/atapaConexionAPIcarrito/lambda_handler",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Typography variant="h4" style={{ margin: 8 }}>
        Lista de elementos del carrito
      </Typography>
      <DataTable dataRows={items} />
    </div>
  );
};

export default CarritoList;
