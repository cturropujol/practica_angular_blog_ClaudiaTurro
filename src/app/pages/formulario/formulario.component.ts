import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';
import { PostsService } from 'src/app/services/posts.service';



@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  
  postsService = inject(PostsService);
  categoriasService = inject(CategoriasService);
  router = inject(Router);
  datePipe = inject(DatePipe);

  newPost: FormGroup;
  submited = false;
  arrCategorias: string[] = [];


  constructor(){
    this.newPost = new FormGroup ({
      titulo: new FormControl(null, [
        Validators.required
      ]),
      texto: new FormControl(null, [
        Validators.required
      ]),
      autor: new FormControl(null, [
        Validators.required
      ]),
      imagen: new FormControl(null, [
        Validators.required
      ]),
      fecha: new FormControl(new Date(), [
        Validators.required
      ]),
      categoria: new FormControl(null, [
        Validators.required
      ]),
    })
  }

  ngOnInit(){
    this.arrCategorias= this.categoriasService.getAll();
  }

  onSubmit(){
    this.submited = true;
    
    if(this.newPost.valid){
    const fechaAlmacenada = this.newPost.get('fecha');
    if (fechaAlmacenada){
    const fechaFormateada = this.datePipe.transform(fechaAlmacenada.value, 'dd MMMM yyyy');
    this.newPost.get('fecha')?.setValue(fechaFormateada);
      }
    this.postsService.createPost(this.newPost.value);
   this.router.navigate(['/posts'])
   console.log(this.newPost.value)
    } else {
      this.newPost.invalid;
    }
  }

  checkError(controlName: string, errorName: string){
    const control = this.newPost.get(controlName) as AbstractControl;
    return control?.hasError(errorName) && (control?.touched || this.submited);
    // return this.newPost.get(controlName)?.hasError(errorName) && this.newPost.get(controlName)?.touched;
  }

  
}
