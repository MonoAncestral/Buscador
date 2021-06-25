import { HttpRequest } from './httpRequest';
import { baseURL } from '../utils/consts/URL';
import { itemURL } from '../utils/consts/URL';

export const GetItemList = async (BrowserString: string): Promise<IProductList | undefined> => {
  try {
    const request = await new HttpRequest().Get<IProductList>(`${baseURL}${itemURL.getList}${BrowserString}`);
    if (request) {
      return request;
    } else {
      throw new Error('');
    }
  } catch (error) {
    console.log(error);
  }
};

export const GetItemDetail = async (itemId: string): Promise<IItemDetail | undefined> => {
  try {
    const request = await new HttpRequest().Get<IItemDetail>(`${baseURL}${itemURL.getDetail}${itemId}`);
    if (request) {
      return request;
    } else {
      throw new Error('');
    }
  } catch (error) {
    console.log(error);
  }
};

export const GetItemDescription = async (itemId: string): Promise<IDescription | undefined> => {
  try {
    const request = await new HttpRequest().Get<IDescription>(
      `${baseURL}${itemURL.getDetail}${itemId}${itemURL.getDescription}`,
    );
    if (request) {
      return request;
    } else {
      throw new Error('');
    }
  } catch (error) {
    console.log(error);
  }
};
