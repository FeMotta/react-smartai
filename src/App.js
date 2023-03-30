import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css'
import Home from './pages/Home'
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <div className="bg-main h-screen w-screen text-white text-lg">
      <Router>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/question-page" element={<QuestionPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
