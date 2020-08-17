import React from "react";
import { Container } from "react-bootstrap";

import { HomeContainer, FooterContainer } from "./jsx/Home";
import { NavContainer } from "./jsx/Navbar";

const home = () => {
   return (
      <Container fluid>
         <NavContainer />
         <HomeContainer />
         <FooterContainer />
      </Container>
   );
};

export default home;
