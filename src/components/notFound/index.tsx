import React from 'react';
import './styles.scss';
import cat from '../../assets/cat.png';

const NotFound: React.FC = () => {
  return (
    <div className="notFound">
      <img src={cat} alt="Gato buscando" />
      <h2>Artículo no encontrado</h2>
      <p>Vaya, no encontramos ningún artículo que coincida con lo que buscas, intenta de nuevo</p>
    </div>
  );
};

export default NotFound;
