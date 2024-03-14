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
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
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
         <Route path="/:itemId" element={<Detail data={dataApi} />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;