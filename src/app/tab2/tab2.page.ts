import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonInfiniteScroll, IonInfiniteScrollContent, ViewWillEnter
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgForOf, NgOptimizedImage } from "@angular/common";
import { CardPeliculaComponent } from "../components/card-pelicula/card-pelicula.component";
import { Router } from '@angular/router';
import { BlockbusterapiService } from '../services/blockbusterapi.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButtons, IonMenuButton, NgForOf, NgOptimizedImage, CardPeliculaComponent, IonInfiniteScroll, IonInfiniteScrollContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2Page implements OnInit {

  peliculas: any = [];
  offset: number = 0;

  constructor(
    private router: Router,
    private blockBusterApi: BlockbusterapiService) {
  }

  ngOnInit() {

    // Llamamos a la función del servicio de blockbusterAPI para cargar las películas
    this.blockBusterApi.getPeliculas(32, 0, 'popularity').subscribe((peli => {
      this.peliculas = peli;
      this.offset += 32;
    }));

  }

  // Función para cargar películas con el scroll infinitamente hasta el límite
  onIonInfiniteLoad($event: any) {
    this.blockBusterApi.getPeliculas(16, this.offset, 'popularity').subscribe((peli => {
      console.log(peli.length);

      if (peli.length > 0) {
        this.peliculas = [...this.peliculas, ...peli];
        this.offset += 16;
      } else {
        $event.target.disabled = true;
      }
      $event.target.complete();
    }));
  }

  // Función para abrir la previsualización de la película
  openPrevisualizarPelicula(id: string) {
    this.router.navigate(['previsualizar-pelicula', id]);
  }
}
