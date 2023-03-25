import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateQuestions, checkAnswer } from '../../services/api'

import Botao from '../../components/Botao/Botao';
import Input from '../../components/Input/Input';
import Spinner from '../../components/Spinner/Spinner';

import "./QuestionPage.scss";

const QuestionPage = () => {

    // State

    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState('');
    const [loading, setLoading] = useState(false);

    // Constants

    const navigate = useNavigate();
    
    // Functions
    
    const generateQuestion = async () => {
        const materia = localStorage.getItem('materia');
        const nivel = localStorage.getItem('nivel');
        
        try {
            const question = await generateQuestions(materia, nivel);
            setQuestion(question);
            localStorage.setItem('question', question);
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

        setLoading(true);

        await checkAnswer(question, answer).then( () => {
            setAnswer('');
            generateQuestion().then( () => {
                setLoading(false);
            });
        })
    };

    const backHome = (event) => {
        event.preventDefault();
        
        navigate('/');
    };

    useEffect(() => {
        generateQuestion();
        setLoading(true);
    }, []);
  
    return (
        <div className="form-container" data-page="question-page">
            <form className='edu-form' onSubmit={handleSubmit}>
                {loading ? (
                    <Spinner />
                ) : (
                    <h1 className="form-title">{question}</h1>
                )}
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