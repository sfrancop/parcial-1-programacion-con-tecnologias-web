import { useParams } from "react-router-dom";
const { useEffect, useState } = require("react");

export default function Detail(props) {
   const params = useParams();
   const [item, setItem] = useState({});

   const fetchData = async () => {
      for (const currentItem of props.data) {
         if (currentItem.id === Number(params.itemId)) {
            setItem(currentItem)
         }
      }
   }

   useEffect(() => {
      fetchData();
   });

   return (
      <div>
         <h1>{item.nombre}</h1>
         <img src={item.foto} alt="Foto del item" style={{ "height": "400px" }}></img>
         <h2>{item.raza}</h2>
      </div>
   );
}