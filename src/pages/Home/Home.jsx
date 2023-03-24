import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Botao from '../../components/Botao/Botao';
import Seletor from '../../components/Seletor/Seletor';
import "./Home.scss";

const Home = () => {
  const [materia, setMateria] = useState('matematica');
  const [nivel, setNivel] = useState('basico');
  const navigate = useNavigate();

  const handleMateriaChange = (event) => { 
    setMateria(event.target.value);
  };

  const handleNivelChange = (event) => {
    setNivel(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('materia', materia);
    localStorage.setItem('nivel', nivel);
    navigate('/question-page');
  };

  return (
    <div className="form-container" data-page="home">
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

export default Home;