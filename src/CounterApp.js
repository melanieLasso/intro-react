import React, {useState} from 'react';
// import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
const CounterApp = ({value}) => {
    const [cantidadTotal, setCantidadTotal] = useState(value);
    const handleAdd = () => {
        setCantidadTotal(cantidadTotal+1);
    }

    const handleSubtract = () => {
        setCantidadTotal(cantidadTotal-1);
    }

    const handleReset = () => {
        setCantidadTotal(0);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{cantidadTotal}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleReset}>Resetear</button>
        </>
    )  
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;