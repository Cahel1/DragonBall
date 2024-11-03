import {Component, Input, OnInit} from '@angular/core';
import {Peliculas} from "../../models/peliculas";

@Component({
  standalone:true,
  selector: 'app-cardpeliculalista',
  templateUrl: './cardpeliculalista.component.html',
  styleUrls: ['./cardpeliculalista.component.scss'],
})
export class CardpeliculalistaComponent  implements OnInit {
  @Input()pelicula!:Peliculas;

  constructor() { }

  ngOnInit() {}

}
