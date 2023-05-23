import React from "react";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
import "./boton.css";

const DurangoChart = ({ data }) => {
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
          title: "Durango",
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
        <Link to="/estados/distritofederal" className="button">
          Distrito Federal
        </Link>
        <Link to="/Inicio" className="button">
          Inicio
        </Link>
        <Link to="/estados/guanajuato" className="button">
          Guanajuato
        </Link>
      </div>
    </div>
  );
};

export default DurangoChart;
