import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-subir',
  standalone: false,
  templateUrl: './boton-subir.html',
  styleUrl: './boton-subir.css',
})
export class BotonSubir implements OnInit {
  mostrarBoton = false;
  ngOnInit(): void {
    this.actualizarVisibilidad();
  }
  @HostListener('window:scroll') actualizarVisibilidad(): void {
    this.mostrarBoton = window.scrollY > 300;
  }
  subir(): void {
    const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: suave ? 'smooth' : 'auto' });
  }
}
