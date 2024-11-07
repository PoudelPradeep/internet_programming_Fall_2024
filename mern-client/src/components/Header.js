import { LinkContainer } from "react-router-bootstrap";
import { Button, Row, Col } from "react-bootstrap";

function Header() {
   return (
      <Row>
         <Col>
            <h1>Message Board</h1>
         </Col>
         <Col>
            <LinkContainer to="/add">
               <Button className="float-end">
                  Add Message
               </Button>
            </LinkContainer>
         </Col>
      </Row>
   );
}

export default Header;