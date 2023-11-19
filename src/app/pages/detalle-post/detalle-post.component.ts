import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.css']
})
export class DetallePostComponent {

  postSeleccionado!: Post | undefined;
  activatedRoute = inject(ActivatedRoute);
  postsService = inject(PostsService);


ngOnInit(){
  this.activatedRoute.params.subscribe((params) => this.postSeleccionado = this.postsService.getById(parseInt(params['postId'])))
}

}
