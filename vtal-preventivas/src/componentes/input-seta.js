import React, { useState, useEffect } from 'react';
import '../pages/atendimento/atendimento.css';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const InputSeta = ({ numeroControle }) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (numeroControle) {
            setInputValue(`Atendimento: ${numeroControle}`);
        }
    }, [numeroControle]);
    if (!numeroControle) {
        return null;
    }
    
    return (
        <div className="input-seta">
            <div className="input-group">
                <input type="text" value={inputValue} />
                <Link to={`/servico/${numeroControle}`}>
                    <FaAngleRight className="seta-lado" />
                </Link>
            </div>
        </div>
  );
};

export default InputSeta;