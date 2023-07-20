import React from 'react';
import '../pages/atendimento/atendimento.css';
import { IoIosArrowForward } from 'react-icons/io';

const InputSeta = ({ placeholder }) => {
  return (
    <div className="input-seta">
        <div className="input-group">
            <input type="text" value="Atendimento 1" placeholder={placeholder} />
            <IoIosArrowForward className="seta-lado" />
        </div>
        <div className="input-group">
            <input type="text" value="Atendimento 2" placeholder={placeholder} />
            <IoIosArrowForward className="seta-lado" />
        </div>
        <div className="input-group">
            <input type="text" value="Atendimento 3" placeholder={placeholder} />
            <IoIosArrowForward className="seta-lado" />
        </div>
        <div className="input-group">
            <input type="text" value="Atendimento 4" placeholder={placeholder} />
            <IoIosArrowForward className="seta-lado" />
        </div>
        <div className="input-group">
            <input type="text" value="Atendimento 5" placeholder={placeholder} />
            <IoIosArrowForward className="seta-lado" />
        </div>
    </div>
  );
};

export default InputSeta;