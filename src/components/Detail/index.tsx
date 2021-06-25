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

  /**
   * getDetail
   *
   * @itemId {string} - Id del item solicitado por el usuario, que se obtiene de la url
   * @status {string} - Estado del producto
   * @data {Object} - Almacena el resultado de la API
   * @item {Object} - La información del producto consultada desde la API
   * @descriptionItem {Object} - el detalle del producto consultado desde la API
   * @categorieId {string} - Id de la categoría, se le envía al contexto para que modifique
   * el breadcrum según la categoría del item consultado.
   * @loading {boolean} - Estado que indica si debe aparecer o no la pantalla de cargando
   *
   *
   * Se inicia llamando a la api para traer el detalle del producto, enviando el id del item.
   *
   * Si el API nos trae información y no tiene ningún error, se le asigna al estado item y se
   * le envía el id de la categoría al contexto.
   *
   * Para obtener el estado del producto (ej: nuevo/usado) se busca en attributes el objeto
   * 'ITEM_CONDITION' en donde se almacena este valor y se le asigna al estado 'status'
   *
   * Se consulta la descripción del item a la API, en caso de obtener un valor, se le asigna
   * al estado 'description', pero si no hay valor, se agrega uno por defecto y en ambos casos
   * se desactiva la pantalla de loading.
   *
   * En caso de que no se consiga data, se envía a la pantalla 404 que indica que el artículo no
   * se ha encontrado
   */

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

  //Se ejecuta getDetail al momento de montar este componente

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
