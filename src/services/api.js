import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3001', // Altere para o URL do seu servidor intermediário se não estiver rodando localmente
    headers: {
        'Content-Type': 'application/json',
    },
});

export const generateQuestions = async (topic, level) => {
    try {
        const response = await apiClient.post('/api/generate-question', { topic, level });
        console.log('Pergunta gerada:', response.data.question);
        return response.data.question;
    } catch (error) {
        console.error('Erro ao gerar a pergunta:', error);
        throw error;
    }
};

// export const takeLastQuestion = async () => {
//     try {
//         const response = await apiClient.get('/api/take-last-question');
//         console.log('Pergunta gerada:', response.data.question);
//         return response.data.question;
//     } catch (error) {
//         console.error('Erro ao gerar a pergunta:', error);
//         throw error;
//     }
// };

export const checkAnswer = async (question, userAnswer) => {
    try {
        const response = await apiClient.post('/api/check-answer', { question, userAnswer });
        return response.data.answerCheck;
    } catch (error) {
        console.error('Erro ao verificar a resposta:', error);
        throw error;
    }
};