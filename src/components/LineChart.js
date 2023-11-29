import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChartComponent({ chartTitle, dataType }) {
  const [lineChartData, setLineChartData] = useState([]);

  useEffect(() => {
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
        { method: "GET" }
      );
      const data = await response.json();
      setLineChartData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatTime = (dateTime) =>
    [dateTime.getMinutes(), dateTime.getSeconds()]
      .map((num) => num.toString().padStart(2, "0"))
      .join(":");

  const labelsArray = lineChartData.map((obj) =>
    formatTime(new Date(obj.tiempo))
  );
  const dataArray = lineChartData.map((obj) =>
    dataType === "temperatura" ? obj.temperatura : obj.distancia
  );

  const arrayDefined = labelsArray?.slice(0, 5).reverse();

  const Arraydata = {
    labels: arrayDefined,
    datasets: [
      {
        label: "Conjunto datos",
        data: dataArray.slice(0, 5).reverse(),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const templateData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: Array.from({ length: 7 }, () =>
          faker.number.int({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Line
      options={{
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: chartTitle },
        },
      }}
      data={arrayDefined.length ? Arraydata : templateData}
    />
  );
}
