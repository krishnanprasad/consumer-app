import { categoryitem } from './categoryitem';

export class category {
  public groupname?: string;
  public items: categoryitem[];

  constructor(groupname: string, items: categoryitem[]) {
    this.groupname = groupname;
    this.items = items;
  }
}
