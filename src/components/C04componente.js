import React, {useState, Fragment} from 'react';

const Contador3 = () => {
    const [valor, setValor] = useState(0);
    const [numero, setNumero] = useState(0);

    const IncrementoDos = () => {
        setNumero(numero+1);
        console.log("Mensaje de contador");
    }

    return (
        <Fragment>
            <button onClick={()=>setValor(valor+1)}>Aumentar</button>
            <span>Incremento de contador: {valor}</span>
            <hr/>
            <button onClick={IncrementoDos}>Aumentar</button>
            <span>Incremento de contador: {numero}</span>
        </Fragment>
    );
}

export default Contador3;