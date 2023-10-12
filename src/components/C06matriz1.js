import React,{useState,Fragment} from 'react';

const C06matriz = () => {

    const[lista, setLista]= useState([1,2,3,4,5]);
  return (
    <Fragment>
        <h3>Lectura sin index y sin html</h3>
        {lista.map((item) => item)}
        <br/>

        <h3>Lectura sin index y con html</h3>
        {lista.map((item) => <span> {item} </span>)}
        <br/>

        <h3>Listas con index y sin key</h3>
        {
            lista.map((item,index) =>
                <p>{item}</p>
            )
        }
        <br/>

        <h3>Listas con index y con key</h3>
        {
            lista.map((item,index) =>
                <p key = {item}>
                    {item} - {item}
                </p>

            )
        }
        <br/>
    </Fragment>
  )
}

export default C06matriz;