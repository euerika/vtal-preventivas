import React from 'react';
import { useParams } from 'react-router-dom';
import InputSeta from '../../componentes/input-seta';
import Header from '../../componentes/header/header';
import Footer from '../../componentes/footer/footer';

const Atendimentos = () => {
    const { nomeFuncionario } = useParams();
    const atendimentos = [
        { numeroControle: 'AT0001', descricao: 'Atendimento 1' },
        { numeroControle: 'AT0002', descricao: 'Atendimento 2' },
        { numeroControle: 'AT0003', descricao: 'Atendimento 3' },
        { numeroControle: 'AT0004', descricao: 'Atendimento 4' },
        { numeroControle: 'AT0005', descricao: 'Atendimento 5' },
    ];

    return (
        <>
        <Header /> 
        <div className="container-atendimentos">
            <h1 className="ola-funcionario">
                Olá, <span className="nome-funcionario"> {nomeFuncionario}</span>!Esses são seus atendimentos do dia:
            </h1>
            {atendimentos.map((atendimento, index) => (
            <InputSeta
                key={index}
                descricao={atendimento.descricao}
                numeroControle={atendimento.numeroControle}
            />
            ))}
        </div>
        <Footer />
        </>

    );
}

export default Atendimentos;