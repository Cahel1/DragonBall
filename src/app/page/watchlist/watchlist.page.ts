import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
  IonList, IonMenuButton,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  ViewWillEnter
} from '@ionic/angular/standalone';
import { WatchlistService } from "../../services/watchlist.service";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faTrashCan } from "@fortawesome/pro-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/pro-regular-svg-icons";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonThumbnail, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, FaIconComponent, IonButtons, IonMenuButton]
})
export class WatchlistPage implements ViewWillEnter {

  peliculas: any = [];

  constructor(private watchlistservice: WatchlistService) {
  }

  ionViewWillEnter() {
    this.recargar()
  }

  recargar() {
    this.watchlistservice.getWatchlist().subscribe((pelis => {
      this.peliculas = pelis;
    }));
  }

  protected readonly faTrashCan = faTrashCan;

  onClickEliminar(pelicula: any) {
    this.watchlistservice.eliminateWatchlist((pelicula))
    this.recargar()
  }

  protected readonly faArrowLeft = faArrowLeft;

  onClickVolver() {
    window.history.back()
  }
}
