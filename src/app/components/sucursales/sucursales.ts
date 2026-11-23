import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Sucursal {
  nombre: string;
  direccion: string;
  urlMapa: SafeResourceUrl;
}

@Component({
  selector: 'app-sucursales',
  standalone: false,
  templateUrl: './sucursales.html',
  styleUrl: './sucursales.css',
})
export class Sucursales {
  mapas: Sucursal[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.mapas = [
      {
        nombre: 'Sucursal',
        direccion: 'Luis cabrera 89, colonia Roma Norte CP 06700',
        urlMapa: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9119478750376!2d-99.16246312501363!3d19.416210081859937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3ba9f35f45%3A0x2a68c9ea6ab132e0!2sUniversidad%20de%20Londres%20plantel%20Luis%20Cabrera!5e0!3m2!1ses-419!2smx!4v1794923729923!5m2!1ses-419!2smx'
        ),
      },
      {
        nombre: 'Sucursal Aeropuerto',
        direccion: 'Calle Bol boulevard, Puerto Aereo Colonia Aviacion Civil, CP 15620',
        urlMapa: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30100.93341021568!2d-99.1191761228989!3d19.428961442856515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc77bd93229f%3A0x2d07ef561bad244!2sAeropuerto%20Internacional%20de%20la%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1794923966965!5m2!1ses-419!2smx'
        ),
      },
      {
        nombre: 'Sucursal Parque Delta',
        direccion: 'Calle la Morena 412, colonia Piedad Narvarte CP 03000',
        urlMapa: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.213516145059!2d-99.15686682501382!3d19.403178481869936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1a2816cd87%3A0x9d03a3d2ccf92f3b!2sParque%20Delta!5e0!3m2!1ses-419!2smx!4v1794924140256!5m2!1ses-419!2smx'
        ),
      },
    ];
  }
}

