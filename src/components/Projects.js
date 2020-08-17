import React from "react";
import { Container } from "react-bootstrap";

import { ProjectsContainer } from "./jsx/Projects";
import { NavContainer } from "./jsx/Navbar";
import { FooterContainer } from "./jsx/Footer";

const projects = () => {
   return (
      <Container fluid>
         <NavContainer />
         <ProjectsContainer />
         <FooterContainer />
      </Container>
   );
};

export default projects;
