import React from "react";
import { Container } from "react-bootstrap";

import { ErrorContainer } from "./jsx/Error";
import { NavContainer } from "./jsx/Navbar";
import { FooterContainer } from "./jsx/Footer";

const error = () => {
   return (
      <Container fluid>
         <NavContainer />
         <ErrorContainer />
         <FooterContainer />
      </Container>
   );
};

export default error;
