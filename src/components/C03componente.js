import React, {Fragment, useState} from 'react';

const Contador2 = () => {
    const [numero, setNumero]= useState(0);
    const aumentar = () => {
        console.log("Hacer click");
        setNumero(numero+1)
    }
    return (
        <Fragment>
            <h3>Mi segundo componente: {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    )
}

export default Contador2;