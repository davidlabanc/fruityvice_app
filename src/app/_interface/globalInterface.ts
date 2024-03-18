export interface Fruit {
  name: string;
  id: Number;
  family: string;
  order: string;
  genus: string;
  nutritions: {
    calories: Number;
    fat: Number;
    sugar: Number;
    carbohydrates: Number;
    protein: Number;
  }
  follow?: Boolean;
}

export interface ResponseAPI{
  name?: string;
  id?: Number;
  family?: string;
  order?: string;
  genus?: string;
  nutritions?: {
    calories?: Number;
    fat?: Number;
    sugar?: Number;
    carbohydrates?: Number;
    protein?: Number;
  }
  follow?: Boolean;
  error?: string;
}

export interface ErrorResponse {
  error?: string;
}
