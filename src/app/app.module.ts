import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { VistaInicioComponent } from './components/vista-inicio/vista-inicio.component';
import { VistaContactoComponent } from './components/vista-contacto/vista-contacto.component';
import { VistaPortafolioComponent } from './components/vista-portafolio/vista-portafolio.component';
import { VistaLanguageComponent } from './components/vista-language/vista-language.component';
import { VistaAboutComponent } from './components/vista-about/vista-about.component';
import { VistaErrorComponent } from './components/vista-error/vista-error.component';

//INICIO SERVICE
import { CargarScriptsService } from './services/cargar-scripts.service';

//FIN SERVICE

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VistaInicioComponent,
    VistaContactoComponent,
    VistaPortafolioComponent,
    VistaLanguageComponent,
    VistaAboutComponent,
    VistaErrorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'inicio',component:VistaInicioComponent},
      {path:'about',component:VistaAboutComponent},
      {path:'portafolio',component:VistaPortafolioComponent},
      {path:'lenguaje',component:VistaLanguageComponent},
      {path:'contacto',component:VistaContactoComponent},
      { path: '**', component:VistaErrorComponent}, 
    ])
  ],
  providers: [
    CargarScriptsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
