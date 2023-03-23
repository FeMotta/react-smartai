import React from 'react';
import './Seletor.scss';

function Seletor(props) {
  const { id, value, options, onChange } = props;

  return (
    <div className="form-group">
      <select
        id={id}
        className="form-select"
        value={value}
        onChange={onChange}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Seletor;
