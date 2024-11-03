import { Component, input, Input, OnInit } from '@angular/core';
import { faCartPlus, faHeartCirclePlus } from "@fortawesome/pro-regular-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { Router } from "@angular/router";
import { WatchlistService } from "../../services/watchlist.service";
import { faHeartCircle } from "@fortawesome/pro-solid-svg-icons";
import { ToastController } from "@ionic/angular";
import { PeliculasPage } from 'src/app/page/peliculas/peliculas.page';

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.scss'],
  imports: [
    FaIconComponent
  ],
  standalone: true
})
export class CardPeliculaComponent implements OnInit {
  
  @Input() pelicula: any;

  isWatchList: boolean = false;

  constructor(
    private router: Router, 
    private watchlistService: WatchlistService, 
    private toastController: ToastController) {
  }

  ngOnInit() {
    this.watchlistService.buscarWatchlist(this.pelicula).subscribe(value => {
      this.isWatchList = value;
    })
  }

  protected readonly faHeartCirclePlus = faHeartCirclePlus;
  protected readonly faCartPlus = faCartPlus;

  openPrevisualizarPelicula(id: string) {
    this.router.navigate(['previsualizar-pelicula', id]);
  }

  onClickWatchlist() {
    if (this.isWatchList) {
      this.watchlistService.eliminateWatchlist(this.pelicula);
      this.isWatchList = false;
      this.mostrarToast("¡Se ha eliminado de tu Watchlist!")
    } else {
      this.watchlistService.addWatchlist(this.pelicula);
      this.mostrarToast("¡Se ha agregado a tu Watchlist!")
      this.isWatchList = true;
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: "bottom"
    });
    await toast.present()

  }

  protected readonly faHeartCircle = faHeartCircle;
}
