import React from "react";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
import "./boton.css";

const GuerreroChart = ({ data }) => {
  const labels = data.Series[0].OBSERVATIONS.map(
    (observation) => observation.TIME_PERIOD
  );
  const values = data.Series[0].OBSERVATIONS.map((observation) =>
    parseFloat(observation.OBS_VALUE)
  );

  const chartData = [
    ["Año", "Población"],
    ...labels.map((label, index) => [label, values[index]]),
  ];

  return (
    <div>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={chartData}
        options={{
          title: "Guerrero",
          chartArea: { width: "70%" },
          hAxis: {
            title: "Año",
            minValue: 0,
          },
          vAxis: {
            title: "Porcentaje de Alumnos",
            minValue: 0,
          },
        }}
      />
      <div className="button-container">
        <Link to="/estados/guanajuato" className="button">
          Guanajuato
        </Link>
        <Link to="/Inicio" className="button">
          Inicio
        </Link>
        <Link to="/estados/hidalgo" className="button">
          Hidalgo
        </Link>
      </div>
    </div>
  );
};

export default GuerreroChart;
