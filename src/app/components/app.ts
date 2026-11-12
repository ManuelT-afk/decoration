import { Component, signal, OnInit, AfterViewInit, HostListener } from '@angular/core';
import $ from 'jquery';
declare var M: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App implements OnInit, AfterViewInit {
  mostrarVolverArriba = true;

  @HostListener('window:scroll')
  actualizarScroll(): void {
    this.mostrarVolverArriba = window.scrollY > 350;
  }

  volverArriba(): void {
    const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: 0, behavior: reducido ? 'auto' : 'smooth' });
  }

  ngAfterViewInit(): void {
    M.Slider.init(document.querySelectorAll('.slider'));
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
  }
  ngOnInit(): void {
    console.log('jQuery disponible:', $.fn.jquery);
  }
  protected readonly title = signal('decoracion');
  inicio = 'Inicio';
  categorias = 'Categoria';
  mision = 'Mision y Vision';
  catalogo = 'Catalogo';
  contacto = 'Contacto';
  redesSociales = 'Redes Sociales';
}
