import React from 'react';
import { useHistory } from 'react-router';
import { GetItemList } from '../../APICalls/itemApiCall';
import Card from '../../components/ItemCard';
import { CategoriesContext } from '../../context/provider';

const Items: React.FC = () => {
  const history = useHistory();
  const [data, setData] = React.useState<IProductList>();
  const [info, setInfo] = React.useState<IResult[]>();
  const { setCategorieId } = React.useContext(CategoriesContext);

  /**
   *
   * @data - Información obtenida de la consulta a la API
   *
   * Cuando la URL cambia en la pantalla inicial (que ocurre cuando el usuario reliza una
   * búsqueda) se llama a GetItemList que consulta a la API la búsqueda según lo que escriba
   * el usuario. si se obtienen datos de ítems de la API, se almacenan en el estado 'data',
   * si no, se redirige a la pantalla de 'artículo no encontrado'
   */

  React.useEffect(() => {
    if (history.location.search) {
      GetItemList(history.location.search.replace('items?search=', '')).then((data) => {
        if (data !== undefined && data.results[0] !== undefined) {
          setData(data);
        } else {
          history.replace({ pathname: '/404' });
        }
      });
    }
  }, [history.location.search]);

  /**
   *
   * @data - Información obtenida de la consulta a la API
   * @categorieId - id de la última categoría del breacrum, a partir de la cual se arma el mismo
   * @info - Array de los 4 primeros items obtenidos en la búsqueda
   *
   * Se ejecuta cuando se obtiene información de la API, si la data obtenida tiene información
   * de items se consulta si nos brinda la categoría con más resultados para asignarla al breadcrum
   * en caso de que no nos brinde esta información, se toma el id de la categoría del primer item
   * obtenido, en ambos casos se le asigna el id al contexto.
   *
   * Luego se toman los 4 primeros ítems y se le asignan al estado 'info' para que estos sean mostrados
   * (en caso de que se hayan obtenido menos de 4 ítems, se le asigna la lista completa)
   *
   * Finalmente se mapea ítem para que sus ítems se muestren en pantalla.
   */

  React.useEffect(() => {
    if (data !== undefined && data?.results && data.results.length > 0) {
      //en caso de que la API retorne el filtro más frecuente se le asigna ese al breadcrum
      if (data.filters.length > 0) {
        const result = data.filters.filter((value) => value.id == 'category');
        if (result !== undefined && result.length > 0 && result[0].values.length > 0) {
          setCategorieId(result[0].values[0].id);
        }
      }
      //si la API no indica el filtro más común, se toma el del primer item de la  lista
      else {
        setCategorieId(data.results[0].category_id);
      }
      if (data.results.length >= 4) {
        setInfo(data.results.slice(0, 4));
      } else {
        setInfo(data.results);
      }
    }
  }, [data]);

  return <>{info && info.map((value, key) => <Card data={value} key={key} />)}</>;
};

export default Items;
