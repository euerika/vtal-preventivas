import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NomeInput () {
    const [nomeFuncionario, setNomeFuncionario] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/atendimento/${nomeFuncionario}`);
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Nome do Funcionário:
              <input
                type="text"
                value={nomeFuncionario}
                onChange={(e) => setNomeFuncionario(e.target.value)}
              />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
    );
}
export default NomeInput;
