import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DetallePostComponent } from './pages/detalle-post/detalle-post.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:'home', component:HomeComponent},
  {path: 'posts', component: ListaPostsComponent},
  {path: 'post/:postId', component: DetallePostComponent},
  {path: 'posts/:categoria', component:ListaPostsComponent},
  {path: 'blog/new', component: FormularioComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
