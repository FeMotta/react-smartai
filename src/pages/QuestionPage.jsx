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
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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

    if (count === 10) {
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
      <div className="flex justify-center mb-1">
        <p className="text-white-500 font-semibold">{count}/10</p>
      </div>
      <Formulario formClassName="lg:min-w-600 p-5" onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <Heading headingClassName="w-full">{question}</Heading>
        )}
        <Input
          id="answer-input"
          placeholder="Digite sua resposta"
          value={answer}
          onChange={handleChange}
          inputClassName={`border-2 rounded-md px-4 py-2 ${answer === '' ? 'border-red-500' : 'border-primary'}`} />
        <div className="flex justify-between items-center w-full">
          <Botao
            buttonClassName="form-button flex-grow mx-2 first:ml-0 last:mr-0"
            onClick={backHome}
          >
            Voltar para Home
          </Botao>
          <Botao
            buttonClassName="form-button flex-grow mx-2 first:ml-0 last:mr-0"
            disabled={answer === ''}
            onClick={handleSubmit}
          >
            {count === 10 ? 'Finalizar' : 'Próxima Pergunta'}
          </Botao>
        </div>
      </Formulario>
    </Container>
  );
};
  
export default QuestionPage;