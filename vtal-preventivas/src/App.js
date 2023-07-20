import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NomeInput from './pages/login/login.js';
import Atendimentos from './pages/atendimento/atendimento.js';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<NomeInput />}/>
      <Route path="/atendimento/:nomeFuncionario" element={<Atendimentos />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
