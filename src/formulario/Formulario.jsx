import React, { useState } from 'react';
import "./Formulario.scss";

const Formulario = () => {
  const [materia, setMateria] = useState('matematica');
  const [nivel, setNivel] = useState('basico');

  const handleMateriaChange = (event) => {
    setMateria(event.target.value);
  };

  const handleNivelChange = (event) => {
    setNivel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Materia selecionada:', materia);
    console.log('Nivel selecionado:', nivel);

  };

  return (
    <div className="form-container">
      <form className="edu-form" onSubmit={handleSubmit}>
        <h2 className="form-title">    SmartAI    </h2>
        <div className="form-group">
          <select
            name="materia"
            id="materia-select"
            className="form-select"
            value={materia}
            onChange={handleMateriaChange}
          >
            <option value="matematica">Matemática</option>
            <option value="portugues">Português</option>
            <option value="ciencias">Ciências</option>
          </select>
        </div>
        <div className="form-group">
          <select
            name="nivel"
            id="nivel-select"
            className="form-select"
            value={nivel}
            onChange={handleNivelChange}
          >
            <option value="basico">Básico</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
        </div>
        <button type="submit" className="form-button">
          Confirmar
        </button>
      </form>
    </div>
  );
};


export default Formulario;