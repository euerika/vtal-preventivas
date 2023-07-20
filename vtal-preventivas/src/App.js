import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login.js';
import Atendimentos from './pages/atendimento/atendimento.js';

import './App.css';
import Servico from './pages/servicos/servico.js';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Login />}/>
      <Route path="/atendimento/:nomeFuncionario" element={<Atendimentos />}/>

      <Route path="/servico/:nomeFuncionario" element={<Servico />}/>

 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
