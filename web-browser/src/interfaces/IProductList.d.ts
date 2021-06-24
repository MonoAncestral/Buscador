declare interface IProductList {
  results: IResult[];
}

declare interface IResult {
  id: string;
  title: string;
  price: number;
  category_id: string;
  thumbnail: string;
  address: { state_name: string };
}

declare interface IItemDetail {
  id: string;
  title: string;
  thumbnail: string;
  sold_quantity: number;
  price: number;
  attributes: IAtributes[];
}

declare interface IAtributes {
  id: string;
  values: IValues[];
}
declare interface IValues {
  name: string;
}

declare interface IDescription {
  plain_text: string;
}
