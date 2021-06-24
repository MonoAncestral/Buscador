import React from 'react';
import './styles.scss';

const Detail: React.FC = () => {
  return (
    <>
      <div className="Detail">
        <div className="itemImage">
          <img src="http://http2.mlstatic.com/D_955930-MLA45878166410_052021-O.jpg" alt="Vista previa" />
        </div>
        <div className="itemInfo">
          <p className="itemStatus">Nuevo - 234 vendidos</p>
          <h2 className="itemTitle">Deco Reverse Sombrero</h2>
          <p className="itemPrice">$ 1.980</p>
          <button>Comprar</button>
        </div>
      </div>
      <div className="itemDescription">
        <h3>Descripción del producto</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptas dolorum cupiditate dolor dolores
          quas architecto laborum, id, quod excepturi quis temporibus, officiis est voluptatibus accusamus sequi eius.
          Modi, voluptatum?
        </p>
      </div>
    </>
  );
};

export default Detail;
