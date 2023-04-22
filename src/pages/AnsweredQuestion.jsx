/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { checkAnswer } from '../services/api'

import Container from "../components/Container";
import Formulario from "../components/Formulario";
import Botao from "../components/Botao";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Spinner from '../components/Spinner';

const AnswerQuestion = () => {

    // State

    const [questionObject, setAnswerObject] = useState({
        question: '',
        answer: '',
        correctAnswer: '',
    });
    const [loading, setLoading] = useState(true);

    // Constants

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Funções

    const goAnswerPage = (event) => {
        event.preventDefault();
        
        navigate('/answer-page');
    }

    const getAnswer = () => {
        try {
            const questionNumber = searchParams.get('questionNumber');
            const localStorageItens = localStorage.getItem(`question-${questionNumber}`);
            const answerObject = JSON.parse(localStorageItens);

            if (!answerObject.correctAnswer) {
                getCorrectAnswer(answerObject.question, answerObject.answer);
            } else {
                setAnswerObject(answerObject);
                setLoading(false);
            }
        } catch (error) {
            console.error('Erro ao obter a resposta:', error);
            setLoading(false);
        }
    }

    const getCorrectAnswer = async (question, answer) => {
        try {
            const response = await checkAnswer(question, answer);
            setAnswerObject({
                question: question,
                answer: answer,
                correctAnswer: response,
            });
        } catch (error) {
            console.error('Erro ao verificar a resposta:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        getAnswer();
    }, []);

    return (

        <Container>
            <Formulario className="flex justify-center">
                {loading ? (
                    <Spinner />
                ) : (
                <div>
                    <Heading headingClassName="w-full lg:min-w-500">
                    Questão: {questionObject.question}
                    </Heading>
                    <Input
                    id="answer-input"
                    value={questionObject.answer}
                    readOnly={true}
                    />
                    <Heading headingClassName="w-full lg:min-w-500">
                    SmartAI: {questionObject.correctAnswer}
                    </Heading>
                </div>
                )}
                <Botao
                buttonClassName="self-center w-80 mt-3"
                onClick={goAnswerPage}>
                    Voltar
                </Botao>
            </Formulario>
        </Container>
    );
}

export default AnswerQuestion;