import React from "react";

import { leadFooter, Hobby } from "./data.json";

export function FooterContainer() {
   return (
      <footer className="mt-auto text-center footer b-2 t-2 text-light">
         <div className="inner">
            <p>{leadFooter}</p>
            <p>{Hobby}</p>
         </div>
      </footer>
   );
}
