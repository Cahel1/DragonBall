import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, MenuController } from '@ionic/angular/standalone';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { register } from 'swiper/element/bundle';

register()
// import {all} from "@awesome.me/kit-424812913b/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(library: FaIconLibrary, private menu: MenuController, private platform: Platform) {
    // library.addIconPacks(fas)
    // library.addIconPacks(far)
    // library.addIconPacks(fad)
    // library.addIcons(...all)
    this.initializeApp();
  }

  // Cuando la la plataforma o aplicación esté lista, recién aquí gente vamos a ocultar el splashscreen
  initializeApp() {
    this.platform.ready().then(() => {
      setTimeout(async () => {
        await SplashScreen.hide();
      }, 2000);
    });
  }


}
