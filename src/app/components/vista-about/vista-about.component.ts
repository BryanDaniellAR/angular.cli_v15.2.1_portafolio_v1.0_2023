import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';

@Component({
  selector: 'app-vista-about',
  templateUrl: './vista-about.component.html',
  styleUrls: ['./vista-about.component.css']
})
export class VistaAboutComponent {
  constructor(private _CargarScritps:CargarScriptsService){
    _CargarScritps.Carga(["about"]);
  }
}
