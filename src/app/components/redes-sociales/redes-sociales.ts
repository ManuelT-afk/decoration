import { Component } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  standalone: false,
  templateUrl: './redes-sociales.html',
  styleUrl: './redes-sociales.css',
})
export class RedesSociales {
  leyenda = '© 2026 Copyright Decoracion Mexicana';

  redes = [
    {
      nombre: 'facebook',
      icon: 'fa-brands fa-facebook',
      url: 'https://www.facebook.com',
      color: '#1877f2',
      fuentes: '30px',
    },
    {
      nombre: 'Youtube',
      icon: 'fa-brands fa-youtube',
      url: 'https://www.youtube.com',
      color: '#e1306c',
      fuentes: '30px',
    },
    {
      nombre: 'instagram',
      icon: 'fa-brands fa-instagram',
      url: 'https://www.instagram.com',
      color: '#e1306c',
      fuentes: '30px',
    },
  ];
}
