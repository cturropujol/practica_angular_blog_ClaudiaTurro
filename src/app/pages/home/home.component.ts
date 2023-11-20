import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  lastPost: Post | undefined;

  

  postsService = inject(PostsService);

  ngOnInit(){
    this.lastPost = this.postsService.getLast();
  }
}
