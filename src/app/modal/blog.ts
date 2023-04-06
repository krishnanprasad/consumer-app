export class Blog {
  public id?: number;
  public blogid?: string;
  public blogtitle?: string;
  public content?: string;
  public metatags?: string;
  public author: string;
  public blogtitleimage: string;
  public updateddate: Date;

  constructor(
    id: number,
    blogid: string,
    blogtitle: string,
    content: string,
    metatags: string,
    author: string,
    blogtitleimage: string,
    updateddate: Date
  ) {
    this.id = id;
    this.blogid = blogid;
    this.blogtitle = blogtitle;
    this.content = content;
    this.metatags = metatags;
    this.author = author;
    this.blogtitleimage = blogtitleimage;
    this.updateddate = updateddate;
  }
}
