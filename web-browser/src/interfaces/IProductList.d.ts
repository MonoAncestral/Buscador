declare interface IProductList{
  results: IResult[];
}

declare interface IResult{
  id: string;
  title: string;
  price: number;
  category_id: string;
}