export class Recipe {
  public recipeid: string;
  public recipename: string;
  public recipetime?: number;
  public recipecuisine?: string;
  public img: string;
  public chefid: string;
  public chefname: string;
  public cheffollowercount: number;
  public veg?: boolean;
  public recipesteps?: steps[];

  constructor(
    recipeid: string,
    recipename: string,
    recipetime: number,
    recipecuisine: string,
    img: string,
    chefid: string,
    cheffollowercount: number,
    veg: boolean,
    chefname: string,
    recipesteps: steps[]
  ) {
    this.recipeid = recipeid;
    this.recipename = recipename;
    this.recipetime = recipetime;
    this.recipecuisine = recipecuisine;
    this.img = img;
    this.chefid = chefid;
    this.cheffollowercount = cheffollowercount;
    this.veg = veg;
    this.chefname = chefname;
    this.recipesteps = recipesteps;
  }
}

export class steps {
  public steps: string;

  constructor(steps: string) {
    this.steps = steps;
  }
}
