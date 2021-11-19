// Importando o React
import React from "react";
import { NavLink } from 'react-router-dom';
import Cards from "./cards";

const Contact = (props) => {
  return (
    <div>
      <div class="row">
        <div class="rowc">
          <h5>Cursos</h5>
        </div>
          {props.coursesData.map(course => (
            <Cards 
              course={course} />
          ))}
        </div>
        <NavLink to="/adicionar"><a class="grey waves-effect waves-light btn">Cadastrar</a></NavLink>
    </div>
  );
};

export default Contact;