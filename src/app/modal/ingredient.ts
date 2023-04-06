export class Ingredient {
  public ingredientID?: string;
  public ingredientName?: string;
  public ingredientImage?: string;
  public ingredientQuantity?: string;

  constructor(
    ingredientID: string,
    ingredientName: string,
    ingredientImage: string,
    ingredientQuantity: string
  ) {
    this.ingredientID = ingredientID;
    this.ingredientName = ingredientName;
    this.ingredientImage = ingredientImage;
    this.ingredientQuantity = ingredientQuantity;
  }
}
