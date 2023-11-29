import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";

const CarritoForm = () => {
  const [temperatura, setTemperatura] = useState("");
  const [distancia, setDistancia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza la solicitud POST a tu función Lambda
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://sx2rnj3fjh.execute-api.us-east-1.amazonaws.com/atapaConexionAPIcarrito/lambda_handler",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            temperatura: parseFloat(temperatura),
            distancia: parseFloat(distancia),
          }),
        }
      );
      const data = await response.json();
      console.log("Registro guardado correctamente:", data);
      setTemperatura("");
      setDistancia("");
    } catch (error) {
      console.error("Error al guardar el registro:", error);
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4">Formulario de carrito</Typography>
        <TextField
          label="Temperatura"
          variant="outlined"
          value={temperatura}
          onChange={(e) => setTemperatura(e.target.value)}
        />
        <TextField
          label="Distancia"
          variant="outlined"
          value={distancia}
          onChange={(e) => setDistancia(e.target.value)}
        />
        <Button onClick={handleSubmit} variant="contained">
          Guardar registro
        </Button>
      </Box>
    </div>
  );
};

export default CarritoForm;
