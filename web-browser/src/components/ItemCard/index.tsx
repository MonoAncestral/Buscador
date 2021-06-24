import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

declare interface item {
  data: IResult;
}

const ItemCard: React.FC<item> = ({ data }) => {
  return (
    <div>
      <div className="ItemCard">
        <Link className="Link" to={`items/${data.id}`}>
          <div className="imgContent" style={{ backgroundImage: `url(${data.thumbnail})` }}></div>
        </Link>
        <div className="infoContent">
          <p className="price">
            ${' '}
            {data.price
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </p>
          <Link className="Link" to={`items/${data.id}`}>
            <h2>{data.title}</h2>
          </Link>
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
