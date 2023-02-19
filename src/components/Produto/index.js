import React from "react";
import {NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import Descricao from "./descricao";
import Feedback from "./feedback";
import Personalisado from "./personalisado";

function Produto() {
  const params = useParams();
  console.log(params)
  // const location = useLocation()
  // const search = new URLSearchParams(location.search)
  // console.log(search.get('valor'))

  return (
    <div>
      <h1>{params.id}</h1>

      <div className="produto">
        <NavLink to='' end>Descricao</NavLink>
        <NavLink to='feedback'>Feedback</NavLink>
        <NavLink to='personalisado'>Produto Personalisado</NavLink>
      </div>

      <Routes>
        <Route path="/" element={ <Descricao />} /> 
        <Route path="/feedback" element={ <Feedback />} /> 
        <Route path="/personalisado" element={ <Personalisado />} /> 
      </Routes>
    </div>
  );
}

export default Produto;
