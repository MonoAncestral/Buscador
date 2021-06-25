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

  React.useEffect(() => {
    if (history.location.search) {
      GetItemList(history.location.search.replace('items?search=', '')).then((data) => {
        if (data !== undefined) {
          setData(data);
        }
      });
    }
  }, [history.location.search]);

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

      setInfo(data.results.slice(0, 4));
    }
  }, [data]);

  return <>{info && info.map((value, key) => <Card data={value} key={key} />)}</>;
};

export default Items;
