import React from 'react';
import './Comentario.css'

const Comentario = props => {
    return (
        <div className='Comentario'>
            <h3>{props.nome}</h3>
            <h3>{props.email}</h3>
            <h3>{props.children}</h3>
            <h3>{props.data.toString()}</h3>
        </div>
    )
};

export default Comentario;