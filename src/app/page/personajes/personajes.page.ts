import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { DragonballService } from '../../services/dragonball.service';
import { PersonajeDragonBall } from '../../interface/dragonball-interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class PersonajesPage implements OnInit {
  listaDragonball: PersonajeDragonBall[] = [];

  constructor(
    private router: Router,
    private dragonballService: DragonballService
  ) {}

  ngOnInit() {
    this.cargarPersonajes(); 
  }

  cargarPersonajes() {
    this.dragonballService.obtenerFranquicia().subscribe((data) => {
      this.listaDragonball = data.items;
    });
  }

  goBack() {
    this.router.navigate(['/tabs']);
  }
}