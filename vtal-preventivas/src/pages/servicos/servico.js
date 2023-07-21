import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../../componentes/footer/footer";
import Header from "../../componentes/header/header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './servico.css';

const finalizarAtendimento = () => {
  toast.success('Atendimento finalizado com!');
}

const Servico = () => {
  const { numeroControle } = useParams();

  return (
      <>
      <Header /> 
      <div className="container-atendimentos">
          <h1 className="atendimento">
              Atendimento: {numeroControle}
          </h1>        
      </div>
      <div className='select'>
        <select className='selects' >
            <option value= "turno-atendimento" >Turno do Atendimento</option>
            <option value= "turno-manha">Manhã</option>
            <option value= "turno-tarde">Tarde</option>
            <option value= "turno-noite">Noite</option>
        </select>
        <select className='selects'>
            <option value= "tipo-servico" >Tipo de Serviço</option>
            <option value= "servico-ar">Ar condicionado</option>
            <option value= "servico-energia">Energia Elétrica</option>        
        </select>
        <select className='selects'>
            <option value='status-atendimento' >Status do Atendimento</option>
            <option value= "status-agendado">Agendado</option>
            <option value= "status-em-atendimento">Em atendimento</option>
            <option value= "status-concluido">Concluído</option>
            <option value= "status-concluido-atraso">Concluído com atraso</option>
        </select>        
      
      <h4>Descrição do Serviço:</h4>
      <textarea placeholder='troca de filtro de ar condicionado, vistoria do painel elétrico...'/>
      <h4>Registro do atendimento 
        (Observação):
      </h4>
      <textarea  placeholder='Registar informações/observações sobre o atendimento...'/>
      </div>
      <button 
        type="submit" 
        className="botao-finalizar"
        onClick={() => finalizarAtendimento()} 
        >Finalizar
      </button>
      <ToastContainer  autoClose={3000} />
      <Footer />
      </>

  );
}

export default Servico;