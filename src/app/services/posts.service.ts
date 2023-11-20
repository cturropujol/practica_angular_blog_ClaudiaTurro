import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { POSTS } from '../db/posts.db';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postIdCounter = 9;

  constructor() {

   }

  getAll(): Post[]{
    return POSTS;
  }

  createPost(post: Post){
    post.id = this.postIdCounter++;
    POSTS.push(post);
  }

  getCategoria(): string[]{
    return [...new Set(POSTS.map(post => post.categoria))];
  }
  getImg(): string[]{
    return [...(POSTS.map(post => post.imagen))];
  }

  getByCategoria(categoria: string): Post[]{
    return POSTS.filter(post => post.categoria === categoria)
  }

  getById(postId: number): Post |undefined {
    return POSTS.find(post => post.id === postId)
  }
  
  getLastsPosts(): Post[] {
    return POSTS.slice(POSTS.length -3, POSTS.length)
  }
  getLast(): Post | undefined {
  const lastPosts = POSTS.slice(POSTS.length - 1, POSTS.length);
  return lastPosts.length > 0 ? lastPosts[0] : undefined;
}

}
