import React from "react";
import { useNavigate } from 'react-router-dom';

import Container from "../components/Container";
import Formulario from "../components/Formulario";
import QuestionNumber from "../components/QuestionNumber";
import Botao from "../components/Botao";

const AnswerPage = () => {

    // Constants 

    const navigate = useNavigate();
    const questionNumbers = Array.from({ length: 4 }, (_, i) => i + 1);

    // Functions

    const goAnswerdQuestion = (event) => {
        event.preventDefault();
        
        navigate(`/answered-question?questionNumber=${event.target.textContent}`);
    };

    const goBackHome = (event) => {
        event.preventDefault();

        localStorage.clear();
        navigate('/');
    };


    return (
        <Container>
            <Formulario className="lg:min-w-600 p-5">

                {/* Card de Questão */}
                <div className="grid grid-cols-2 sm:grid-cols-4">
                    {questionNumbers.map((number, index) => (
                        <QuestionNumber 
                        key={index}
                        onClick={goAnswerdQuestion}>
                            {number}
                        </QuestionNumber>
                    ))}
                </div>
                
                {/* Botão de Voltar para Home */}
                <Botao buttonClassName="self-center w-80 mt-3"
                onClick={goBackHome}>
                    Voltar para Home
                </Botao>
            </Formulario>
        </Container>
    );
}

export default AnswerPage;