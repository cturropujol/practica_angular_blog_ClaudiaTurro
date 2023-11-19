import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { POSTS } from '../db/posts.db';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // postsArr: Post[];
  private postIdCounter = 9;

  constructor() {
//     this.postsArr = [
//      {
//     titulo: 'Descubriendo los encantos de París',
//     texto: 'París, la Ciudad de la Luz, es conocida por su arquitectura icónica, su exquisita gastronomía y su rica historia. En este viaje, exploraremos los encantos de la Torre Eiffel, pasearemos por los Campos Elíseos y nos perderemos en los encantadores barrios de Montmartre. ¡Acompáñanos en esta aventura parisina!',
//     autor: 'Viajero Aventurero',
//     imagen: 'https://images.unsplash.com/photo-1492136344046-866c85e0bf04?q=80&w=2928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     fecha: '01 ENERO, 2021',
//     categoria: 'EUROPA',
//   },
//   {
//     titulo: 'Explorando los templos de Kyoto',
//     texto: 'Kyoto, en el corazón de Japón, alberga una impresionante colección de templos antiguos y jardines zen. En este viaje, nos sumergiremos en la espiritualidad de Kyoto, visitando templos emblemáticos como el Templo Dorado y el Santuario Fushimi Inari. Descubre la serenidad y la belleza de la cultura japonesa.',
//     autor: 'Aventurero Zen',
//     imagen: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     fecha: '15 FEBRERO, 2023',
//     categoria: 'ASIA',
//   },
//   {
//     titulo: 'Explorando los parajes naturales de Patagonia',
//     texto: 'La Patagonia, con sus vastos paisajes y glaciares imponentes, es un paraíso para los amantes de la naturaleza. En esta travesía, recorreremos los majestuosos paisajes de la Patagonia, explorando el Parque Nacional Torres del Paine y maravillándonos con la belleza única de esta región remota.',
//     autor: 'Aventurero Naturalista',
//     imagen: 'https://images.unsplash.com/photo-1552751753-0fc84ae5b6c8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     fecha: '30 MARZO, 2022',
//     categoria: 'AMERICA',
//   },
//   {
//     titulo: 'Explorando la magia de Marrakech',
//     texto: 'Embárcate en un viaje a Marrakech, la joya de Marruecos. Sumérgete en la fascinante mezcla de la historia y la modernidad mientras paseas por los estrechos callejones de la Medina, exploras los exquisitos jardines de Majorelle y te maravillas con la arquitectura única de la mezquita de Koutoubia. Descubre la magia de los zocos, la rica cultura y la hospitalidad marroquí en cada rincón de esta ciudad encantadora.',
//     autor: 'Aventurero del Magreb',
//     imagen: 'https://images.unsplash.com/photo-1536237717235-0acadb345d8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
//     fecha: '20 MAYO, 2022',
//     categoria: 'AFRICA',
// },
//   {
//     titulo: 'Explorando la herencia artística en Roma',
//     texto: 'Roma, la Ciudad Eterna, es un tesoro de arte y cultura. Descubre la grandeza del Coliseo, maravíllate con la Capilla Sixtina en el Vaticano y sumérgete en la historia antigua de la Ciudad Imperial. Este viaje te llevará a través de los siglos de esplendor artístico en la capital italiana.',
//     autor: 'Arte y Historia',
//     imagen: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     fecha: '10 OCTUBRE, 2023',
//     categoria: 'EUROPA',
//   },
//   {
//     titulo: 'Explorando la Gran Manzana: Nueva York',
//     texto: 'Embárcate en una emocionante aventura en la ciudad que nunca duerme: Nueva York. Descubre la majestuosidad de los rascacielos en Manhattan, pasea por el Central Park, explora la diversidad cultural en los barrios de Brooklyn y disfruta de la energía única de Times Square. Prepárate para sumergirte en la mezcla de historia, arte y vida urbana que hace de Nueva York una experiencia inolvidable.',
//     autor: 'Aventurero Urbano',
//     imagen: 'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     fecha: '25 ENERO, 2020',
//     categoria: 'AMERICA',
//   },
//   {
//     titulo: 'Aventuras entre los templos de Angkor Wat',
//     texto: 'Camboya es el hogar de los majestuosos templos de Angkor Wat, una maravilla arquitectónica que te transportará a la grandeza del Imperio Jemer. Explora los intrincados pasillos, admira los relieves tallados y maravíllate con la serenidad de este sitio declarado Patrimonio de la Humanidad.',
//     autor: 'Aventurero Cultural',
//     imagen: 'https://images.unsplash.com/photo-1566706546199-a93ba33ce9f7?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     fecha: '15 DICIEMBRE, 2022',
//     categoria: 'ASIA',
//   },
//   {
//     titulo: 'Safari en el Delta del Okavango',
//     texto: 'Sumérgete en la belleza única del Delta del Okavango en Botswana, donde la vida silvestre prospera en uno de los entornos más impresionantes de África. Experimenta un safari acuático, avistando elefantes, hipopótamos y aves exóticas en este paraíso natural. ¡Descubre la magia del Okavango!',
//     autor: 'Aventurero Delta',
//     imagen: 'https://images.unsplash.com/photo-1620002742217-7bf1a4b79c76?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     fecha: '30 SEPTIEMBRE, 2020',
//     categoria: 'AFRICA',
//   },
//     ]
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

  getByCategoria(categoria: string): Post[]{
    return POSTS.filter(post => post.categoria === categoria)
  }

}
