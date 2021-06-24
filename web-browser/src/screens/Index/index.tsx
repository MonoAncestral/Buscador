import React from 'react';
import './styles.scss';
import Card from '../../components/ItemCard';
import Header from '../../components/Header';
import Detail from '../../components/Detail';
import { GetCategories } from '../../APICalls/categorieApiCall';

const Back: React.FC = ({}) => {
  const [data, setData] = React.useState<IProductList>();
  const [contentStatus, setContentStatus] = React.useState<number>(0);
  const [info, setInfo] = React.useState<IResult[]>();
  const [categories, setCategories] = React.useState<ICategoriesList>();
  const [selectedItem, setSelectedItem] = React.useState<string>('');

  const getCategories = async () => {
    if (data !== undefined && data.results.length > 0) {
      const categoriesList = await GetCategories(data.results[1].category_id);
      if (categoriesList) {
        setCategories(categoriesList);
      }
    }
  };

  React.useEffect(() => {
    if (data?.results) {
      getCategories().then();
      setInfo(data.results.slice(0, 4));
    }
  }, [data]);

  return (
    <>
      <Header setData={setData} setContentStatus={setContentStatus} />
      <div className="back">
        {categories && data && data?.results.length > 0 && (
          <div className="Categories">
            {categories.path_from_root.map((value, key) =>
              key === categories.path_from_root.length - 1 ? (
                <a className="LastCategorie" href="" key={key}>{`${value.name}`}</a>
              ) : (
                <a href="" key={key}>{`${value.name} > `}</a>
              ),
            )}
          </div>
        )}

        <div className="Content">
          {info && contentStatus === 1 && (
            <>
              {info.map((value, key) => (
                <Card data={value} selectedItem={setSelectedItem} setContentStatus={setContentStatus} key={key} />
              ))}
            </>
          )}
          {selectedItem !== '' && contentStatus === 2 && <Detail itemId={selectedItem} />}
        </div>
      </div>
    </>
  );
};

export default Back;
