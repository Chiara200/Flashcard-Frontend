// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Cursos from "./components/cursos/cursos";
import Forms from "./components/cursos/forms"
import FormsEditar from "./components/cursos/formsEditar"
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Routes /> e <Route /> da nossa Lib de rotas
import { Routes, Route } from 'react-router-dom'

const Main = (props) => (
  <main>
    <Container>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/cursos' element={<Cursos coursesData={props.coursesData}/>}/>
        <Route path='/adicionar' element={<Forms/>}/>
        <Route path='/cursos/editar/:colecaoId' element={<FormsEditar/>}/>
      </Routes>
    </Container>
  </main>  
);

export default Main;