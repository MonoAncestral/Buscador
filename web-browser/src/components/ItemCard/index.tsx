import React from 'react';
import './styles.scss';

declare interface item {
  data: IResult;
  selectedItem: (itemId: string) => void;
  setContentStatus: (status: number) => void;
}

const ItemCard: React.FC<item> = ({ data, selectedItem, setContentStatus }) => {
  const onClickItem = () => {
    selectedItem(data.id);
    setContentStatus(2);
  };
  return (
    <div>
      <div className="ItemCard">
        <div onClick={onClickItem} className="imgContent" style={{ backgroundImage: `url(${data.thumbnail})` }}></div>
        <div className="infoContent">
          <p className="price">
            ${' '}
            {data.price
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </p>
          <h2 onClick={onClickItem}>{data.title}</h2>
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
