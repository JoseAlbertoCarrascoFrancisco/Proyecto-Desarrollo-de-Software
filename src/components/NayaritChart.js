import React from "react";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
import "./boton.css";

const NayaritChart = ({ data }) => {
  const labels = data.Series[0].OBSERVATIONS.map(observation => observation.TIME_PERIOD);
  const values = data.Series[0].OBSERVATIONS.map(observation => parseFloat(observation.OBS_VALUE));

  const chartData = [['Año', 'Población'], ...labels.map((label, index) => [label, values[index]])];


  return (
    <div>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={chartData}
        options={{
          title: "Nayarit",
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
        <Link to="/estados/morelos" className="button">
          Morelos
        </Link>
        <Link to="/Inicio" className="button">
          Inicio
        </Link>
        <Link to="/estados/nuevoleon" className="button">
          Nuevo León
        </Link>
      </div>
    </div>
  );
};

export default NayaritChart;
