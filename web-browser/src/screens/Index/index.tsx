import React from 'react';
import './styles.scss';
import Header from '../../components/Header';
import Detail from '../../components/Detail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Items from '../Items';
import { CategoriesContext } from '../../context/provider';
import { GetCategories } from '../../APICalls/categorieApiCall';

const Back: React.FC = () => {
  const { categories, setCategories } = React.useContext(CategoriesContext);
  const { categorieId } = React.useContext(CategoriesContext);

  const getCategories = async (category_id: string) => {
    const categoriesList = await GetCategories(category_id);
    if (categoriesList) {
      setCategories(categoriesList);
    }
  };
  React.useEffect(() => {
    console.log(categorieId);
    if (categorieId !== '') {
      getCategories(categorieId).then(() => {});
    }
  }, [categorieId]);

  return (
    <BrowserRouter>
      <Header />
      <div className="back">
        {categories ? (
          <div className="Categories">
            {categories.path_from_root.map((value, key) =>
              key === categories.path_from_root.length - 1 ? (
                <a className="LastCategorie" href="" key={key}>{`${value.name}`}</a>
              ) : (
                <a href="" key={key}>{`${value.name} > `}</a>
              ),
            )}
          </div>
        ) : (
          <div className="Categories"></div>
        )}
        <Switch>
          <div className="Content">
            <Route exact path="/" component={Items} />
            <Route exact path="/items/:id" component={Detail} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Back;
