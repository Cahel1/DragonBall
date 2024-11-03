import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContinuarViendoPeliculas } from '../services/api-continuarviendo.service';
import { Pelicula } from '../services/ContinuarViendoPeliculas';
import { BlockbusterapiService } from '../services/blockbusterapi.service';
import { DragonballService } from '../services/dragonball.service';
import { PersonajeDragonBall } from '../interface/dragonball-interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButtons, IonMenuButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {

  constructor( // Inyectamos los servicios
    private blockbusterAPI: BlockbusterapiService,
    private router: Router,
    private continuarViendoPeliculas: ContinuarViendoPeliculas,
    private dragonballService: DragonballService
  ) { }

  //--------------------------------------------------------------------------------------------------------------------//
  // ---------                                  CARGA Y SELECCIÓN DE CATEGORÍA                                 ---------//
  // -------------------------------------------------------------------------------------------------------------------//
  categorias: string[] = ['Todo', 'Acción', 'Comedia', 'Drama', 'Terror', 'Romance', 'Suspenso', 'Aventura', 'Animación', 'Documental']; // Aquí tenemos la lista de categorías a seleccionar

  selectedCategoria: string = this.categorias[0]; // Inicia la categoría en 'Todos'

  irAPersonajes() {
    this.router.navigate(['/personajes']);
  }
  // Función para verificar cual categoría seleccionó el usuario
  selectCategory(categoria: string) {
    this.selectedCategoria = categoria;
    console.log("Categoría seleccionada: ", categoria);
  }

  // Verificamos que categoría está seleccionada
  isCategorySelected(category: string) {
    return this.selectedCategoria === category;
  }

  //--------------------------------------------------------------------------------------------------------------------//
  // ---------                             FUNCIONES PARA CONTINUAR VIENDO PELICULA                            ---------//
  // -------------------------------------------------------------------------------------------------------------------//
  listContinuarViendo: Pelicula[] = []; // Lista para almacenar películas continuar viendo
  listaDragonball: PersonajeDragonBall[] = [];// Lista almacenar DB
  peliculasTendencia: any[] = []; // Lista para almacenar peliculas en tendencia


  
  ngOnInit() {

    this.obtenerPersonajesDragonBall();
    // Cargamos desde la API la lista de películas en tendencia
    this.blockbusterAPI.getPeliculas(15, 0, "release_date").subscribe((pelicula) => {
      this.peliculasTendencia = pelicula;
    });

    // Cargamos desde el Array la lista de películas para continuar viendo
    this.listContinuarViendo = this.continuarViendoPeliculas.getPeliculas();
  }

  // Función para abrir la página continuar viendo
  openContinueMovie(id: number) {
    this.router.navigate(['continuar-viendo', id]);
  }

  // Función para abrir la previsualización de la película
  openPrevisualizarPelicula(id: string) {
    this.router.navigate(['previsualizar-pelicula', id]);
  }
  openDetallePersonaje(id: number) {
    const personaje = this.listaDragonball.find(p => p.id === id);
    if (personaje) {
      this.router.navigate(['/detalle-dragonball'], {
        state: {
          character: personaje,
        },
      });
    }
  }
  obtenerPersonajesDragonBall() {
    const personajesDragonBall = localStorage.getItem('personajesDragonBall');
    if(personajesDragonBall!== null) {
      this.listaDragonball = JSON.parse(personajesDragonBall);
    }
    else {
      this.dragonballService.obtenerFranquicia().subscribe((response)=> {
        console.log(response);
        this.listaDragonball = response.items;
        localStorage.setItem('personajesDragonBall', JSON.stringify(response.items));
      });
    }
  }
}