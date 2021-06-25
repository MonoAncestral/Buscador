import React, { createContext, useState, FC } from 'react';
import { ContextCategories } from './index';

const contextDefaultValues: ContextCategories = {
  categories: undefined,
  setCategories: () => {},
  categorieId: '',
  setCategorieId: () => {},
};

export const CategoriesContext = createContext<ContextCategories>(contextDefaultValues);

const CategoriesProvider: FC = ({ children }) => {
  const [categories, setCategories] = useState<ICategoriesList | undefined>();
  const [categorieId, setCategorieId] = useState<string>('');

  const changeCategoriesId = (id: string) => {
    setCategorieId(id);
  };
  const changeCategorie = (categorie: ICategoriesList | undefined) => {
    setCategories(categorie);
  };
  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories: changeCategorie,
        categorieId,
        setCategorieId: changeCategoriesId,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
