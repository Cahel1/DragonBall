import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { play, bookmark, cart } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { HttpClientModule } from '@angular/common/http';
import { BlockbusterapiService } from 'src/app/services/blockbusterapi.service';

@Component({
  selector: 'app-previsualizar-pelicula',
  templateUrl: './previsualizar-pelicula.page.html',
  styleUrls: ['./previsualizar-pelicula.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [BlockbusterapiService]
})
export class PrevisualizarPeliculaPage implements OnInit {

  pelicula: any = [];

  linkPelicula: string = "";

  constructor(
    private router: Router,
    private blockbusterAPI: BlockbusterapiService
  ) {
    addIcons({ play, bookmark, cart })
  }

  ngOnInit() {

    let id = window.location.href.split("/").pop(); // Obtenemos el ID de la película desde la URL

    this.blockbusterAPI.getPeliculaById(id).subscribe((peli => {
      console.log(peli);
      
      if (Object.keys(peli).length > 4) {
        this.pelicula = peli;
        this.linkPelicula = 'https://lightgrey-owl-901213.hostingersite.com/portada_peliculas' + this.pelicula.poster_path;
        
      } else {
        this.router.navigate(['/']);
      }
    }));
  }
}
