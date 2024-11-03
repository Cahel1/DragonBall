import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {triangle, ellipse, square, barcode} from 'ionicons/icons';
import {
  FaIconComponent,
  FaLayersComponent,
  FaLayersCounterComponent,
  FaStackComponent, FaStackItemSizeDirective
} from "@fortawesome/angular-fontawesome";
import {faFilm, faFire, faHouseChimney} from "@fortawesome/pro-solid-svg-icons";
import {faBagShopping, faChartLine, faUser} from "@fortawesome/pro-regular-svg-icons";
import {faQrcode} from "@fortawesome/pro-solid-svg-icons/faQrcode";
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import {Router} from "@angular/router";


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, FaIconComponent, FaLayersComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private alertController: AlertController, private router:Router) {
    addIcons({ triangle, ellipse, square });
  }

  protected readonly faFilm = faFilm;
  protected readonly faFire = faFire;
  protected readonly faHouseChimney = faHouseChimney;
  protected readonly faChartLine = faChartLine;
  protected readonly faBagShopping = faBagShopping;
  protected readonly faUser = faUser;
  protected readonly faQrcode = faQrcode;

  onQr(){
    this.scan().then((results)=>{
      if (results.startsWith("appbb://pelicula/")){
        let id=results.split("/").pop()
        this.router.navigate([
          "/tabs/pelicula",id
        ])
      }
    })

}
  async scan(): Promise<string> {
    let available=await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
    if (!available.available){
      await BarcodeScanner.installGoogleBarcodeScannerModule();
    }
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return "";
    }
    const { barcodes } = await BarcodeScanner.scan();
    return barcodes[0].rawValue;
  }
  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }
  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Dar permisos para usar camara.',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
