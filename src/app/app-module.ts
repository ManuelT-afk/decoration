import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './components/app';
import { Inicio } from './components/inicio/inicio';
import { Categorias } from './components/categorias/categorias';
import { MisionVision } from './components/mision-vision/mision-vision';
import { RedesSociales } from './components/redes-sociales/redes-sociales';
import { Contacto } from './components/contacto/contacto';

@NgModule({
  declarations: [App, Inicio, Categorias, MisionVision, RedesSociales, Contacto],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App, Inicio, Categorias, MisionVision, RedesSociales, Contacto],
})
export class AppModule {}
