import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';

@Component({
  selector: 'app-vista-contacto',
  templateUrl: './vista-contacto.component.html',
  styleUrls: ['./vista-contacto.component.css']
})
export class VistaContactoComponent {
  constructor(private _CargarScritps:CargarScriptsService){
    _CargarScritps.Carga(["contacto"]);
  }
}
