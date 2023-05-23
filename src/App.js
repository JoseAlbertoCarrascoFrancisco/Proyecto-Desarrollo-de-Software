import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./Inicio";
import Aguascalientes from "./estados/Aguascalientes";
import BajaCalifornia from "./estados/BajaCalifornia";
import BajaCaliforniaSur from "./estados/BajaCaliforniaSur";
import Campeche from "./estados/Campeche";
import Coahuila from "./estados/Coahuila";
import Colima from "./estados/Colima";
import Chiapas from "./estados/Chiapas";
import Chihuahua from "./estados/Chihuahua";
import DistritoFederal from "./estados/DistritoFederal";
import Durango from "./estados/Durango";
import Guanajuato from "./estados/Guanajuato";
import Guerrero from "./estados/Guerrero";
import Hidalgo from "./estados/Hidalgo";
import Jalisco from "./estados/Jalisco";
import Mexico from "./estados/Mexico";
import Michoacan from "./estados/Michoacan";
import Morelos from "./estados/Morelos";
import Nayarit from "./estados/Nayarit";
import NuevoLeon from "./estados/NuevoLeon";
import Oaxaca from "./estados/Oaxaca";
import Puebla from "./estados/Puebla";
import Queretaro from "./estados/Queretaro";
import QuintanaRoo from "./estados/QuintanaRoo";
import SanLuisPotosi from "./estados/SanLuisPotosi";
import Sinaloa from "./estados/Sinaloa";
import Sonora from "./estados/Sonora";
import Tabasco from "./estados/Tabasco";
import Tamaulipas from "./estados/Tamaulipas";
import Tlaxcala from "./estados/Tlaxcala";
import Veracruz from "./estados/Veracruz";
import Yucatan from "./estados/Yucatan";
import Zacatecas from "./estados/Zacatecas";
import Republica from "./estados/Republica";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/inicio" component={Inicio} />
        <Route path="/estados/aguascalientes" component={Aguascalientes} />
        <Route path="/estados/bajacalifornia" component={BajaCalifornia} />
        <Route
          path="/estados/bajacaliforniasur"
          component={BajaCaliforniaSur}
        />
        <Route path="/estados/campeche" component={Campeche} />
        <Route path="/estados/coahuila" component={Coahuila} />
        <Route path="/estados/colima" component={Colima} />
        <Route path="/estados/chiapas" component={Chiapas} />
        <Route path="/estados/chihuahua" component={Chihuahua} />
        <Route path="/estados/distritofederal" component={DistritoFederal} />
        <Route path="/estados/durango" component={Durango} />
        <Route path="/estados/guanajuato" component={Guanajuato} />
        <Route path="/estados/guerrero" component={Guerrero} />
        <Route path="/estados/hidalgo" component={Hidalgo} />
        <Route path="/estados/jalisco" component={Jalisco} />
        <Route path="/estados/mexico" component={Mexico} />
        <Route path="/estados/michoacan" component={Michoacan} />
        <Route path="/estados/morelos" component={Morelos} />
        <Route path="/estados/nayarit" component={Nayarit} />
        <Route path="/estados/nuevoleon" component={NuevoLeon} />
        <Route path="/estados/oaxaca" component={Oaxaca} />
        <Route path="/estados/puebla" component={Puebla} />
        <Route path="/estados/queretaro" component={Queretaro} />
        <Route path="/estados/quintanaroo" component={QuintanaRoo} />
        <Route path="/estados/sanluispotosi" component={SanLuisPotosi} />
        <Route path="/estados/sinaloa" component={Sinaloa} />
        <Route path="/estados/sonora" component={Sonora} />
        <Route path="/estados/tabasco" component={Tabasco} />
        <Route path="/estados/tamaulipas" component={Tamaulipas} />
        <Route path="/estados/tlaxcala" component={Tlaxcala} />
        <Route path="/estados/veracruz" component={Veracruz} />
        <Route path="/estados/yucatan" component={Yucatan} />
        <Route path="/estados/zacatecas" component={Zacatecas} />
        <Route path="/estados/republicamexicana" component={Republica} />
      </Switch>
    </Router>
  );
}

export default App;
