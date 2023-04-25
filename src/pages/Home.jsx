import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Container from '../components/Container';
import Seletor from '../components/Seletor';
import Heading from '../components/Heading';
import SecureInput from '../components/SecureInput';

const Home = () => {

  // States

  const [materia, setMateria] = useState('matematica');
  const [nivel, setNivel] = useState('basico');
  const [apikey, setApikey] = useState('');

  // Constants

  const navigate = useNavigate();

  // Functions

  const handleMateriaChange = (event) => { 
    setMateria(event.target.value);
  };

  const handleNivelChange = (event) => {
    setNivel(event.target.value);
  };

  const handleApiKeyChange = (event) => {
    setApikey(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('materia', materia);
    localStorage.setItem('nivel', nivel);

    Cookies.set('api_key', apikey, { secure: false, sameSite: 'strict' });

    navigate('/question-page');
  };

  return (
    <Container>
      <Formulario onSubmit={handleSubmit}>
        <Heading headingClassName="w-25vw">SmartAI</Heading>
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
        <SecureInput
          id="apikey-input"
          placeholder="Insira sua chave de API"
          isPassword={true}
          value={apikey}
          onChange={handleApiKeyChange}
        />
        <Botao 
          onClick={handleSubmit}
          buttonClassName="w-full"
        >
          Confirmar
        </Botao>
      </Formulario>
    </Container>
  );
};

export default Home;