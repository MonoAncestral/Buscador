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
      GetItemList(history.location.search).then((data) => {
        if (data !== undefined) {
          setData(data);
        }
      });
    }
  }, [history.location.search]);

  React.useEffect(() => {
    if (data !== undefined && data?.results && data.results.length > 0) {
      setCategorieId(data.results[0].category_id);
      setInfo(data.results.slice(0, 4));
    }
  }, [data]);

  return <>{info && info.map((value, key) => <Card data={value} key={key} />)}</>;
};

export default Items;
