import React, { useState } from 'react';
import "./Formulario.scss";
import Botao from '../botao/Botao';
import Seletor from '../seletor/Seletor';

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
        <h2 className="form-title">SmartAI</h2>
        <Seletor
          id="materia-select"
          value={materia}
          options={[
            { label: 'Matemática', value: 'matematica' },
            { label: 'Português', value: 'portugues' },
            { label: 'História', value: 'historia' },
            { label: 'Geografia', value: 'geografia' },
            { label: 'Biologia', value: 'biologia' },
            { label: 'Física', value: 'fisica' },
            { label: 'Química', value: 'quimica' },
          ]}
          onChange={handleMateriaChange}
        />
        <Seletor
          id="nivel-select"
          value={nivel}
          options={[
            { label: 'Básico', value: 'basico' },
            { label: 'Intermediário', value: 'intermediario' },
            { label: 'Avançado', value: 'avancado' },
          ]}
          onChange={handleNivelChange}
        />
        <Botao onClick={handleSubmit}>Confirmar</Botao>
      </form>
    </div>
  );
};

export default Formulario;