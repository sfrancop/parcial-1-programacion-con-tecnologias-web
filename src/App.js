import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/detail";
import Principal from "./components/principal";
import NavBar from "./components/navbar";

function App() {

 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Principal />}/>
         <Route path="/perfil" element={<Detail/>} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;