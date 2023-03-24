import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateQuestions } from '../../services/api'

import "./QuestionPage.scss";
import Botao from '../../components/Botao/Botao';
import Input from '../../components/Input/Input';

const QuestionPage = () => {
    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState('');
    const navigate = useNavigate();

    const generateQuestion = async () => {
        const materia = localStorage.getItem('materia');
        const nivel = localStorage.getItem('nivel');

        try {
            const question = await generateQuestions(materia, nivel);
            setQuestion(question);
            localStorage.setItem('question', question);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        generateQuestion();
    }, []);

    const changeQuestion = () => {
        
    };

    // const storeAnswer = () => {
    //     localStorage.setItem(`answer_${currentQuestionIndex}`, answer);
    // };
  
    const handleChange = (event) => {
        setAnswer(event.target.value);
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        generateQuestion();
        // storeAnswer();
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
                <h1 className="form-title">{question}</h1>
                <Input
                    id="answer-input"
                    placeholder="Digite sua resposta"
                    value={answer}
                    onChange={handleChange}
                />
                <div className="button-group">
                    <Botao onClick={backHome}>
                        Voltar para Home
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