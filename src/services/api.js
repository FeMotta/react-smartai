import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://smart-ai-server.ue.r.appspot.com',
    // baseURL: 'http://192.168.0.12:3001',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const generateQuestions = async (topic, level, apikey) => {
    try {
        const response = await apiClient.post('/api/generate-question', { topic, level, apikey });
        return response.data.question;
    } catch (error) {
        console.error('Erro ao gerar a pergunta:', error);
        throw error;
    }
};

export const checkAnswer = async (question, userAnswer, apikey) => {
    try {
        const response = await apiClient.post('/api/check-answer', { question, userAnswer, apikey });
        return response.data.answerCheck;
    } catch (error) {
        console.error('Erro ao verificar a resposta:', error);
        throw error;
    }
};