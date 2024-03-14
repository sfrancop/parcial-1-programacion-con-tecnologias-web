import Item from "./item";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Formulario from "./formulario";

function Principal(props) {

 return (
   <div className="container">
     <h2 className="mt-2">Listado de items</h2>
     <hr></hr>
     <Row>
       {props.data.map((item) => (
         <Col key={item.id}>
           <Item objeto={item}/>
         </Col>
       ))}
     </Row>
     <Formulario/>
   </div>
 );
}

export default Principal;