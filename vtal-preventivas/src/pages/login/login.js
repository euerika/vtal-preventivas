import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../../componentes/footer/footer.js";
import Header from "../../../src/componentes/header/header.js";
import "./login.css"

export const Login = () => {
  const [nomeFuncionario, setNomeFuncionario] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
  event.preventDefault();
  navigate(`/atendimento/${nomeFuncionario}`);
  }

  return (
    <>
      <Header />    
        <div className="pai">
        <h2 className="form-titulo">LOGIN</h2>
          <form className="form" onSubmit={handleSubmit}> 
           <h3>Nome do funcionário:</h3>
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nomeFuncionario}
                onChange={(e) => setNomeFuncionario(e.target.value)}
              />
               <h3>E-mail:</h3>
                <input
                   type="text"
                   placeholder="Digite seu e-mail"
                />
              <h3>Senha:</h3>
                <input
                   type="text"
                   placeholder="**"
                /> 
              <button type="submit" className="botao-entrar">Entrar</button>                      

      </form>   
    </div>
    <Footer />
    </>
  )
}

export default Login;


