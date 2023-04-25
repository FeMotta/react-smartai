import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateQuestions, checkAnswer } from '../services/api'

import Botao from '../components/Botao';
import Input from '../components/Input';
import Spinner from '../components/Spinner';
import Formulario from '../components/Formulario';
import Container from '../components/Container';
import Heading from '../components/Heading';

const QuestionPage = () => {

  // State

  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  // Constants

  const navigate = useNavigate();
  
  // Functions
  
  const generateQuestion = async () => {
    const materia = localStorage.getItem('materia');
    const nivel = localStorage.getItem('nivel');
    
    try {
      const question = await generateQuestions(materia, nivel);
      setQuestion(question);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  };

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (answer !== '') {
      setLoading(true);

      await checkAnswer(question, answer).then( (response) => {
        saveAnswer(response);
        setAnswer('');
          generateQuestion().then( () => {
            setLoading(false);
            setCount(count + 1); 
        });
      })
    }

    if (count === 4) {

      navigate('/answer-page');
    }
  };

  const saveAnswer = (correctAnswer) => {
    const questionNumber = count;
    const questionObject = {
      question: question,
      userAnswer: answer,
      correctAnswer: correctAnswer,
    };
    const localStorageItens = JSON.stringify(questionObject);
    localStorage.setItem(`question-${questionNumber}`, localStorageItens);
  }

  const backHome = (event) => {
    event.preventDefault();
    
    navigate('/');
  };

  useEffect(() => {
    setLoading(true);
    generateQuestion();
  }, []);
  
  return (
    <Container>
      {/* Contador de Questão */}
      <div className="flex justify-center mb-1">
        <p className="text-white-500 font-semibold italic font-roboto text-4xl">{count}/4</p>
      </div>

      <Formulario formClassName="lg:min-w-600 p-5" onSubmit={handleSubmit}>
        {/* Questão ou Loading Spinner */}
        {loading ? (
          <Spinner />
        ) : (
          <Heading headingClassName="w-full">{question}</Heading>
        )}

        {/* Input de Resposta */}
        {!loading && (
          <Input
            id="answer-input"
            placeholder="Digite sua resposta"
            value={answer}
            onChange={handleChange}
            inputClassName={`border-2 rounded-md px-4 py-2 ${
              answer === "" ? "border-red-500" : "border-primary"
            }`} 
          />
        )}

        {/* Botões de Navegação */}
        <div className="flex justify-between items-center w-full">
          {/* Botão Home */}
          {count !== 4 && (
            <Botao buttonClassName="form-button flex-grow mx-2 first:ml-0 last:mr-0" onClick={backHome}>
              Voltar para Home
            </Botao>
          )}

          {/* Botão Próxima Pergunta */}
          {!loading && (
            <Botao
              buttonClassName="form-button flex-grow mx-2 first:ml-0 last:mr-0"
              disabled={answer === ''}
              onClick={handleSubmit}
            >
              {count === 4 ? "Finalizar" : "Próxima Pergunta"}
            </Botao>
          )}
        </div>
      </Formulario>
    </Container>
  );
};
  
export default QuestionPage;