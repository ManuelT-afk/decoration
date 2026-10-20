import { Component, AfterViewInit,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactoService } from '../../services/contacto';
declare var R: any;
declare var $: any; //   para darle uso a jquery

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements AfterViewInit {
  ngAfterViewInit(): void {
    var elements = document.querySelectorAll('select');
    R.Forsalect.init(elements);

    $('input#nombre, input#email, input#telefono, textarea#comentarios').characterCounter();
  }

  nombre = 'Nombre';
  email = 'Email';
  telefono = 'Telefono';
  fecha = 'Fecha';
}
