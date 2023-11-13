import {Comment} from "../catalog/item/comments/comment";

export interface Product {
  id:number,
  title:string,
  price:number,
  comment:Comment[]
}
