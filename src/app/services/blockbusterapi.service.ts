import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Peliculas {
  id: string
  movie_id: string
  title: string
  overview: string
  release_date: string
  poster_path: string
  popularity: string
  price: string
  category: string
  duration: string
}

@Injectable({
  providedIn: 'root'
})
export class BlockbusterapiService {


  private urlAPIPeliculas = 'https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php';
  private urlAPIPelicula = 'https://lightgrey-owl-901213.hostingersite.com/api/get_pelicula.php';

  constructor(
    private http: HttpClient
  ) {
  }

  /* 
    API PARA OBTENER LISTA DE PELÍCULAS
  
    Parámetros disponibles para personalizar la consulta:
    
      - limit:
        Define la cantidad máxima de películas que deseas obtener en la respuesta.
        Valor predeterminado: 15.
        
      - offset:
        Establece desde qué posición se deben obtener las películas, permitiendo la paginación
        para evitar duplicados en consultas posteriores.
        Ejemplo: offset = 15 comenzará desde la película número 16.
  
      - order_by:
        Permite ordenar las películas según los siguientes criterios:
        
          * id: Ordena por el identificador único de cada película.
          * popularity: Ordena según la popularidad, mostrando las películas más populares primero.
          * release_date: Ordena por la fecha de lanzamiento, mostrando las películas más recientes en primer lugar.
          * price: Ordena por el precio de la película o costo de arrendamiento (de menor a mayor).
          * duration: Ordena por la duración total de la película (de menor a mayor tiempo).
  
    Nota: Si no se especifica un parámetro, se utilizarán valores predeterminados para proporcionar 
    una experiencia de consulta básica.
  */

  public getPeliculas(limit: number = 15, offset: number = 0, orderBy: string = ""): Observable<Peliculas[]> {
    var params = new HttpParams();
    params = params.set("limit", limit.toString());
    params = params.set("offset", offset.toString());
    params = params.set("order_by", orderBy.toString());
    return this.http.get<Peliculas[]>(this.urlAPIPeliculas, { params: params });
  }

  public getPeliculaById(id: string): Observable<Peliculas[]> {
    var params = new HttpParams();
    params = params.set("id", id);
    return this.http.get<Peliculas[]>(this.urlAPIPelicula, { params: params });
  }
}
