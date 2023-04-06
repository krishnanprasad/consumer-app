import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/modal/blog';
import { BlogsService } from 'src/services/blogs.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css'],
})
export class BlogdetailComponent implements OnInit {
  blogid: any;
  blog: any;
  content: string = '';
  constructor(
    private route: ActivatedRoute,
    private _blogsService: BlogsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    debugger;
    this.blogid = this.route.snapshot.paramMap.get('blogid');
    this.getBlog();
  }
  getBlog() {
    this._blogsService
      .getBlogDetail(this.blogid)
      .subscribe((response: Blog) => {
        this.content = response.content as string;
        this.blog = this.sanitizer.bypassSecurityTrustHtml(this.content);
      });
  }
}
