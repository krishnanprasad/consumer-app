import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/modal/blog';
import { BlogsService } from 'src/services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  TBBlogSearchText: any;
  blogList: any;
  constructor(private _blogsService: BlogsService, private router: Router) {}

  ngOnInit() {
    this.getRecommendedBlogList();
  }
  getRecommendedBlogList() {
    this._blogsService.getBlogList().subscribe((response: Blog[]) => {
      this.blogList = response;
    });
  }
  gottoblog(blogid: any) {
    this.router.navigate(['blogdetail/' + blogid]);
    // this.router.navigate(['blogdetail'], { queryParams: { blogid: blogid } });
  }
}
