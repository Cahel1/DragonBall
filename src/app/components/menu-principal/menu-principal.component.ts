import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {
  IonAvatar,
  IonButton, IonButtons,
  IonContent, IonHeader, IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar
} from "@ionic/angular/standalone";
import { NgOptimizedImage } from "@angular/common";
import { faGear } from "@fortawesome/pro-regular-svg-icons";
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star, key, personAdd } from 'ionicons/icons';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
  imports: [
    FaIconComponent,
    RouterLink,
    IonMenu,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonRouterOutlet,
    IonSplitPane,
    IonHeader,
    IonButton,
    IonAvatar,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonIcon,
    NgOptimizedImage

  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuPrincipalComponent {

  constructor() {
    addIcons({ key, personAdd, heart });

  }


  protected readonly faGear = faGear;
}
addIcons({ heart, logoApple, settingsSharp, star });
