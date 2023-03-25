import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Botao from '../../components/Botao/Botao';
import Seletor from '../../components/Seletor/Seletor';

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
    <div className="flex flex-col items-center justify-center h-screen" data-page="home">
      <form className="flex flex-col items-center p-8 md:p-8 mx-auto max-w-screen-md bg-white rounded-md border-2 border-primary lg:min-w-300" onSubmit={handleSubmit}>
        <h2 className="text-4.5xl text-center mb-1.3rem w-25vw min-w-300 text-primary font-montserrat">SmartAI</h2>
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
        <Botao 
          onClick={handleSubmit}
          buttonClassName="w-full"
        >
          Confirmar
        </Botao>
      </form>
    </div>
  );
};

export default Home;