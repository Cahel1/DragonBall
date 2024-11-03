import { Injectable } from "@angular/core";
import { Pelicula } from "./ContinuarViendoPeliculas";

@Injectable({
  providedIn: 'root'
})
export class ContinuarViendoPeliculas {

  private peliculas: Pelicula[] = [
    {
      id: 1,
      nombre: 'Soul',
      fecha: 2020,
      categoria: 'Animación / Fantasía',
      sinopsis: 'Un profesor de música encuentra su alma en un viaje hacia el más allá, donde descubre un mundo lleno de creatividad y sabiduría. Una reflexión sobre la vida y los sueños.',
      imagen: 'assets/imagenes/continuar_soul.webp',
      url: 'https://lightgrey-owl-901213.hostingersite.com/peliculas/soul.mp4',
      duration: '1h 40m'
    },
    {
      id: 2,
      nombre: 'Shrek 2',
      fecha: 2004,
      categoria: 'Animación / Comedia',
      sinopsis: 'Shrek y Fiona regresan con más aventuras y nuevos personajes en esta secuela llena de humor y acción. La pareja intenta adaptarse a la vida en el reino de los padres de Fiona.',
      imagen: 'assets/imagenes/continuar_shrek.webp',
      url: 'https://lightgrey-owl-901213.hostingersite.com/peliculas/shrek2.mp4',
      duration: '1h 33m'
    },
    {
      id: 3,
      nombre: "Intensamente 2",
      fecha: 2023,
      categoria: "Animación / Aventura",
      sinopsis: "Riley, ahora adolescente, enfrenta nuevos desafíos emocionales mientras navega por la vida en la escuela secundaria. Sus emociones, lideradas por Alegría, deben adaptarse a esta nueva etapa.",
      imagen: "assets/imagenes/continuar_intensamente2.webp",
      url: "https://lightgrey-owl-901213.hostingersite.com/peliculas/intensamente2.mp4",
      duration: "1h 36m"
    },
    {
      id: 4,
      nombre: 'Toy Story',
      fecha: 1995,
      categoria: 'Animación / Aventura',
      sinopsis: 'Los juguetes cobran vida cuando no están siendo observados por los humanos. Sigue las peripecias de Woody y Buzz Lightyear en esta clásica película de animación.',
      imagen: 'assets/imagenes/continuar_toystory.webp',
      url: 'https://lightgrey-owl-901213.hostingersite.com/peliculas/toystory.mp4',
      duration: '1h 21m'
    },
    {
      id: 5,
      nombre: 'Wall-E',
      fecha: 2008,
      categoria: 'Animación / Ciencia Ficción',
      sinopsis: 'En un futuro lejano, Wall-E, un robot de limpieza, encuentra el propósito de su existencia al descubrir un nuevo mundo y luchar por un futuro mejor para la Tierra.',
      imagen: 'assets/imagenes/continuar_walle.webp',
      url: 'https://lightgrey-owl-901213.hostingersite.com/peliculas/walle.mp4',
      duration: '1h 38m'
    }
  ];

  // Método para obtener las películas para continuar viendo
  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

}