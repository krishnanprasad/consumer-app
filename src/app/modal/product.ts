export class Product {
  public productid?: string;
  public name?: string;
  public description?: string;
  public weight?: number;
  public price?: number;
  public chefid: string;
  public img: string;

  constructor(
    productid: string,
    name: string,
    description: string,
    weight: number,
    price: number,
    chefid: string,
    img: string
  ) {
    this.productid = productid;
    this.chefid = chefid;
    this.name = name;
    this.description = description;
    this.weight = weight;
    this.price = price;
    this.chefid = chefid;
    this.img = img;
  }
}
