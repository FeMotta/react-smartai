import React from 'react';
import './Botao.scss';

function Botao(props) {
  return (
    <button className="form-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Botao;