import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  
  arrPosts: Post[] = [];
  arrCategorias: string[] = [];

  postsService = inject(PostsService);

  ngOnInit(){
    this.arrPosts = this.postsService.getAll();
    this.arrCategorias = this.postsService.getCategoria();
  }

  filtrarContinente($event:any){
    if($event.target.value === 'filtrar por categoria'){
      this.arrPosts = this.postsService.getAll();
    } else {
      this.arrPosts = this.postsService.getByCategoria($event.target.value);
    }
    
    
   
  }

}
