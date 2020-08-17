import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

import {
   FirstName,
   LastName,
   devDesc,
   ProfileImage,
   Email,
   ResumeLink,
   Hobby,
   leadDesc,
   leadFooter,
   socials,
} from "./data.json";

export function FooterContainer() {
   return (
      <footer className="mt-auto text-center footer b-2 t-2 text-light">
         <Container className="maxme">
            <h1 className="cover-heading">Get In Touch</h1>
            <p className="lead">
               {leadDesc}
               <a href={"mailto:" + Email} className="text-muted text-light">
                  {Email}
               </a>
            </p>
            <p className="lead">
               <a href={"mailto:" + Email} className="btn btn-lg btn-secondary">
                  Mail me!
               </a>
            </p>
         </Container>
         <div className="inner">
            <p>{leadFooter}</p>
            <p>{Hobby}</p>
         </div>
      </footer>
   );
}

export function HomeContainer() {
   return (
      <Jumbotron id="jt-100" className="text-center aboutme" fluid>
         <Container>
            <img
               alt={FirstName + " " + LastName}
               className="profile-img rounded-circle float-lef bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
               width="225"
               height="225"
               src={ProfileImage}
            ></img>
            <h2 className="text-light">I'm {FirstName + " " + LastName}.</h2>
            <p className="lead  text-light">{devDesc}</p>
            <p>
               {socials.map((social) => {
                  return (
                     <a key={social.id} href={social.url}>
                        <i
                           className={"fab " + social.image + " socialicons"}
                        ></i>
                     </a>
                  );
               })}
            </p>
            <a
               className="btn btn-outline-light btn-lg "
               href={ResumeLink}
               role="button"
               aria-label="Learn more about me"
            >
               Resume
            </a>
         </Container>
      </Jumbotron>
   );
}
