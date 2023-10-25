import logo from './logo.svg';
//import './App.css';
import { C01componente } from './components/C01componente';
import { useState } from 'react';
import AppForm from './pagina/AppForm';

function App() {

  ///// READ - LECTURA - fnRead ////
  const [docBD, setDocDBD] = useState({});
  const fnRead = () => {
  }

  ///// DELETE - ELIMINAR - fnDeleted  ///
  const [idActual, setIdActual] = useState("");
  const fnDeleted = (xId) => {
  }

  return (
    <div style={{display:"grid", placeItems:"center", width:"350px", background:"#A4528D", padding:"20px"}}>
    <AppForm {...{idActual, setIdActual, fnRead}}/>
    <p>Nº 1 Diana Davalos          x    A</p>
    <p>Nº 2 Carlos Montenegro           x    A</p>
  </div>
    
  
  );
}

export default App;
