export class Recipe {
  public recipeid: string;
  public recipename: string;
  public recipetime?: number;
  public recipecuisine?: string;
  public recipeimage: string;
  public chefid: string;
  public chefname: string;
  public cheffollowercount: number;
  public veg?: boolean;
  public recipesteps?: steps[];
  public type: number;

  constructor(
    recipeid: string,
    recipename: string,
    recipetime: number,
    recipecuisine: string,
    recipeimage: string,
    chefid: string,
    cheffollowercount: number,
    veg: boolean,
    chefname: string,
    recipesteps: steps[],
    type: number
  ) {
    this.recipeid = recipeid;
    this.recipename = recipename;
    this.recipetime = recipetime;
    this.recipecuisine = recipecuisine;
    this.recipeimage = recipeimage;
    this.chefid = chefid;
    this.cheffollowercount = cheffollowercount;
    this.veg = veg;
    this.chefname = chefname;
    this.recipesteps = recipesteps;
    this.type = type;
  }
}

export class steps {
  public steps: string;

  constructor(steps: string) {
    this.steps = steps;
  }
}
