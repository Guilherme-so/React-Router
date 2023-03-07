import React from "react";
import { Link } from "react-router-dom";

function Produtos() {
  return (
    <div>
      <h1>Produtos</h1>
      <div className="produto">
        <Link to="/produtos/notebook">Notebook</Link>
        <Link to="/produtos/celular">Celular</Link>
      </div>
    </div>
  );
}

export default Produtos;
