export class Recipe {
  public recipeid: string;
  public name: string;
  public duration?: number;
  public recipetype?: string;
  public img: string;
  public chefid: string;
  public chefname: string;
  public cheffollowercount: number;
  public veg?: boolean;

  constructor(
    recipeid: string,
    name: string,
    duration: number,
    recipetype: string,
    img: string,
    chefid: string,
    cheffollowercount: number,
    veg: boolean,
    chefname: string
  ) {
    this.recipeid = recipeid;
    this.name = name;
    this.duration = duration;
    this.recipetype = recipetype;
    this.img = img;
    this.chefid = chefid;
    this.cheffollowercount = cheffollowercount;
    this.veg = veg;
    this.chefname = chefname;
  }
}
