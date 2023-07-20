import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../../componentes/footer/footer.js";
import Header from "../../../src/componentes/header/header.js";
import "./login.css"

export const Login = () => {
  const [nomeFuncionario, setNomeFuncionario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
  event.preventDefault();

  if (isValidEmail(email) && isValidPassword(senha)) {
    // Se o email e senha forem válidos, redirecione o usuário
    setErrorMsg('');
    navigate(`/atendimento/${nomeFuncionario}`);
  } else {
    // Se o email ou senha forem inválidos, exiba uma mensagem de erro
    setErrorMsg('Email ou senha inválidos.');
  }
  };

  const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
  };

  const isValidPassword = (password) => {
  return password.length >= 6;
  };

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
                   onChange={(e) => setEmail(e.target.value)}
                />
              <h3>Senha:</h3>
                <input
                   type="text"
                   placeholder="******"
                   onChange={(e) => setSenha(e.target.value)}
                />
              <div style={{ color: 'red' }}>{errorMsg}</div>
              <button type="submit" className="botao-entrar">Entrar</button>                      

      </form>   
    </div>
    <Footer />
    </>
  )
}

export default Login;

