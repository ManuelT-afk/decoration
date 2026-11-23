import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './components/app';
import { Inicio } from './components/inicio/inicio';
import { Categorias } from './components/categorias/categorias';
import { MisionVision } from './components/mision-vision/mision-vision';
import { RedesSociales } from './components/redes-sociales/redes-sociales';
import { Contacto } from './components/contacto/contacto';
import { ScrollReveal } from './directives/scroll-reveal';
import { Sucursales } from './components/sucursales/sucursales';
import { Catalogo } from './components/catalogo/catalogo';
import { BotonSubir } from './components/boton-subir/boton-subir';

@NgModule({
  declarations: [
    App,
    Inicio,
    Categorias,
    MisionVision,
    RedesSociales,
    Contacto,
    ScrollReveal,
    Sucursales,
    Catalogo,
    BotonSubir,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App, Inicio, Categorias, MisionVision, RedesSociales, Contacto, Sucursales, Catalogo, BotonSubir],
})
export class AppModule {}
