import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrPosts: Post[] = [];
  arrCategorias: string[] = [];
  arrImg: string[] = [];
  

  postsService = inject(PostsService);

  ngOnInit(){
    this.arrImg = this.postsService.getImg();
    console.log(this.arrImg)
  }

}
