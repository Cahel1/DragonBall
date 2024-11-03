import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { play, bookmark, heart, pause, folderOpen } from 'ionicons/icons';
import { Pelicula } from 'src/app/services/ContinuarViendoPeliculas';
import { ContinuarViendoPeliculas } from 'src/app/services/api-continuarviendo.service';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-continuar-viendo',
  templateUrl: './continuar-viendo.page.html',
  styleUrls: ['./continuar-viendo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContinuarViendoPage implements OnInit {


  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>; // Obtenemos el videoPlayer
  @ViewChild('imagenPortada', { static: false }) imagenPortada!: ElementRef<HTMLImageElement> // Obtenemos la imagen de portada

  pelicula: Pelicula | undefined;
  currentVideoUrl: string = '';
  stateTextPelicula: string = 'Continuar viendo';
  stateIconPelicula: string = 'play';

  constructor(
    private route: ActivatedRoute,
    private continarViendoPelicula: ContinuarViendoPeliculas
  ) {
    addIcons({ play, bookmark, heart, pause, folderOpen });
  }

  // Cuando se inicie la vista ejecutamos:
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.pelicula = this.continarViendoPelicula.getPeliculas().find(peli => peli.id === id);
  }

  reproducirPelicula(url: string) {

    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    const portada: HTMLImageElement = this.imagenPortada.nativeElement;

    // Si la pelicula ya tiene la URL cargada y está reproduciendose
    if (video.src === url) {
      if (video.paused) {
        video.play();
        this.stateTextPelicula = "Pausar"; // Cambiamos el texto al botón de reproducir
        this.stateIconPelicula = "pause";
        this.scrollToVideo(video);
      } else {
        video.pause();
        this.stateTextPelicula = "Continuar viendo"; // Cambiamos el texto al botón de reproducir
        this.stateIconPelicula = "play";
      }
      return;
    }

    this.currentVideoUrl = url; // Establecer la URL de la película
    video.src = this.currentVideoUrl; // Le pasamos la URL al videoPlayer

    portada.classList.add('fade-out'); // Ocultamos la imagen de portada
    setTimeout(() => {
      portada.style.display = 'none';
      video.style.display = 'block'; // Mostramos el vídeo luego de 0.25 segundos
    }, 0.25);


    video.play(); // Iniciar reproducción
    this.stateTextPelicula = "Pausar"; // Cambiamos el texto al botón de reproducir
    this.stateIconPelicula = "pause";
    this.scrollToVideo(video);

    // Agregar listener para ocultar el video al finalizar
    video.addEventListener('ended', () => {
      video.classList.remove('fade-in');
      video.classList.add('fade-out');
      setTimeout(() => {
        video.classList.remove('fade-out');
        video.style.display = 'none'; // Ocultar el video al finalizar
        portada.classList.remove('fade-out');
        portada.classList.add('fade-in');
        portada.style.display = 'block';
        this.stateTextPelicula = "Continuar viendo";
        this.stateIconPelicula = "play";
        video.src = '';
      }, 0.25);
    });
  }

  // Método para realizar un into scroll view hacia el elemento video
  scrollToVideo(video: HTMLVideoElement) {
    video.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
