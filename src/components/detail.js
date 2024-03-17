import { useParams } from "react-router-dom";
const { useEffect, useState } = require("react");

export default function Detail(props) {
   const randomDecimal = Math.random();
   const randomNumber = Math.round(randomDecimal);
   const election = randomNumber;



   useEffect(() => {
   });

   return (
      <div>
         <img src={props.data[0].image}/>
      </div>
   );
}