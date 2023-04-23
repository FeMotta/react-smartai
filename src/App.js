import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css'
import Home from './pages/Home'
import QuestionPage from './pages/QuestionPage';
import AnswerPage from './pages/AnswerPage';
import AnswerQuestion from './pages/AnsweredQuestion';

function App() {
  return (
    <div className="bg-main h-screen w-screen text-white text-lg">
      <BrowserRouter basename='/'>
        <Routes> 
          <Route exact path="/" element={<Home/>} />
          <Route path="/question-page" element={<QuestionPage/>} />
          <Route path="/answer-page" element={<AnswerPage/>} />
          <Route path="/answered-question" element={<AnswerQuestion/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
