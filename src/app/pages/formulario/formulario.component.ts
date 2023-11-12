import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';



@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  newPost: FormGroup;
  postsService = inject(PostsService);
  router = inject(Router)

  constructor(){
    this.newPost = new FormGroup ({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    })
  }

  onSubmit(){
    this.postsService.createPost(this.newPost.value);
    this.router.navigate(['/posts'])
  }
}
