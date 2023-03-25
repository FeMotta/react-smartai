import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateQuestions, checkAnswer } from '../../services/api'

import Botao from '../../components/Botao/Botao';
import Input from '../../components/Input/Input';
import Spinner from '../../components/Spinner/Spinner';

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
            <form className='flex flex-col items-center p-4 pt-8 md:p-8 mx-auto max-w-screen-md bg-white rounded-md border-2 border-primary lg:min-w-600' onSubmit={handleSubmit}>
                {loading ? (
                    <Spinner />
                ) : (
                    <h1 className="text-4.5xl text-center mb-1.3rem w-25vw min-w-300 text-primary font-montserrat">{question}</h1>
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
                        buttonClassName={`form-button flex-grow mx-2 first:ml-0 last:mr-0
                            ${answer === '' ? 'bg-gray-500 cursor-not-allowed hover:bg-gray-500 active:bg-gray-500 active:translate-y-0 hover:translate-y-0 hover: ' : 'bg-main hover:bg-hover active:bg-active'}
                        `}
                        onClick={handleSubmit}
                    >
                        Próxima Questão
                    </Botao>
                </div>
            </form>
        </div>
    );
};
  
export default QuestionPage;