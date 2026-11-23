import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  precio: number;
  imagen: string;
}
interface Pagina {
  titulo: string;
  descripcion: string;
  imagenPrincipal: string;
  productos: Producto[];
}
interface Hoja {
  frente: Pagina;
  reverso: Pagina;
}
@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  actual = 0;

  animando = false;

  hojas: Hoja[] = [
    this.crear('Velas decorativas', 'velas', [
      ['Vela aromática', 189],
      ['Vela lavanda', 229],
      ['Vela burbuja', 199],
      ['Set de velas', 299],
    ]),

    this.crear('Figuras decorativas', 'figuras', [
      ['Buda dorado', 389],
      ['Escultura abstracta', 499],
      ['Pájaro dorado', 259],
      ['Figura de gato', 329],
    ]),

    this.crear('Lámparas', 'lamparas', [
      ['Lámpara de cerámica', 899],
      ['Lámpara colgante', 1299],
      ['Lámpara de piso', 1499],
      ['Lámpara calada', 679],
    ]),

    this.crear('Jarrones y floreros', 'jarrones', [
      ['Jarrón de cerámica', 450],
      ['Florero de vidrio', 390],
      ['Jarrón dorado', 580],
      ['Florero floral', 420],
    ]),

    this.crear('Espejos', 'espejos', [
      ['Espejo circular', 890],
      ['Espejo de arco', 1090],
      ['Espejo decorativo', 1290],
      ['Espejo ovalado', 990],
    ]),

    this.crear('Textiles', 'textiles', [
      ['Cojín tejido', 349],
      ['Manta rosa', 699],
      ['Cojín botánico', 379],
      ['Manta con flecos', 599],
    ]),
  ];

  private crear(titulo: string, carpeta: string, datos: [string, number][]): Hoja {
    const base = 'assets/img/catalogo/' + carpeta + '/';

    const productos = datos.map((d, i) => ({
      nombre: d[0],
      precio: d[1],
      imagen: base + 'producto' + (i + 1) + '.jpg',
    }));

    return {
      frente: {
        titulo,
        descripcion: 'Colección para un hogar acogedor',
        imagenPrincipal: base + 'principal.jpg',
        productos: productos.slice(0, 2),
      },

      reverso: {
        titulo,
        descripcion: 'Más detalles para tu espacio',
        imagenPrincipal: base + 'principal.jpg',
        productos: productos.slice(2, 4),
      },
    };
  }

  siguiente(): void {
    if (this.animando || this.actual >= this.hojas.length) return;
    this.animando = true;
    this.actual++;
    setTimeout(() => (this.animando = false), 950);
  }

  anterior(): void {
    if (this.animando || this.actual <= 0) return;
    this.animando = true;
    this.actual--;
    setTimeout(() => (this.animando = false), 950);
  }

  capa(i: number): number {
    return i < this.actual ? i + 1 : this.hojas.length - i + 1;
  }

  get finalizado(): boolean {
    return this.actual === this.hojas.length;
  }
}
