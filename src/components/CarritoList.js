// import React, { useState, useEffect } from 'react';
// import './CarritoList.css'; 

// const CarritoList = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // Realiza la solicitud GET a tu función Lambda
//     fetch('https://t7pqhkxfhd.execute-api.us-east-1.amazonaws.com/etapaConexionAPIcarrito/lamda_handler_kawasaki', {
//       method: 'GET',
//     })
//       .then((response) => response.json())
//       .then((data) => setItems(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);



  
//   return (
//     <div className="container">
//       <h1 className="title">Lista de Elementos del Carrito</h1>
//       <ul className="list">
//         {items.map((item, index) => (
//           <li className="item" key={index}>
//             <span className="item-details">Temperatura: {item.temperatura}, Distancia: {item.distancia}, Timestamp: {item.timestamp}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// export default CarritoList;

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './CarritoList.css';

const CarritoList = () => {
  const [items, setItems] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch('https://t7pqhkxfhd.execute-api.us-east-1.amazonaws.com/etapaConexionAPIcarrito/lamda_handler_kawasaki', {
      method: 'GET', 
    })
    .then((response) => response.json())
    .then((data) => {
      setItems(data);
      prepareChartData(data);
    })
    .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

  const prepareChartData = (data) => {
    const timestamps = data.map(item => item.timestamp);
    const temperatures = data.map(item => item.temperatura);
    const distances = data.map(item => item.distancia);

    setChartData({
      labels: timestamps,
      datasets: [
        {
          label: 'Temperature',
          data: temperatures,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
        {
          label: 'Distance',
          data: distances,
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
        }
      ]
    });
  };

  return (
    <div className="container">
      <h1 className="title">Lista de Elementos del Carrito</h1>
      <Line data={chartData} />
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
