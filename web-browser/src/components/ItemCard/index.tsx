import React, { CSSProperties } from 'react';
import './styles.scss';

declare interface item {
  data: IResult;
}

const ItemCard: React.FC<item> = ({ data }) => {
  return (
    <div>
      <div className="ItemCard">
        <div className="imgContent" style={{ backgroundImage: `url(${data.thumbnail})` }}></div>
        <div className="infoContent">
          <p className="price">
            ${' '}
            {data.price
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </p>
          <h2>{data.title}</h2>
        </div>
        <div className="place">
          <p>{data.address.state_name}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ItemCard;
