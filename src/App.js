import {BrowserRouter,Route,Routes, useLocation} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Header from "./components/Header";
import Error from "./components/Error";
import Login from "./components/Login";
import Produto from "./components/Produto/index";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sobre" element={<Sobre />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/produto/:id/*" element={<Produto />}/>

      <Route path="*" element={<Error />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
