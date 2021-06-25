import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { GetItemDescription, GetItemDetail } from '../../APICalls/itemApiCall';
import { CategoriesContext } from '../../context/provider';
import Loading from '../../components/Loading';
import './styles.scss';

interface IHistoryDetail {
  id: string;
}

const Detail: React.FC = ({}) => {
  const [item, setItem] = React.useState<IItemDetail>();
  const [status, setStatus] = React.useState<string>();
  const [description, setDescription] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(true);
  const { id: itemId } = useParams<IHistoryDetail>();
  const { setCategorieId } = React.useContext(CategoriesContext);
  const history = useHistory();

  const getDetail = async () => {
    const data = await GetItemDetail(itemId);
    if (data !== undefined && data.error === undefined) {
      setItem(data);
      setCategorieId(data.category_id);

      if (data.attributes !== undefined) {
        const result = data.attributes.filter((value) => value.id == 'ITEM_CONDITION');
        if (result !== undefined && result.length > 0 && result[0].values.length > 0) {
          setStatus(result[0].values[0].name);
        }
      }
      const descriptionItem = await GetItemDescription(itemId);
      if (descriptionItem) {
        setDescription(descriptionItem.plain_text);
        setLoading(false);
      } else {
        setDescription('El vendedor no ha incluído una descripción');
        setLoading(false);
      }
    } else {
      history.replace({ pathname: '/404' });
    }
  };

  React.useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      {!loading ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Detail;
