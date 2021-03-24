import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ titulo, subtitulo}) => {
    return (
        <>
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    titulo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Primera app de React'
}
export default PrimeraApp; 