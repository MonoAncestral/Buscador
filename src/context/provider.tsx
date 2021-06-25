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

  /**
   * @categories Lista de categorías que se pondrán en el breadcrum de acuerdo a los items
   * que se obtengan como resultado de la búsqueda o de los que se consulten los detalles
   * @categorieId id de la última categoría de la lista, a partir de la cual se obtendrán
   * las demás
   *
   * Se almacenan las categorías en el contexto ya que tanto el id, como la info de las
   * mismas se debe pasar de padres a hijos y de hijos a padres, así que un contexto facilita
   * su manejo, brindando los datos (categories y categirieId) y los métodos para modificar
   * estos datos (changeCategoriesId y changeCategorie)
   */
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
