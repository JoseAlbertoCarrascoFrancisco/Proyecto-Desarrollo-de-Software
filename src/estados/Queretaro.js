import React, { useEffect, useState } from 'react';
import QueretaroChart from '../components/QueretaroChart';

const Queretaro = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/6200027788/es/22/false/BISE/2.0/aceaebe0-27f3-d791-247f-3e48326dbf3e?type=json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        < QueretaroChart  data={data} />
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Queretaro;
