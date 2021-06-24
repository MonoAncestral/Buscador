import React from 'react';
import { GetItemDescription, GetItemDetail } from '../../APICalls/itemApiCall';
import './styles.scss';

declare interface detail {
  itemId: string;
}
const Detail: React.FC<detail> = ({ itemId }) => {
  const [item, setItem] = React.useState<IItemDetail>();
  const [status, setStatus] = React.useState<string>();
  const [description, setDescription] = React.useState<string>('');

  const getDetail = async () => {
    const data = await GetItemDetail(itemId);
    if (data !== undefined) {
      setItem(data);
      if (data.attributes !== undefined) {
        const result = data.attributes.filter((value) => value.id == 'ITEM_CONDITION');
        if (result !== undefined && result.length > 0 && result[0].values.length > 0) {
          setStatus(result[0].values[0].name);
        }
      }
      const descriptionItem = await GetItemDescription(itemId);
      if (descriptionItem) {
        setDescription(descriptionItem.plain_text);
      }
    }
  };

  React.useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      <div className="Detail">
        <div className="itemImage">
          <img src={item?.thumbnail} alt="Vista previa" />
        </div>
        <div className="itemInfo">
          <p className="itemStatus">
            {status} - {item?.sold_quantity} vendidos
          </p>
          <h2 className="itemTitle">{item?.title}</h2>
          <p className="itemPrice">
            ${' '}
            {item?.price
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </p>
          <button>Comprar</button>
        </div>
      </div>
      <div className="itemDescription">
        <h3>Descripción del producto</h3>
        <p>{description.replace('\n', '<br/>')}</p>
      </div>
    </>
  );
};

export default Detail;
