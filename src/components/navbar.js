import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
 return (
   <>
     <Navbar style={{marginBottom: "30px"}} bg="dark" variant="dark">
       <Container>
         <Navbar.Brand href="/">Webstagram</Navbar.Brand>
       </Container>
     </Navbar>
   </>
 );
}

export default NavBar;