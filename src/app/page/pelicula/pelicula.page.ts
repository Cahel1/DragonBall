import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonContent,
  IonHeader, IonImg,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faArrowLeft } from "@fortawesome/pro-regular-svg-icons";
import { BlockbusterapiService } from 'src/app/services/blockbusterapi.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, FaIconComponent, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent]
})
export class PeliculaPage implements OnInit {

  pelicula: any = [];

  constructor(
    private blockbusterAPI: BlockbusterapiService) { }

  ngOnInit() {

    let id = window.location.href.split("/").pop(); // Obtenemos el ID de la URL de la película

    this.blockbusterAPI.getPeliculaById(id).subscribe((peli => {
      if (peli.length > 0) {
        this.pelicula = peli[0];
      } else {
        window.history.back();
      }
    }));
  }

  protected readonly faArrowLeft = faArrowLeft;

  onClickVolver() {
    window.history.back()
  }
}
