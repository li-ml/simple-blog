import { Component } from '@angular/core';

import { BlogService } from './blog.service';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Post[] = [];

  constructor(private blogService: BlogService){
    this.blogService.all().subscribe(
      ({data}) => {
        this.posts = data.allPosts;
      }
    );
  }

}
