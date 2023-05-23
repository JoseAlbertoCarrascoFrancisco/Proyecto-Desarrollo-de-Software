import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">
        Eficiencia terminal en educación media superior (Porcentaje de alumnos)
      </h1>
      <div className="select-container">
      <select
        value={selectedState}
        onChange={handleStateChange}
        className="select"
      >
        <option value="">Selecciona un estado</option>
        <option value="republicamexicana">República Mexicana</option>
        <option value="aguascalientes">Aguascalientes</option>
        <option value="bajacalifornia">Baja California</option>
        <option value="bajacaliforniasur">Baja California Sur</option>
        <option value="campeche">Campeche</option>
        <option value="coahuila">Coahuila de Zaragoza</option>
        <option value="colima">Colima</option>
        <option value="chiapas">Chiapas</option>
        <option value="chihuahua">Chihuahua</option>
        <option value="distritofederal">Ciudad de México</option>
        <option value="durango">Durango</option>
        <option value="guanajuato">Guanajuato</option>
        <option value="guerrero">Guerrero</option>
        <option value="hidalgo">Hidalgo</option>
        <option value="jalisco">Jalisco</option>
        <option value="mexico">Estado de México</option>
        <option value="michoacan">Michoacán de Ocampo</option>
        <option value="morelos">Morelos</option>
        <option value="nayarit">Nayarit</option>
        <option value="nuevoleon">Nuevo León</option>
        <option value="oaxaca">Oaxaca</option>
        <option value="puebla">Puebla</option>
        <option value="queretaro">Querétaro de Arteaga</option>
        <option value="quintanaroo">Quintana Roo</option>
        <option value="sanluispotosi">San Luis Potosí</option>
        <option value="sinaloa">Sinaloa</option>
        <option value="sonora">Sonora</option>
        <option value="tabasco">Tabasco</option>
        <option value="tamaulipas">Tamaulipas</option>
        <option value="tlaxcala">Tlaxcala</option>
        <option value="veracruz">Veracruz de Ignacio de la Llave</option>
        <option value="yucatan">Yucatán</option>
        <option value="zacatecas">Zacatecas</option>
      </select>
        <Link to={`/estados/${selectedState}`} className="button">
          Ver Estado
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
