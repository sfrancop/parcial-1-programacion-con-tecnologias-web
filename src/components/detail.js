import { useParams } from "react-router-dom";
const { useEffect, useState } = require("react");

export default function Detail(props) {
   const randomDecimal = Math.random();
   const randomNumber = Math.round(randomDecimal);
   const selection = randomNumber;



   useEffect(() => {
   });

   return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}>
         <div style={{backgroundColor: "rgb(56, 56, 56)", width: "400px", padding: "30px", transform: "translateY(-60px)", display: "flex", flexDirection: "column"}}>
            <img className="mx-auto" style={{width: "100px", borderRadius: "50%", marginBottom: "20px"}} src={props.data[0].picture}/>
            <p style={{color: "white"}}><b>Nombre de usuario</b></p>
            {selection === 0 ? <p style={{color: "white"}}> {props.data[0].username} </p> : <input type="text" style={{marginBottom: "20px"}} placeholder={props.data[0].username}/>}
            <p style={{color: "white"}}><b>Nombre completo</b></p>
            {selection === 0 ? <p style={{color: "white"}}> {props.data[0].fisrstName} {props.data[0].lastName} </p> : <input type="text" style={{marginBottom: "20px"}} placeholder={props.data[0].fisrstName + " " + props.data[0].lastName}/>}
            <p style={{color: "white"}}><b>Descripción del perfil</b></p>
            {selection === 0 ? <p style={{color: "white"}}> {props.data[0].description} </p> : <input type="text" style={{marginBottom: "20px"}} placeholder={props.data[0].description}/>}
            <p style={{color: "white"}}><b>URL de pagina personal</b></p>
            {selection === 0 ? <p style={{color: "white"}}> {props.data[0].link} </p> : <input type="text" style={{marginBottom: "20px"}} placeholder={props.data[0].link}/>}
            {selection === 1 && <button>Guardar cambios</button>}
         </div>
      </div>
   );
}