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

@NgModule({
  declarations: [App, Inicio, Categorias, MisionVision, RedesSociales, Contacto, ScrollReveal],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App, Inicio, Categorias, MisionVision, RedesSociales, Contacto],
})
export class AppModule {}
