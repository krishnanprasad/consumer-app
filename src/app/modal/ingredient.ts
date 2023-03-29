export class Ingredient {
  public ingredientID?: string;
  public ingredientName?: string;
  public ingredientImage?: string;

  constructor(
    ingredientID: string,
    ingredientName: string,
    ingredientImage: string
  ) {
    this.ingredientID = ingredientID;
    this.ingredientName = ingredientName;
    this.ingredientImage = ingredientImage;
  }
}
