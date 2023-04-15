import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/modal/blog';
import { BlogsService } from 'src/services/blogs.service';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css'],
})
export class FooterSectionComponent implements OnInit {
  blogList: any;
  constructor(private _blogsService: BlogsService, private router: Router) {}

  ngOnInit(): void {
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
