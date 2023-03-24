import React from 'react';
import './Input.scss';

function Input(props) {
  const { id, value, onChange, placeholder = "Digite sua resposta aqui" } = props;

  return (
    <div className="form-group">
      <textarea
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        className="answer-input"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
