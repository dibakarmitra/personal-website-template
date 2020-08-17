import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

export function ErrorContainer() {
   return (
      <Jumbotron id="jt-100" className="text-center aboutme" fluid>
         <Container>
            <h2 className="text-light">404 Error</h2>
            <p className="lead  text-light">Page not found.</p>
         </Container>
      </Jumbotron>
   );
}
