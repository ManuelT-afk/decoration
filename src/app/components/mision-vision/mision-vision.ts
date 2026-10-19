import { Component } from '@angular/core';

@Component({
  selector: 'app-mision-vision',
  standalone: false,
  templateUrl: './mision-vision.html',
  styleUrl: './mision-vision.css',
})
export class MisionVision {

  titulo = "Nuestra Mision y Vision"

  misionVision = [
    {
      "titulo" : "Mision",
      "icono" : "collections",
      "descripcion" : "Nuestra mision es llegar a ser una empresa grande, en la ciudad de Mexico, que tenga muchos articulos a bajo precio, finaliza",
      "descripcion2" : "Tambien generar algunas sucursales en una tienda en linea que permita el envio a diferentes partes del pais."
      
    },
    {
      "titulo" : "Vision",
      "icono" : "event",
      "descripcion" : "Nuestra vision es que para el año 2030, tengamos minimo 6 sucursales en diferentes sucursales en la CDMX",
      "descripcion2" : "Genera envios a bajo costo a diferentes destinos, pero enpezando por las ciudades mas conocidas."
      
    }
  ] 
}
