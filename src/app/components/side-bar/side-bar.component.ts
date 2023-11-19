import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() post:Post;
  

  constructor(){
    this.post = {
      id: 0, titulo: '', subtitulo:'', texto: '', autor: '', imagen: '', fecha: '', categoria: '',
    }
  }

}
