import { HttpRequest } from './httpRequest';
import { baseURL, categorieURL } from '../utils/consts/URL';

export const GetCategories = async (CategorieId: string): Promise<ICategoriesList | undefined> => {
  try {
    const request = await new HttpRequest().Get<ICategoriesList>(`${baseURL}${categorieURL}${CategorieId}`);
    if (request) {
      return request;
    } else {
      throw new Error('');
    }
  } catch (error) {
    console.log(error);
  }
};
