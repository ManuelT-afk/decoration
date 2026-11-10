import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactoService } from '../../services/contacto';
import { Solicitud } from '../../models/solicitud';
import { NgForm } from '@angular/forms';

declare var M: any;
declare var R: any;
declare var $: any;

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('contactoForm') contactoForm?: NgForm;
  solicitudes: Solicitud[] = [];
  suscripcion?: Subscription;
  idEditar: string | null = null;
  guardando = false;
  error = '';
  mensaje = '';

  productos = [
    'Pastel de cumpleaños',
    'Pastel de bodas',
    'Cupcakes',
    'Galletas decoradas',
    'Postres individuales',
    'Mesa de postres',
  ];

  complementosDisponibles = [
    'Decoración personalizada',
    'Velas',
    'Tarjeta de felicitación',
    'Empaque especial',
  ];

  formulario: Solicitud = this.nuevoFormulario();

  constructor(private servicio: ContactoService) {}

  ngOnInit(): void {
    this.consultarSolicitudes();
  }

  ngOnDestroy(): void {
    this.suscripcion?.unsubscribe();
  }

  nuevoFormulario(): Solicitud {
    return {
      nombre: '',
      correo: '',
      telefono: '',
      fecha: '',
      modalidad: '',
      tipoProducto: '',
      complementos: [],
      detalles: '',
      aviso: false,
      fechaRegistro: Date.now(),
    };
  }

  consultarSolicitudes(): void {
    this.suscripcion = this.servicio.consultar().subscribe({
      next: (datos) => {
        this.solicitudes = datos;
        this.error = '';
      },
      error: (error) => {
        console.error(error);
        this.error = 'Error al consultar.';
      },
    });
  }

  tieneComplemento(c: string): boolean {
    return this.formulario.complementos.includes(c);
  }

  seleccionarComplemento(c: string, marcado: boolean): void {
    if (marcado) {
      if (!this.formulario.complementos.includes(c)) {
        this.formulario.complementos.push(c);
      }
    } else {
      this.formulario.complementos = this.formulario.complementos.filter((item) => item !== c);
    }
  }

  get formularioValido(): boolean {
    const f = this.formulario;

    return !!(
      f.nombre?.trim() &&
      f.correo?.trim() &&
      f.telefono?.trim() &&
      f.fecha?.trim() &&
      f.modalidad?.trim() &&
      f.tipoProducto?.trim() &&
      f.detalles?.trim()
    );
  }

  async guardar(): Promise<void> {
    if (this.guardando) return;

    if (!this.formularioValido) {
      this.error = 'Completa nombre, correo, teléfono, fecha, modalidad, tipo de producto y detalles.';
      this.mensaje = '';
      return;
    }

    this.guardando = true;
    this.error = '';
    this.mensaje = '';

    try {
      if (this.idEditar) {
        await this.servicio.actualizar(this.idEditar, this.formulario);
        this.mensaje = 'Solicitud actualizada correctamente.';
      } else {
        await this.servicio.insertar(this.formulario);
        this.mensaje = 'Solicitud registrada correctamente.';
      }

      this.limpiar(false);
    } catch (error) {
      console.error(error);
      this.error = 'No fue posible guardar.';
    } finally {
      this.guardando = false;
    }
  }

  editar(s: Solicitud): void {
    this.idEditar = s.id || null;
    this.formulario = { ...s };
    this.error = '';
    this.mensaje = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async eliminar(s: Solicitud): Promise<void> {
    if (!s.id || !window.confirm('¿Eliminar esta solicitud?')) return;

    try {
      await this.servicio.eliminar(s.id);

      if (this.idEditar === s.id) this.limpiar(false);

      this.mensaje = 'Solicitud eliminada correctamente.';
      this.error = '';
    } catch (error) {
      console.error(error);
      this.error = 'No fue posible eliminar.';
    }
  }

  limpiar(borrarMensajes = true): void {
    this.formulario = this.nuevoFormulario();
    this.idEditar = null;

    if (borrarMensajes) {
      this.error = '';
      this.mensaje = '';
    }
  }

  ngAfterViewInit(): void {
    if (typeof M !== 'undefined') {
      M.FormSelect.init(document.querySelectorAll('select'));
    }

    if (typeof R !== 'undefined') {
      R.FormSelect.init(document.querySelectorAll('select'));
    }

    if (typeof $ !== 'undefined') {
      $('input#nombre, input#email, input#telefono, textarea#comentarios').characterCounter();
    }
  }

  nombre = 'Nombre';
  email = 'Email';
  telefono = 'Telefono';
  fecha = 'Fecha';
}
