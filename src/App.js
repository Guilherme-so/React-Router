import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Login from "./components/Login";
import Produtos from "./components/Produtos/index";
import Produto from "./components/Produtos/produto";
import Error from "./components/Error";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/produtos">
            <Route index element={<Produtos />} />
            <Route path=":id/*" element={<Produto />} />
          </Route>

          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
