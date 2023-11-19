import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { CategoriasService } from 'src/app/services/categorias.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  
  arrPosts: Post[] = [];
  arrCategorias: string[] = [];
  categoriaSeleccionada!:string;
  tituloCategoria: string = '';

  postsService = inject(PostsService);
  categoriaService = inject(CategoriasService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);


  ngOnInit(){
    this.arrPosts = this.postsService.getAll().reverse();
    this.arrCategorias = this.postsService.getCategoria();
    this.activatedRoute.params.subscribe(params => {
      this.categoriaSeleccionada = params['categoria'];
      
      if (this.categoriaSeleccionada && this.categoriaSeleccionada !== 'filtrar por categoria') {
        this.arrPosts = this.postsService.getByCategoria(this.categoriaSeleccionada);
        this.tituloCategoria = this.categoriaSeleccionada;
      }
    });
  }

  filtrarContinente($event: any) {
    const nuevaRuta = $event.target.value === 'filtrar por categoria' ? '/posts' : `/posts/${$event.target.value}`;
    
    this.router.navigate([nuevaRuta]);
    
    if ($event.target.value === 'filtrar por categoria') {
      this.arrPosts = this.postsService.getAll();
      
    } else {
      this.arrPosts = this.postsService.getByCategoria($event.target.value);
      
    }
}


}
