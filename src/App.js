import React from "react";
import CarritoList from "./components/CarritoList";
import CarritoForm from "./components/CarritoForms";

function App() {
  const headerStyle = {
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontSize: '2em',
    marginTop: '20px',
    letterSpacing: '1px',
  };

  return (
    <div>
      <h1 style={headerStyle}>Aplicación del carrito en cloud, equipo Kawasaki</h1>     
      <CarritoList/>
      <CarritoForm/>
    </div>
  );

}

export default App
