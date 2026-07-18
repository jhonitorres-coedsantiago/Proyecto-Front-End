import { useState, useEffect } from 'react';
 
export const MensajeBienvenida = () => {
  const [mensaje, setMensaje] = useState('Cargando...');
 
  useEffect(() => {
    console.log('useEffect se ejecuto al montar el componente');
  }, []);
 
  return (
    <div>
      <p>{mensaje}</p>
    </div>
  );
};