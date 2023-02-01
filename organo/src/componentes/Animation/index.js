import React, { useState, useEffect } from 'react';
import './Animacao.css'

const Maquina = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  
  
  const fullText = 'SuperBowl LVII!!! Chiefs x Eagles 12/02/2023 as 20:30 (BRT), Local: State Farm Stadium, Arizona (EUA), Transmissão: ESPN / RedeTv.';
  
  useEffect(() => {
    const typing = () => {
      setText(fullText.substring(0, index));
      setIndex(index + 1);
    };
    const timeout = setTimeout(typing, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, [index, fullText]);
  
  return <h2 className='titulo-superbowl'>{text}</h2>;
};

export default Maquina;