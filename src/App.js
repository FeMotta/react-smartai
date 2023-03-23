import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Formulario from './components/formulario/Formulario'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/" element={<Formulario/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
