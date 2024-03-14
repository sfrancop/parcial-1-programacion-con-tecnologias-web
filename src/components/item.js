import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item(props) {
 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.objeto.foto}
       alt={props.objeto.descripcion}
     />
     <Card.Body>
       <Card.Title>
         <Link to={"/" + props.objeto.id}>
           {props.objeto.nombre}
         </Link>
       </Card.Title>
       <Card.Text>{props.objeto.descripcion}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Item;