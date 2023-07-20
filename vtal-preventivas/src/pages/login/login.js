import Footer from "../../componentes/footer/footer.js";
import Header from "../../../src/componentes/header/header.js";

import "./login.css"

export const Login = () => {

  return (
    <>
      <Header />    
        <div className="pai">
        <h2 className="form-titulo">LOGIN</h2>
          <form className="form"> 
           <h3>Nome do funcionário:</h3>
            <input
                type="text"
                placeholder="Digite seu nome"
                // value={nomeFuncionario}
                // onChange={(e) => setNomeFuncionario(e.target.value)}
              />
               <h3>E-mail:</h3>
                <input
                   type="text"
                   placeholder="Digite seu e-mail"
                   // value={nomeFuncionario}
                    // onChange={(e) => setNomeFuncionario(e.target.value)}
                />
              <h3>Senha:</h3>
                <input
                   type="text"
                   placeholder="******"
                   // value={nomeFuncionario}
                  // onChange={(e) => setNomeFuncionario(e.target.value)}
                /> 
              <button className="botao-entrar" onClick>Entrar</button>                      

      </form>   
    </div>
    <Footer />
    </>
  )
}

