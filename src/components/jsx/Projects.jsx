import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Container, Jumbotron } from "react-bootstrap";

export function ProjectsContainer() {
   const [projectsData, setProjectsData] = useState([]);

   const requestHandel = useCallback((e) => {
      axios
         .get("https://api.github.com/users/dibakarmitra/repos?sort=created")
         .then((response) => {
            // handle success
            // console.log(response.data.slice(0, 4));
            return setProjectsData(response.data);
         })
         .catch((error) => {
            // handle error
            return console.error(error.message);
         })
         .finally(() => {
            // always executed
         });
   }, []);

   useEffect(() => {
      requestHandel();
   }, [requestHandel]);

   console.log(projectsData);

   return (
      <Jumbotron id="jt-100" className="text-center aboutme" fluid>
         <Container className="project-max">
            <h2 className="my-project text-light">My Projects</h2>
            {projectsData.map((project) => {
               return (
                  <div
                     key={project.id}
                     className="justify-content-md-center my-3 p-3 bg-white rounded shadow-sm"
                  >
                     <div className="media text-muted pt-3">
                        <svg
                           className="bd-placeholder-img mr-2 rounded"
                           width="32"
                           height="32"
                           xmlns="http://www.w3.org/2000/svg"
                           preserveAspectRatio="xMidYMid slice"
                           focusable="false"
                           role="img"
                           aria-label="Placeholder: 32x32"
                        >
                           <title>Placeholder</title>
                           <rect
                              width="100%"
                              height="100%"
                              fill="#007bff"
                           ></rect>
                           <text x="50%" y="50%" fill="#007bff" dy=".3em">
                              32x32
                           </text>
                        </svg>
                        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray text-left">
                           <strong className="d-block text-gray-dark">
                              <a href={project.html_url} target="_blank">
                                 {project.name}
                              </a>
                           </strong>
                           {project.description}
                        </p>
                     </div>
                  </div>
               );
            })}
         </Container>
      </Jumbotron>
   );
}
