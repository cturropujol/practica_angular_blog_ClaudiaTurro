import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

  @Input() post:Post;
  @Input() detalle: boolean = false;

  constructor(){
    this.post = {
      id: 0, titulo: '', texto: '', autor: '', imagen: '', fecha: '', categoria: '',
    }
  }

}
