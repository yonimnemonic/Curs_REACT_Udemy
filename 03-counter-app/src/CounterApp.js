import React, {useState} from 'react'

import propTypes from 'prop-types'

const CounterApp = ( {value = 10})=>{

    //se delcara el hook - UseState()
    const [counter, setCounter] = useState(100); //retorna un arreglo
 
    const handleAdd = ()=>{
        setCounter(counter +1)

    }
    const reset = ()=>{
        setCounter(value)

    }
    const handleSus = ()=>{
        setCounter(counter -1)

    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ reset }>Reset</button>
        <button onClick={ handleSus }>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value : propTypes.number// obliga a obtener un valor number
}

export default CounterApp;

// se puede crear dinamicamente con este comando en VSC rafcp
