import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

interface Peliculas {
  id: string;
  movie_id: string;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  popularity: string;
  price: string;
  category: string;
  duration: string;
}

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor() { }

  getWatchlist(): Observable<Peliculas[]> {
    return new Observable((observer) => {
      const watchlist = localStorage.getItem("Watchlist");
      if (!watchlist) {
        observer.next([]);
      } else {
        observer.next(JSON.parse(watchlist));
      }
      observer.complete();
    });
  }

  addWatchlist(pelicula: Peliculas) {
    this.getWatchlist().subscribe((watchlist: Peliculas[]) => {
      const peliculaEncontrada = watchlist.some(x => x.id === pelicula.id);
      if (!peliculaEncontrada) {
        watchlist.push(pelicula);
        localStorage.setItem("Watchlist", JSON.stringify(watchlist));
      }
    });
  }

  eliminateWatchlist(pelicula: Peliculas) {
    this.getWatchlist().subscribe((watchlist: Peliculas[]) => {
      const index = watchlist.findIndex(x => x.id === pelicula.id);
      if (index >= 0) {
        watchlist.splice(index, 1);
        localStorage.setItem("Watchlist", JSON.stringify(watchlist));
      }
    });
  }

  buscarWatchlist(pelicula: Peliculas): Observable<boolean> {
    return new Observable((observer) => {
      this.getWatchlist().subscribe((watchlist: Peliculas[]) => {
        const encontrado = watchlist.some(x => x.id === pelicula.id);
        observer.next(encontrado);
        observer.complete();
      });
    });
  }
}
