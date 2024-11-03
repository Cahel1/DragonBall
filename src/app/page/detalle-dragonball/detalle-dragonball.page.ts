import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-detalle-dragonball',
  templateUrl: './detalle-dragonball.page.html',
  styleUrls: ['./detalle-dragonball.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class DetalleDragonballPage implements OnInit {
  character: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.character = navigation.extras.state['character'];
    }
  }

  goBack() {
    this.router.navigate(['/tabs']);
  }
}
