import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./QuestionPage.scss";
import Botao from '../../components/Botao/Botao';
import Input from '../../components/Input/Input';

const QuestionPage = () => {
    const [answer, setAnswer] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const navigate = useNavigate();

    const questions = [
        'Qual é a sua cor favorita?',
        'Qual é o seu animal favorito?',
        'Qual é o seu hobby favorito?'
    ];

    const changeQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => {
            if (prevIndex + 1 < questions.length) {
                return prevIndex + 1;
            } else {
                return prevIndex;
            }
        });
    };
    
    const handlePreviousQuestion = () => {
        
    };

    const storeAnswer = () => {
        localStorage.setItem(`answer_${currentQuestionIndex}`, answer);
    };
  
    const handleChange = (event) => {
        setAnswer(event.target.value);
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        storeAnswer();
        changeQuestion();
        setAnswer('');
    };


    const backHome = (event) => {
        event.preventDefault();
        navigate('/');
    };
  
    return (
        <div className="form-container" data-page="question-page">
            <form className='edu-form' onSubmit={handleSubmit}>
                <h1 className="form-title">{questions[currentQuestionIndex]}</h1>
                <Input
                    id="answer-input"
                    placeholder="Digite sua resposta"
                    value={answer}
                    onChange={handleChange}
                />
                <div className="button-group">
                    <Botao onClick={currentQuestionIndex === 0 ? backHome : handlePreviousQuestion }>
                        {currentQuestionIndex === 0 ? 'Voltar para Seleção' : 'Questão Anterior'}
                    </Botao>
                    <Botao onClick={handleSubmit}>
                        Próxima Questão
                    </Botao>
                </div>
            </form>
        </div>
    );
};
  
export default QuestionPage;