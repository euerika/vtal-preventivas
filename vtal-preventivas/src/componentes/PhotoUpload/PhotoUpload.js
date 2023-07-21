import React, { useState } from 'react';
import './PhotoUpload.css';

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Obter o arquivo selecionado pelo usuário
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Fazer algo com o arquivo selecionado, por exemplo, enviar para o servidor
    if (selectedFile) {
      // Aqui, você pode implementar a lógica para enviar o arquivo para o servidor
      console.log('Arquivo selecionado:', selectedFile);
      // Resetar o estado para permitir um novo upload
      setSelectedFile(null);
    }
  };

  return (
    <div className='photo_upload'>
      <input type="file" id="file-input" onChange={handleFileChange} />
      <label htmlFor="file-input" className="custom-file-upload"></label>
      <button onClick={handleUpload} className='button-enviar'>Enviar</button>
    </div>
  );
};

export default PhotoUpload;
