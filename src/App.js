import React from "react";
import CarritoList from "./components/CarritoList";
import CarritoForm from "./components/CarritoForms";

function App() {
  const headerStyle = {
    color: '#4A90E2',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '2.5em',
    marginTop: '20px',
    textShadow: '2px 2px 4px #aaa',
    letterSpacing: '1.5px',
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
