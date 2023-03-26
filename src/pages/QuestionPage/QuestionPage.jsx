import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateQuestions, checkAnswer } from '../../services/api'

import Botao from '../../components/Botao/Botao';
import Input from '../../components/Input/Input';
import Spinner from '../../components/Spinner/Spinner';
import Formulario from '../../components/Formulario/Formulario';

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

        if (answer !== '') {
            setLoading(true);
    
            await checkAnswer(question, answer).then( () => {
                setAnswer('');
                generateQuestion().then( () => {
                    setLoading(false);
                });
            })
        }
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
        <div className="flex flex-col items-center justify-center h-screen">
            <Formulario formClassName="lg:min-w-600 p-5" onSubmit={handleSubmit}>
                {loading ? (
                    <Spinner />
                ) : (
                    <h1 className="text-4.5xl w-full text-center mb-1.3rem min-w-300 text-primary font-montserrat">{question}</h1>
                )}
                <Input
                    id="answer-input"
                    placeholder="Digite sua resposta"
                    value={answer}
                    onChange={handleChange}
                    inputClassName={`border-2 rounded-md px-4 py-2 ${
                        answer === '' ? 'border-red-500' : 'border-primary'
                    }`}
                />
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
                        Próxima Questão
                    </Botao>
                </div>
            </Formulario>
        </div>
    );
};
  
export default QuestionPage;