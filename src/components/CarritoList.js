import React, { useState, useEffect } from 'react';
import { Bar } from '@nivo/bar';
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

  const barData = items.map(item => ({
    "timestamp": item.timestamp,
    "temperatura": item.temperatura,
    "temperaturaColor": "hsl(26, 70%, 50%)",
    "distancia": item.distancia,
    "distanciaColor": "hsl(88, 70%, 50%)"
  }));

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
      <div style={{ height: '400px' }}>
        <Bar
          data={barData}
          keys={['temperatura', 'distancia']}
          indexBy="timestamp"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          colors={{ scheme: 'nivo' }}
          borderColor={{ from: 'color', modifiers: [ ['darker', 1.6] ] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'timestamp',
            legendPosition: 'middle',
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'value',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [ ['darker', 1.6] ] }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1
                }
              }
            ]
          }]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </div>
  );
};
  
  
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


export default CarritoList;