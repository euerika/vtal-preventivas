import React from 'react';
import { useParams } from 'react-router-dom';
import InputSeta from '../../componentes/input-seta';


const Atendimentos = () => {
    const {nomeFuncionario} = useParams();

    return (
          <div>
            <h1 className="ola-funcionario">
                Olá, <span className="nome-funcionario"> {nomeFuncionario}</span>!  Esses são seus atendimentos do dia:
            </h1>
            <InputSeta />
        </div>

    );
}

export default Atendimentos;