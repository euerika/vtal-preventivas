import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login.js';
import Atendimentos from './pages/atendimento/atendimento.js';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Login />}/>
      <Route path="/atendimento/:nomeFuncionario" element={<Atendimentos />}/>
      {/* <Route path="/servico" element={<Servicos />}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
