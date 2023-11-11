import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsArr: Post[];

  constructor() {
    this.postsArr = [
     {
    titulo: 'Descubriendo los encantos de París',
    texto: 'París, la Ciudad de la Luz, es conocida por su arquitectura icónica, su exquisita gastronomía y su rica historia. En este viaje, exploraremos los encantos de la Torre Eiffel, pasearemos por los Campos Elíseos y nos perderemos en los encantadores barrios de Montmartre. ¡Acompáñanos en esta aventura parisina!',
    autor: 'Viajero Aventurero',
    imagen: 'https://unsplash.com/es/fotos/torre-eiffel-paris-NT1mJPgni6A',
    fecha: '2023-01-01',
    categoria: 'Europa',
  },
  {
    titulo: 'Explorando los templos de Kyoto',
    texto: 'Kyoto, en el corazón de Japón, alberga una impresionante colección de templos antiguos y jardines zen. En este viaje, nos sumergiremos en la espiritualidad de Kyoto, visitando templos emblemáticos como el Templo Dorado y el Santuario Fushimi Inari. Descubre la serenidad y la belleza de la cultura japonesa.',
    autor: 'Aventurero Zen',
    imagen: 'https://unsplash.com/es/fotos/pagoda-rodeada-de-arboles-E_eWwM29wfU',
    fecha: '2023-02-15',
    categoria: 'Asia',
  },
  {
    titulo: 'Explorando los parajes naturales de Patagonia',
    texto: 'La Patagonia, con sus vastos paisajes y glaciares imponentes, es un paraíso para los amantes de la naturaleza. En esta travesía, recorreremos los majestuosos paisajes de la Patagonia, explorando el Parque Nacional Torres del Paine y maravillándonos con la belleza única de esta región remota.',
    autor: 'Aventurero Naturalista',
    imagen: 'https://unsplash.com/es/fotos/glaciar-en-el-parque-nacional-los-glaciares-provincia-de-santa-cruz-patagonia-argentina-5RFMPufTKPA',
    fecha: '2023-03-30',
    categoria: 'America',
  },
  {
    titulo: 'Explorando la magia de Marrakech',
    texto: 'Embárcate en un viaje a Marrakech, la joya de Marruecos. Sumérgete en la fascinante mezcla de la historia y la modernidad mientras paseas por los estrechos callejones de la Medina, exploras los exquisitos jardines de Majorelle y te maravillas con la arquitectura única de la mezquita de Koutoubia. Descubre la magia de los zocos, la rica cultura y la hospitalidad marroquí en cada rincón de esta ciudad encantadora.',
    autor: 'Aventurero del Magreb',
    imagen: 'https://unsplash.com/es/fotos/textiles-de-varios-colores-colgados-junto-a-edificios-de-hormigon-LhVJaRPweJc', 
    fecha: '2023-05-20',
    categoria: 'Africa',
},
  {
    titulo: 'Explorando la herencia artística en Roma',
    texto: 'Roma, la Ciudad Eterna, es un tesoro de arte y cultura. Descubre la grandeza del Coliseo, maravíllate con la Capilla Sixtina en el Vaticano y sumérgete en la historia antigua de la Ciudad Imperial. Este viaje te llevará a través de los siglos de esplendor artístico en la capital italiana.',
    autor: 'Arte y Historia',
    imagen: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fecha: '2023-06-10',
    categoria: 'Europa',
  },
  {
    titulo: 'Explorando la Gran Manzana: Nueva York',
    texto: 'Embárcate en una emocionante aventura en la ciudad que nunca duerme: Nueva York. Descubre la majestuosidad de los rascacielos en Manhattan, pasea por el Central Park, explora la diversidad cultural en los barrios de Brooklyn y disfruta de la energía única de Times Square. Prepárate para sumergirte en la mezcla de historia, arte y vida urbana que hace de Nueva York una experiencia inolvidable.',
    autor: 'Aventurero Urbano',
    imagen: 'https://unsplash.com/es/fotos/autos-estacionados-cerca-del-edificio-marron-wOj5odhDOZ0',
    fecha: '2023-07-25',
    categoria: 'America',
  },
  {
    titulo: 'Aventuras entre los templos de Angkor Wat',
    texto: 'Camboya es el hogar de los majestuosos templos de Angkor Wat, una maravilla arquitectónica que te transportará a la grandeza del Imperio Jemer. Explora los intrincados pasillos, admira los relieves tallados y maravíllate con la serenidad de este sitio declarado Patrimonio de la Humanidad.',
    autor: 'Aventurero Cultural',
    imagen: 'https://unsplash.com/es/fotos/angkor-wat-camboya-EY3tC81nFt0',
    fecha: '2023-08-15',
    categoria: 'Asia',
  },
  {
    titulo: 'Safari en el Delta del Okavango',
    texto: 'Sumérgete en la belleza única del Delta del Okavango en Botswana, donde la vida silvestre prospera en uno de los entornos más impresionantes de África. Experimenta un safari acuático, avistando elefantes, hipopótamos y aves exóticas en este paraíso natural. ¡Descubre la magia del Okavango!',
    autor: 'Aventurero Delta',
    imagen: 'https://unsplash.com/es/fotos/elefante-gris-en-el-cuerpo-de-agua-durante-el-dia-AMk9rGzVSHs',
    fecha: '2023-09-30',
    categoria: 'Africa',
  },
    ]
   }

  getAll(){
    return this.postsArr;
  }

  createPost(post: Post){
    this.postsArr.push(post);
  }

  getByCategoria(categoria: string){
    return this.postsArr.filter((post) => {post.categoria === categoria})

  }
}
