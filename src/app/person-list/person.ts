export interface Person {
  id:number,
  firstname:string,
  lastname:string,
  age:number,
  email:string,
  address?:{
    county:string,
    city:string,
    district:string,
    flat:number
  }
}
