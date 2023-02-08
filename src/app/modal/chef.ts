export class Chef {
  public chefid?: string;
  public firstname?: string;
  public lastname?: string;
  public img?: string;
  public followercount?: number;

  constructor(
    chefid: string,
    firstname: string,
    lastname: string,
    img: string,
    followercount: number
  ) {
    this.chefid = chefid;
    this.firstname = firstname;
    this.lastname = lastname;
    this.img = img;
    this.followercount = followercount;
  }
}
