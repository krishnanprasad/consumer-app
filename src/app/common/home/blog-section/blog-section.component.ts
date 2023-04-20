import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/modal/blog';
import { BlogsService } from 'src/services/blogs.service';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css'],
})
export class BlogSectionComponent {
  blogList: any;
  constructor(private _blogsService: BlogsService, private router: Router) {}
  ngOnInit() {
    this.getRecommendedBlogList();
  }
  getRecommendedBlogList() {
    this._blogsService.getTrendingBlogList().subscribe((response: Blog[]) => {
      this.blogList = response;
    });
  }
  gottoblog(blogid: any) {
    this.router.navigate(['blogdetail/' + blogid]);
    // this.router.navigate(['blogdetail'], { queryParams: { blogid: blogid } });
  }
}
