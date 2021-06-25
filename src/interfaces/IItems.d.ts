declare interface IProductList {
  results: IResult[];
  filters: IFilters[];
}

declare interface IResult {
  id: string;
  title: string;
  price: number;
  category_id: string;
  thumbnail: string;
  address: { state_name: string };
}

declare interface IFilters {
  id: string;
  values: IFilterValues[];
}

declare interface IFilterValues {
  id: string;
}

declare interface IItemDetail {
  id: string;
  title: string;
  thumbnail: string;
  sold_quantity: number;
  price: number;
  category_id;
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
