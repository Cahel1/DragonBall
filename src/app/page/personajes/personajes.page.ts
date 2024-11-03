import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { DragonballService } from '../../services/dragonball.service'; // Importa el servicio
import { PersonajeDragonBall } from '../../interface/dragonball-interface'; // Importa la interfaz del personaje

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class PersonajesPage implements OnInit {
  listaDragonball: PersonajeDragonBall[] = []; // Asegúrate de definir esto con el tipo correcto

  constructor(
    private router: Router,
    private dragonballService: DragonballService // Inyecta el servicio
  ) {}

  ngOnInit() {
    this.cargarPersonajes(); // Llama al método para cargar los datos al iniciar
  }

  cargarPersonajes() {
    this.dragonballService.obtenerFranquicia().subscribe((data) => {
      this.listaDragonball = data.items; // Asegúrate de asignar los items correctamente
    });
  }

  goBack() {
    this.router.navigate(['/tabs']);
  }
}