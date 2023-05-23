import React, { useEffect, useState } from "react";
import AguascalientesChart from "../components/AguascalientesChart";

const Aguascalientes = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/6200027788/es/01/false/BISE/2.0/aceaebe0-27f3-d791-247f-3e48326dbf3e?type=json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data ? <AguascalientesChart data={data} /> : <p>Cargando datos...</p>}
    </div>
  );
};

export default Aguascalientes;
