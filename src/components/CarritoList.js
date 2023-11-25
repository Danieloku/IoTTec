import React, { useState, useEffect } from 'react';
import './CarritoList.css'; 

const CarritoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Realiza la solicitud GET a tu función Lambda
    fetch('https://t7pqhkxfhd.execute-api.us-east-1.amazonaws.com/etapaConexionAPIcarrito/lamda_handler_kawasaki', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Lista de Elementos del Carrito</h1>
      <ul className="list">
        {items.map((item, index) => (
          <li className="item" key={index}>
            <span className="item-details">Temperatura: {item.temperatura}, Distancia: {item.distancia}, Timestamp: {item.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default CarritoList;