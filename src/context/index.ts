export type ContextCategories = {
  categories: ICategoriesList | undefined;
  setCategories: (data: ICategoriesList) => void;
  categorieId: string;
  setCategorieId: (data: string) => void;
};
