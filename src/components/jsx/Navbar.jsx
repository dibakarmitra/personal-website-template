import React from "react";

import { Home, navLinks } from "./data.json";

export function NavContainer() {
   return (
      <div className="maxme d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 navbar-expand-md fixed-top navbar-transparent">
         <h5 className="my-0 mr-md-auto font-weight-normal">
            <a className="p-2 text-light text-uppercase nounderline" href="/">
               <strong className="">{Home}</strong>
            </a>
         </h5>
         <nav className="my-2 my-md-0 mr-md-3 nav nav-masthead justify-content-center">
            {navLinks.map((link) => {
               return (
                  <a
                     key={link.id}
                     className="p-2 text-light nav-link"
                     href={link.url}
                  >
                     {link.title}
                  </a>
               );
            })}
         </nav>
      </div>
   );
}
