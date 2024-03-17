import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/detail";
import Principal from "./components/principal";
import NavBar from "./components/navbar";

const { useEffect, useState } = require("react");

function App() {

  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/sfrancop/parcial-1-programacion-con-tecnologias-web/main/src/data.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setDataApi(data);
      });
  }, []);

 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Principal data={dataApi} />}/>
         <Route path="/perfil" element={<Detail data={dataApi} />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;