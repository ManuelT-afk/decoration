import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var M : any; 
@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  })
  export class Inicio implements OnInit, AfterViewInit {
  ngOnInit(): void {
  M.Slider.init(document.querySelectorAll('.slider'));
  }
  ngAfterViewInit(): void {
    console.log('jQuery disponible:', $.fn.jquery);
  }
  nombreEmpresa = "Decoracion Mexicana"
  slogan = "Estilo y Diseño en cada color de tu casa"
  slideMadera = "Mobiliario"
  slideMaderaDesc = "Textura de madera"
  slideSala = "Espacion que tendras en tu sala"
  slideSalaDesc = "Piezas inspiradas para tu comodidad"
  slideDetalles = "Detalle que te inspiran"
  slidesDetalleDesc = "La Armonia para tu comidad"
}
