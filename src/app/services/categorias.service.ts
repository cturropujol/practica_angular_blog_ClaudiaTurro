import { Injectable } from '@angular/core';
import { Categoria } from '../db/categorias.db';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

    getAll(): string[] {
        return Categoria;
    }






}