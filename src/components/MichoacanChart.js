import React from "react";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
import "./boton.css";

const MichoacanChart = ({ data }) => {
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
          title: "Michoacan",
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
        <Link to="/estados/mexico" className="button">
          México
        </Link>
        <Link to="/Inicio" className="button">
          México
        </Link>
        <Link to="/estados/morelos" className="button">
          Morelos
          </Link>
      </div>
    </div>
  );
};


export default MichoacanChart;
