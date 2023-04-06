export class Chef {
  public chefid?: string;
  public chefname?: string;
  public chefimgurl?: string;
  public cheffavouritecuisine?: string;
  public chefcaption?: string;
  public cheflocation?: string;
  public totalproducts?: number;
  public totalfollowers?: number;
  public totalrecipes?: number;
  public chefaccountcreateddate?: Date;
  constructor(
    chefid: string,
    chefname: string,
    chefimgurl: string,
    cheffavouritecuisine: string,
    chefcaption: string,
    cheflocation: string,
    totalproducts: number,
    totalfollowers: number,
    totalrecipes: number,
    chefaccountcreateddate: Date
  ) {
    this.chefid = chefid;
    this.chefname = chefname;
    this.chefimgurl = chefimgurl;
    this.cheffavouritecuisine = cheffavouritecuisine;
    this.totalproducts = totalproducts;
    this.totalfollowers = totalfollowers;
    this.totalrecipes = totalrecipes;
    this.chefcaption = chefcaption;
    this.cheflocation = cheflocation;
    this.chefaccountcreateddate = chefaccountcreateddate;
  }
}
